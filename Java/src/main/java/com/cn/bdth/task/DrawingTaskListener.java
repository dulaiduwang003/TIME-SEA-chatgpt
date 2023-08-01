package com.cn.bdth.task;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cn.bdth.common.FunCommon;

import com.cn.bdth.common.WxSubscribe;
import com.cn.bdth.common.WxSubscribeTemplate;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.model.PictureDrawingModel;
import com.cn.bdth.structure.DrawingStructure;
import com.cn.bdth.structure.ServerStructure;
import com.cn.bdth.utils.AliUploadUtils;
import com.cn.bdth.utils.BaiduTranslationUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
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
public class DrawingTaskListener {

    private final RedisTemplate<String, Object> redisTemplate;
    private final FunCommon funCommon;
    private final ThreadPoolTaskExecutor threadPoolTaskExecutor;
    private final WebClient.Builder webClientBuilder;
    private final Semaphore semaphore;
    private final WxSubscribeTemplate wxSubscribeTemplate;
    private final WxSubscribe wxSubscribe;
    private final BaiduTranslationUtil baiduTranslationUtil;
    private final AliUploadUtils aliUploadUtils;

    private final UserMapper userMapper;

    private final DrawingMapper drawingMapper;

    @Autowired
    public DrawingTaskListener(UserMapper userMapper, DrawingMapper drawingMapper, AliUploadUtils aliUploadUtils, BaiduTranslationUtil baiduTranslationUtil, WxSubscribe wxSubscribe, WxSubscribeTemplate wxSubscribeTemplate, RedisTemplate<String, Object> redisTemplate, FunCommon funCommon, WebClient.Builder webClientBuilder) {
        this.userMapper = userMapper;
        this.drawingMapper = drawingMapper;
        this.baiduTranslationUtil = baiduTranslationUtil;
        this.aliUploadUtils = aliUploadUtils;
        this.wxSubscribe = wxSubscribe;
        this.redisTemplate = redisTemplate;
        this.wxSubscribeTemplate = wxSubscribeTemplate;
        this.funCommon = funCommon;
        this.webClientBuilder = webClientBuilder;
        this.threadPoolTaskExecutor = new ThreadPoolTaskExecutor();
        this.threadPoolTaskExecutor.setCorePoolSize(1);
        this.threadPoolTaskExecutor.setMaxPoolSize(1);
        this.threadPoolTaskExecutor.setThreadNamePrefix("DrawingTaskExecutor-");
        this.threadPoolTaskExecutor.initialize();
        this.semaphore = new Semaphore(1);

    }

    /**
     * 监听任务队列
     */
    @EventListener(ApplicationReadyEvent.class)
    public void startListening() {
        threadPoolTaskExecutor.execute(() -> {
            while (!Thread.currentThread().isInterrupted()) {
                DrawingStructure drawingStructure = null;
                try {
                    semaphore.acquire();
                    // 尝试获取信号量许可
                    drawingStructure = (DrawingStructure) redisTemplate.opsForList().rightPop(ServerConstant.DRAWING_TASK_QUEUE, 2, TimeUnit.SECONDS);
                    if (drawingStructure != null) {
                        final PictureDrawingModel model = drawingStructure.getPictureDrawingModel();
                        //尝试翻译
                        try {
                            model.setPrompt(baiduTranslationUtil.translation(model.getPrompt()));
                        } catch (Exception e) {
                            log.error("绘图时翻译失败  原因：{} 位置：{}", e.getMessage(), e.getClass());
                        }
                        invokeDrawingApi(model, drawingStructure.getIsType() == ServerConstant.DRAWING_IMAGE_TYPE ? ServerConstant.DRAWING_IMAGE : ServerConstant.DRAWING_TEXT);
                    }
                } catch (Exception e) {
                    if (drawingStructure != null) {
                        final ServerStructure server = funCommon.getServer();
                        Long frequency = drawingStructure.getIsType() == ServerConstant.DRAWING_IMAGE_TYPE ? server.getSdImage2Frequency() : server.getSdTextImageFrequency();
                        userMapper.update(null, new UpdateWrapper<User>()
                                .lambda()
                                .eq(User::getOpenId, drawingStructure.getPictureDrawingModel().getOpenId())
                                .setSql("frequency = frequency +" + frequency)
                        );
                    }
                    log.error("绘图出现异常:{},位置:{}", e.getMessage(), e.getClass());
                } finally {
                    semaphore.release(); // 释放信号量许可
                }
            }
        });
    }


    /**
     * 调用 绘图API
     *
     * @param model the model
     */
    public void invokeDrawingApi(final PictureDrawingModel model, final String uri) {
        final String block = webClientBuilder.build()
                .post()
                .uri(funCommon.getServer().getSdUrl() + uri)
                .body(BodyInserters.fromValue(model))
                .retrieve()
                .bodyToMono(String.class)
                .block();
        try {
            final String dec = FileEnum.PAINTING.getDec();
            //下载图片
            final String imageUri = aliUploadUtils.uploadBase64(Objects.requireNonNull(JSONObject.parseObject(
                    block
            )).getJSONArray("images").getString(0), dec);
            //回调至用户数据表
            drawingMapper.updateById(
                    new Drawing()
                            .setDrawingId(model.getDrawingId())
                            .setGenerateUrl(imageUri)
            );
            //把制作结果发给用户
            final JSONObject jsonObject = wxSubscribeTemplate.drawingOutcomeNotice(model.getOpenId(), true, "创作成功!前往个人中心查看吧!", LocalDateTime.now());
            wxSubscribe.wxSubscribeMessages(jsonObject);
        } catch (IOException e) {
            final JSONObject jsonObject = wxSubscribeTemplate.drawingOutcomeNotice(model.getOpenId(), false, "创作失败!请检查关键词是否违规!", LocalDateTime.now());
            wxSubscribe.wxSubscribeMessages(jsonObject);
            log.error("在处理成功响应图片转化BASE64时出现报错:{} ,错误类:{}", e.getMessage(), e.getClass());
        }

    }
}
