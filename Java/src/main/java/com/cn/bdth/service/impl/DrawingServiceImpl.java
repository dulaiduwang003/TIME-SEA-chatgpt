package com.cn.bdth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.common.FunCommon;

import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.dto.DrawingImage2TaskDto;
import com.cn.bdth.dto.DrawingTextDto;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.model.PictureDrawingModel;
import com.cn.bdth.service.DrawingService;
import com.cn.bdth.structure.DrawingStructure;
import com.cn.bdth.structure.ServerStructure;
import com.cn.bdth.utils.*;
import com.cn.bdth.vo.DrawingDetailVo;
import com.cn.bdth.vo.DrawingOpsVo;
import com.cn.bdth.vo.DrawingTaskVo;
import com.cn.bdth.vo.UserDrawingVo;
import com.cn.bdth.vo.admin.DrawingVo;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
public class DrawingServiceImpl implements DrawingService {

    private final DrawingMapper drawingMapper;

    private final RedisTemplate<String, Object> redisTemplate;

    private final AliUploadUtils aliUploadUtils;

    private final ImageUtils imageUtils;

    private final FunCommon funCommon;

    private final UserMapper userMapper;

    private final ChatUtils chatUtils;

    private final RedisUtils redisUtils;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public DrawingTaskVo publishDrawingTextTask(final DrawingTextDto dto) {
        chatUtils.deplete(funCommon.getServer().getSdTextImageFrequency(), UserUtils.getCurrentLoginId());
        //发布绘图任务
        final Drawing drawing = new Drawing()
                .setPrompt(dto.getPrompt())
                .setNegativePrompt(dto.getNegative_prompt())
                .setUserId(UserUtils.getCurrentLoginId());
        drawingMapper.insert(drawing);
        final PictureDrawingModel model =
                BeanUtils.copyClassProperTies(dto, PictureDrawingModel.class)
                        .setOpenId(UserUtils.getCurrentOpenId()).setDrawingId(drawing.getDrawingId())
                        .setOverride_settings(new PictureDrawingModel.Override().setSd_model_checkpoint(dto.getModelName()));
        //提交任务到队列中
        redisTemplate.opsForList().leftPush(ServerConstant.DRAWING_TASK_QUEUE, new DrawingStructure().setIsType(ServerConstant.DRAWING_TEXT_TYPE.intValue()).setPictureDrawingModel(model));
        return new DrawingTaskVo().setDrawingId(drawing.getDrawingId()).setLocation(redisTemplate.opsForList().size(ServerConstant.DRAWING_TASK_QUEUE));
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public DrawingTaskVo publishDrawingImage2Task(final DrawingImage2TaskDto dto) {
        chatUtils.deplete(funCommon.getServer().getSdImage2Frequency(), UserUtils.getCurrentLoginId());
        //上传绘图资源
        final String resource = aliUploadUtils.uploadFile(dto.getImages(), FileEnum.PAINTING.getDec(), null);
        final Drawing drawing = new Drawing()
                .setPrompt(dto.getPrompt())
                .setNegativePrompt(dto.getNegative_prompt())
                .setOriginalUrl(resource)
                .setUserId(UserUtils.getCurrentLoginId());

        drawingMapper.insert(drawing);

        final PictureDrawingModel model = DrawingImage2TaskDto.convertToPictureImgModel(dto)
                .setInit_images(List.of(imageUtils.convertImageToBase64(resource)))
                .setOpenId(UserUtils.getCurrentOpenId()).setDrawingId(drawing.getDrawingId());
        //提交任务到队列中
        redisTemplate.opsForList().leftPush(ServerConstant.DRAWING_TASK_QUEUE, new DrawingStructure().setIsType(ServerConstant.DRAWING_IMAGE_TYPE.intValue()).setPictureDrawingModel(model));
        return new DrawingTaskVo().setDrawingId(drawing.getDrawingId()).setLocation(redisTemplate.opsForList().size(ServerConstant.DRAWING_TASK_QUEUE));
    }

    @Override
    public boolean isDrawingSuccessful(final Long id) {
        return (drawingMapper.selectCount(new QueryWrapper<Drawing>()
                .lambda()
                .eq(Drawing::getDrawingId, id)
                .isNotNull(Drawing::getGenerateUrl)
        )) > 0;
    }

    @Override
    public boolean isMjServerStateAndFrequency(final Long isType) {
        final ServerStructure server = funCommon.getServer();
        final Long frequency = Objects.equals(isType, ServerConstant.DRAWING_IMAGE_TYPE) ? server.getMjImage2Frequency() : server.getMjTextImageFrequency();

        if (!(userMapper.selectCount(new QueryWrapper<User>()
                .lambda().eq(User::getUserId, UserUtils.getCurrentLoginId())
                .ge(User::getFrequency, frequency)
        ) >= 1)) {
            throw new FrequencyException();
        }

        return NetUtils.checkUrlConnectivity(server.getMjUrl() + ServerConstant.DRAWING_TEXT);
    }

    @Override
    public boolean isSdServerStateAndFrequency(final Long isType) {
        final ServerStructure server = funCommon.getServer();
        final Long frequency = Objects.equals(isType, ServerConstant.DRAWING_IMAGE_TYPE) ? server.getSdImage2Frequency() : server.getSdTextImageFrequency();

        if (!(userMapper.selectCount(new QueryWrapper<User>()
                .lambda().eq(User::getUserId, UserUtils.getCurrentLoginId())
                .ge(User::getFrequency, frequency)
        ) >= 1)) {
            throw new FrequencyException();
        }

        return NetUtils.checkUrlConnectivity(server.getSdUrl() + ServerConstant.DRAWING_TEXT);
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

        return drawingMapper.selectPage(new Page<>(pageNum, 8), lambdaQueryWrapper).convert(c -> new DrawingOpsVo()
                .setImage(c.getGenerateUrl())
                .setValue(new DrawingOpsVo.ImageInfo()
                        .setDrawingId(c.getDrawingId())
                        .setPrompt(c.getPrompt())
                        .setCreatedTime(c.getCreatedTime())
                ));

    }

    @Override
    public IPage<DrawingVo> getDrawingPage(final int pageNum) {
        return drawingMapper.selectPage(new Page<>(pageNum, 8), new QueryWrapper<Drawing>()
                .lambda()
                .select(Drawing::getDrawingId, Drawing::getGenerateUrl, Drawing::getIsPublic)
        ).convert(c -> new DrawingVo().setDrawingId(c.getDrawingId()).setGenerateUrl(c.getGenerateUrl()).setIsPublic(c.getIsPublic()));
    }

    @Override
    public void putPublicDrawingOps(final Long drawingId) {
        final Drawing drawing = drawingMapper.selectOne(new QueryWrapper<Drawing>()
                .lambda()
                .eq(Drawing::getDrawingId, drawingId)
                .select(Drawing::getIsPublic, Drawing::getDrawingId)
        );
        drawingMapper.updateById(drawing.setIsPublic((drawing.getIsPublic() == 1L ? 0 : 1L)));
    }

    @Override
    public void deleteDrawingById(final Long drawingId) {
        //如果操作人是管理员则忽略
        if (UserUtils.getCurrentRole().equals(AuthConstant.ADMIN)) {
            drawingMapper.deleteById(drawingId);
        } else {
            drawingMapper.deleteById(new QueryWrapper<Drawing>()
                    .lambda().eq(Drawing::getDrawingId, drawingId)
                    .eq(Drawing::getUserId, UserUtils.getCurrentLoginId())
            );
        }

    }

    @Override
    public IPage<UserDrawingVo> getUserDrawingOpsPage(final int pageNum) {
        return drawingMapper.selectPage(new Page<>(pageNum, 8), new QueryWrapper<Drawing>()
                .lambda()
                .isNotNull(Drawing::getGenerateUrl)
                .eq(Drawing::getUserId, UserUtils.getCurrentLoginId())
                .select(Drawing::getDrawingId, Drawing::getGenerateUrl)
        ).convert(c -> new UserDrawingVo().setDrawingId(c.getDrawingId()).setGenerateUrl(c.getGenerateUrl()));
    }
}
