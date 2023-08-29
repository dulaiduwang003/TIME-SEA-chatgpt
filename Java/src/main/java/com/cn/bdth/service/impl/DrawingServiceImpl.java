package com.cn.bdth.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.common.StableDiffusionCommon;
import com.cn.bdth.common.WxSubscribe;
import com.cn.bdth.common.WxSubscribeTemplate;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.dto.DrawingGptTextDto;
import com.cn.bdth.dto.DrawingSdImage2TaskDto;
import com.cn.bdth.dto.DrawingSdTextDto;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.exceptions.DrawingException;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.model.GptImageModel;
import com.cn.bdth.model.PictureSdDrawingModel;
import com.cn.bdth.service.DrawingService;
import com.cn.bdth.structure.DrawingSdQueueStructure;
import com.cn.bdth.utils.*;
import com.cn.bdth.vo.DrawingDetailVo;
import com.cn.bdth.vo.DrawingOpsVo;
import com.cn.bdth.vo.DrawingTaskVo;
import com.cn.bdth.vo.UserDrawingVo;
import com.cn.bdth.vo.admin.DrawingVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class DrawingServiceImpl implements DrawingService {

    private final DrawingMapper drawingMapper;

    private final RedisTemplate<String, Object> redisTemplate;

    private final AliUploadUtils aliUploadUtils;

    private final ImageUtils imageUtils;

    private final UserMapper userMapper;

    private final ChatUtils chatUtils;

    private final WebClient.Builder webClientBuilder;

    private final BaiduTranslationUtil translationUtil;

    private final WxSubscribeTemplate wxSubscribeTemplate;

    private final WxSubscribe wxSubscribe;

    private final WeChatUtils weChatUtils;

    private final ChatGptCommon chatGptCommon;

    private final StableDiffusionCommon stableDiffusionCommon;

    @Async
    public void buildAsyncGptImage(final GptImageModel gptImageModel, final Long drawingId, final String openId, final String openUrl, final String openKey) {
        try {
            gptImageModel.setPrompt(translationUtil.englishTranslation(gptImageModel.getPrompt()));
        } catch (Exception e) {
            log.warn("GPT绘图时 百度翻译调用失败 本次调用将采用原文提示词");
        }
        webClientBuilder.baseUrl(openUrl)
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + openKey)
                .build()
                .post()
                .uri(ServerConstant.GPT_DRAWING)
                .body(BodyInserters.fromValue(gptImageModel))
                .retrieve()
                .bodyToMono(String.class)
                .doOnError(t -> {
                    drawingMapper.deleteById(drawingId);
                    final JSONObject json = wxSubscribeTemplate.drawingOutcomeNotice(openId, false, ExceptionMessages.DRAWING_MISTAKE, LocalDateTime.now());
                    wxSubscribe.wxSubscribeMessages(json);
                })
                .onErrorResume(t -> Mono.empty()) // 忽略错误
                .subscribe(block -> {
                    final JSONObject jsonObject = JSONObject.parseObject(block);
                    final String imageUrl = jsonObject.getJSONArray("data").getJSONObject(0).getString("url");
                    final Drawing drawing = new Drawing().setDrawingId(drawingId).setGenerateUrl(aliUploadUtils.uploadImageFromUrl(imageUrl, FileEnum.PAINTING.getDec(), UUID.randomUUID() + ".jpg"));
                    drawingMapper.updateById(drawing);
                    //把制作结果发给用户
                    final JSONObject json = wxSubscribeTemplate.drawingOutcomeNotice(openId, true, ExceptionMessages.DRAWING_SUCCEED, LocalDateTime.now());
                    wxSubscribe.wxSubscribeMessages(json);
                });

    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public DrawingTaskVo publishGptDrawingTextTask(final DrawingGptTextDto dto) {
        // 微信文字识别能力 防止用户发送色情 政治信息
//        weChatUtils.filterText(dto.getPrompt(), UserUtils.getCurrentOpenId());
        final ChatGptCommon.ChatGptStructure chatGptStructure = chatGptCommon.getChatGptStructure();
        chatUtils.deplete(chatGptStructure.getGptTextImageFrequency(), UserUtils.getCurrentLoginId());
        final Drawing drawing = new Drawing()
                .setPrompt(dto.getPrompt())
                .setUserId(UserUtils.getCurrentLoginId());
        drawingMapper.insert(drawing);
        buildAsyncGptImage(DrawingGptTextDto.conversionModels(dto), drawing.getDrawingId(), UserUtils.getCurrentOpenId(), chatGptStructure.getOpenAiUrl(), chatGptStructure.getOpenKey());
        return new DrawingTaskVo().setDrawingId(drawing.getDrawingId()).setLocation(0L);
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public DrawingTaskVo publishSdDrawingTextTask(final DrawingSdTextDto dto) {
        // 微信文字识别能力 防止用户发送色情 政治信息
        //   weChatUtils.filterText(dto.getPrompt(), UserUtils.getCurrentOpenId());
        //获取登录人ID
        final Long currentLoginId = UserUtils.getCurrentLoginId();

        chatUtils.deplete(stableDiffusionCommon.getStableDiffusionStructure().getSdTextImageFrequency(), currentLoginId);
        //发布绘图任务
        final Drawing drawing = new Drawing()
                .setPrompt(dto.getPrompt())
                .setUserId(UserUtils.getCurrentLoginId())
                .setNegativePrompt(dto.getNegative_prompt());
        drawingMapper.insert(drawing);
        final PictureSdDrawingModel model =
                BeanUtils.copyClassProperTies(dto, PictureSdDrawingModel.class)
                        .setOpenId(UserUtils.getCurrentOpenId()).setDrawingId(drawing.getDrawingId())
                        .setOverride_settings(new PictureSdDrawingModel.Override().setSd_model_checkpoint(dto.getModelName()));
        //提交任务到队列中
        redisTemplate.opsForList().leftPush(ServerConstant.DRAWING_SD_TASK_QUEUE, new DrawingSdQueueStructure().setIsType(ServerConstant.DRAWING_TEXT_TYPE.intValue()).setPictureSdDrawingModel(model));
        //返回任务VO
        return new DrawingTaskVo().setDrawingId(drawing.getDrawingId()).setLocation(redisTemplate.opsForList().size(ServerConstant.DRAWING_SD_TASK_QUEUE));
    }


    @Override
    @Transactional(rollbackFor = Exception.class)
    public DrawingTaskVo publishSdDrawingImage2Task(final DrawingSdImage2TaskDto dto) {
        // 微信文字识别能力 防止用户发送色情 政治信息
//        weChatUtils.filterText(dto.getPrompt(), UserUtils.getCurrentOpenId());
        final Long currentLoginId = UserUtils.getCurrentLoginId();
        chatUtils.deplete(stableDiffusionCommon.getStableDiffusionStructure().getSdImage2Frequency(), currentLoginId);
        //上传绘图资源
        final String resource = aliUploadUtils.uploadFile(dto.getImages(), FileEnum.PAINTING.getDec(), null);
        //检查是否为黄图
        try {
            weChatUtils.filterImage(resource);
        } catch (Exception e) {
            //删除黄图
            aliUploadUtils.deleteFile(resource);
            throw new DrawingException(ExceptionMessages.DRAWING_VIOLATIONS);
        }
        final Drawing drawing = new Drawing()
                .setPrompt(dto.getPrompt())
                .setNegativePrompt(dto.getNegative_prompt())
                .setOriginalUrl(resource)
                .setUserId(UserUtils.getCurrentLoginId());
        drawingMapper.insert(drawing);

        final PictureSdDrawingModel model = DrawingSdImage2TaskDto.convertToPictureImgModel(dto)
                .setInit_images(List.of(imageUtils.convertImageToBase64(resource)))
                .setOpenId(UserUtils.getCurrentOpenId()).setDrawingId(drawing.getDrawingId());
        //提交任务到队列中
        redisTemplate.opsForList().leftPush(ServerConstant.DRAWING_SD_TASK_QUEUE, new DrawingSdQueueStructure().setIsType(ServerConstant.DRAWING_IMAGE_TYPE.intValue()).setPictureSdDrawingModel(model));
        return new DrawingTaskVo().setDrawingId(drawing.getDrawingId()).setLocation(redisTemplate.opsForList().size(ServerConstant.DRAWING_SD_TASK_QUEUE));


    }

    @Override
    public boolean isDrawingSuccessful(final Long id) {
        final boolean isDrawing = drawingMapper.selectCount(new QueryWrapper<Drawing>()
                .lambda()
                .eq(Drawing::getDrawingId, id)
        ) > 0;
        if (isDrawing) {
            return drawingMapper.selectCount(new QueryWrapper<Drawing>()
                    .lambda()
                    .eq(Drawing::getDrawingId, id)
                    .isNotNull(Drawing::getGenerateUrl)
            ) > 0;
        } else {
            throw new DrawingException(ExceptionMessages.DRAWING_DELETE);
        }
    }


    @Override
    public boolean isSdServerStateAndFrequency(final Long isType) {

        final StableDiffusionCommon.StableDiffusionStructure stableDiffusionStructure = stableDiffusionCommon.getStableDiffusionStructure();
        final Long frequency = Objects.equals(isType, ServerConstant.DRAWING_IMAGE_TYPE) ? stableDiffusionStructure.getSdImage2Frequency() : stableDiffusionStructure.getSdTextImageFrequency();

        if (!(userMapper.selectCount(new QueryWrapper<User>()
                .lambda().eq(User::getUserId, UserUtils.getCurrentLoginId())
                .ge(User::getFrequency, frequency)
        ) >= 1)) {
            throw new FrequencyException();
        }

        return NetUtils.checkUrlConnectivity(stableDiffusionStructure.getSdUrl() + ServerConstant.SD_DRAWING_TEXT);
    }

    @Override
    public DrawingDetailVo getDrawingResult(final Long id) {
        final Drawing drawing = drawingMapper.selectOne(new QueryWrapper<Drawing>()
                .lambda().eq(Drawing::getDrawingId, id)
                .isNotNull(Drawing::getGenerateUrl)
                .select(Drawing::getPrompt, Drawing::getGenerateUrl, Drawing::getOriginalUrl, Drawing::getCreatedTime, Drawing::getUserId)
        );
        if (drawing == null) {
            return null;
        }
        final DrawingDetailVo vo = new DrawingDetailVo();
        final DrawingDetailVo.DrawingImage drawingImage = new DrawingDetailVo.DrawingImage().setGenerateImage(drawing.getGenerateUrl());
        if (drawing.getOriginalUrl() != null) {
            drawingImage.setOriginalImage(drawing.getOriginalUrl());
            vo.setDrawingImage(drawingImage);
        } else {
            vo.setDrawingText(new DrawingDetailVo.DrawingText().setGenerateImage(drawing.getGenerateUrl()));
        }
        final User user = userMapper.selectById(drawing.getUserId());
        //填充VO
        return vo.setAvatar(user.getAvatar())
                .setUserName(user.getUserName())
                .setCreatedTime(drawing.getCreatedTime())
                .setPrompt(drawing.getPrompt());
    }

    @Override
    public IPage<DrawingOpsVo> getDrawingOpsResult(final int pageNum, final int isPublic) {
        final LambdaQueryWrapper<Drawing> lambdaQueryWrapper = new QueryWrapper<Drawing>()
                .lambda()
                .eq((isPublic == ServerConstant.IS_PUBLIC), Drawing::getIsPublic, isPublic)
                .eq(isPublic != ServerConstant.IS_PUBLIC, Drawing::getUserId, UserUtils.getCurrentLoginId())
                .isNotNull(Drawing::getGenerateUrl)
                .select(Drawing::getPrompt, Drawing::getGenerateUrl, Drawing::getDrawingId, Drawing::getCreatedTime);

        return drawingMapper.selectPage(new Page<>(pageNum, 15), lambdaQueryWrapper).convert(c -> new DrawingOpsVo()
                .setImage(c.getGenerateUrl())
                .setValue(new DrawingOpsVo.ImageInfo()
                        .setDrawingId(c.getDrawingId())
                        .setPrompt(c.getPrompt())
                        .setCreatedTime(c.getCreatedTime())
                ));

    }

    @Override
    public IPage<DrawingVo> getDrawingPage(final int pageNum) {
        return drawingMapper.selectPage(new Page<>(pageNum, 15), new QueryWrapper<Drawing>()
                .lambda()
                .select(Drawing::getDrawingId, Drawing::getGenerateUrl, Drawing::getIsPublic)
                .orderByDesc(Drawing::getCreatedTime)
        ).convert(c -> new DrawingVo().setDrawingId(c.getDrawingId()).setGenerateUrl(c.getGenerateUrl()).setIsPublic(c.getIsPublic()));
    }

    @Override
    public void putPublicDrawingOps(final Long drawingId) {
        final Drawing drawing = drawingMapper.selectOne(new QueryWrapper<Drawing>()
                .lambda()
                .eq(Drawing::getDrawingId, drawingId)
                .select(Drawing::getIsPublic, Drawing::getDrawingId)
                .orderByDesc(Drawing::getCreatedTime)
        );
        drawingMapper.updateById(drawing.setIsPublic((drawing.getIsPublic() == 1L ? 0 : 1L)));
    }

    @Override
    public void deleteDrawingById(final Long drawingId) {
        //如果操作人是管理员则忽略
        if (UserUtils.getCurrentRole().equals(AuthConstant.ADMIN)) {
            drawingMapper.deleteById(drawingId);
        } else {
            drawingMapper.delete(new QueryWrapper<Drawing>()
                    .lambda().eq(Drawing::getDrawingId, drawingId)
                    .eq(Drawing::getUserId, UserUtils.getCurrentLoginId())
            );
        }

    }

    @Override
    public IPage<UserDrawingVo> getUserDrawingOpsPage(final int pageNum) {
        return drawingMapper.selectPage(new Page<>(pageNum, 15), new QueryWrapper<Drawing>()
                .lambda()
                .isNotNull(Drawing::getGenerateUrl)
                .eq(Drawing::getUserId, UserUtils.getCurrentLoginId())
                .select(Drawing::getDrawingId, Drawing::getGenerateUrl)
                .orderByDesc(Drawing::getCreatedTime)
        ).convert(c -> new UserDrawingVo().setDrawingId(c.getDrawingId()).setGenerateUrl(c.getGenerateUrl()));
    }

}
