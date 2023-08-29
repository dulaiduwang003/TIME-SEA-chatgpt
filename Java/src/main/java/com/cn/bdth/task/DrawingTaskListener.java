package com.cn.bdth.task;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cn.bdth.common.StableDiffusionCommon;
import com.cn.bdth.common.WxSubscribe;
import com.cn.bdth.common.WxSubscribeTemplate;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.model.PictureSdDrawingModel;
import com.cn.bdth.structure.DrawingSdQueueStructure;
import com.cn.bdth.utils.AliUploadUtils;
import com.cn.bdth.utils.BaiduTranslationUtil;
import com.cn.bdth.utils.WeChatUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

/**
 * 绘图任务监听器
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@Slf4j
@Transactional(rollbackFor = Exception.class)
@RequiredArgsConstructor
public class DrawingTaskListener {

    private final RedisTemplate<String, Object> redisTemplate;

    private final StableDiffusionCommon stableDiffusionCommon;

    private final WebClient.Builder webClientBuilder;
    private final Semaphore semaphoreSd = new Semaphore(1);

    private final WxSubscribeTemplate wxSubscribeTemplate;

    private final WxSubscribe wxSubscribe;

    private final BaiduTranslationUtil baiduTranslationUtil;

    private final AliUploadUtils aliUploadUtils;

    private final UserMapper userMapper;

    private final DrawingMapper drawingMapper;

    private final WeChatUtils weChatUtils;

    /**
     * 监听SD任务队列
     */
    @EventListener(ApplicationReadyEvent.class)
    public void sdListening() {
        new Thread(() -> {
            while (true) {
                DrawingSdQueueStructure drawingSdQueueStructure;
                try {
                    semaphoreSd.acquire();
                    // 尝试获取信号量许可
                    drawingSdQueueStructure = (DrawingSdQueueStructure) redisTemplate.opsForList().rightPop(ServerConstant.DRAWING_SD_TASK_QUEUE, 2, TimeUnit.SECONDS);
                    if (drawingSdQueueStructure != null) {
                        final PictureSdDrawingModel model = drawingSdQueueStructure.getPictureSdDrawingModel();
                        //尝试翻译
                        try {
                            model.setPrompt(baiduTranslationUtil.englishTranslation(model.getPrompt()));
                        } catch (Exception e) {
                            log.warn("绘图时调用百度翻译翻译失败 本次绘图将采用原文提示词");
                        }
                        invokeSdDrawingApi(model, drawingSdQueueStructure.getIsType() == ServerConstant.DRAWING_IMAGE_TYPE ? ServerConstant.SD_DRAWING_IMAGE : ServerConstant.SD_DRAWING_TEXT, drawingSdQueueStructure.getIsType());
                    }
                } catch (InterruptedException e) {
                    log.error("信号量异常 原因:{} 位置:{}", e.getMessage(), e.getClass());
                } finally {
                    semaphoreSd.release(); // 释放信号量许可
                }
            }
        }).start();
    }


    /**
     * 调用 SD绘图API
     *
     * @param model the model
     */
    public void invokeSdDrawingApi(final PictureSdDrawingModel model, final String uri, final int isType) {
        String imageUri = null;

        try {
            final String block = webClientBuilder.build()
                    .post()
                    .uri(stableDiffusionCommon.getStableDiffusionStructure().getSdUrl() + uri)
                    .body(BodyInserters.fromValue(model))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
            final String dec = FileEnum.PAINTING.getDec();
            //下载图片
            imageUri = aliUploadUtils.uploadBase64(Objects.requireNonNull(JSONObject.parseObject(block)).getJSONArray("images").getString(0), dec);
            weChatUtils.filterImage(imageUri);
            //回调至用户数据
            drawingMapper.updateById(
                    new Drawing()
                            .setDrawingId(model.getDrawingId())
                            .setGenerateUrl(imageUri)
            );
            //把制作结果发给用户
            final JSONObject jsonObject = wxSubscribeTemplate.drawingOutcomeNotice(model.getOpenId(), true, ExceptionMessages.DRAWING_SUCCEED, LocalDateTime.now());
            wxSubscribe.wxSubscribeMessages(jsonObject);
        } catch (Exception e) {
            if (imageUri != null) {
                //删除线上资源
                aliUploadUtils.deleteFile(imageUri);
            }
            //删除图片
            drawingMapper.deleteById(model.getDrawingId());
            final StableDiffusionCommon.StableDiffusionStructure structure = stableDiffusionCommon.getStableDiffusionStructure();
            Long frequency = isType == ServerConstant.DRAWING_IMAGE_TYPE ? structure.getSdImage2Frequency() : structure.getSdTextImageFrequency();
            final String openId = model.getOpenId();
            userMapper.update(null, new UpdateWrapper<User>()
                    .lambda()
                    .eq(User::getOpenId, openId)
                    .setSql("frequency = frequency +" + frequency)
            );
            final JSONObject jsonObject = wxSubscribeTemplate.drawingOutcomeNotice(openId, false, ExceptionMessages.DRAWING_MISTAKE, LocalDateTime.now());
            wxSubscribe.wxSubscribeMessages(jsonObject);
        }

    }


}
