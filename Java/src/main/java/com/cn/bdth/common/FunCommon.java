package com.cn.bdth.common;

import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.structure.ServerStructure;
import com.cn.bdth.utils.RedisUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


/**
 * 机器人 组件
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class FunCommon {

    private final RedisUtils redisUtils;

    @Value("${config.openAiUrl}")
    private String openAiUrl;

    @Value("${config.sdUrl}")
    private String sdUrl;

    @Value("${config.openKey}")
    private String openKey;

    @Value("${config.incentiveFrequency}")
    private Long incentiveFrequency;

    @Value("${config.signInFrequency}")
    private Long signInFrequency;

    @Value("${config.videoFrequency}")
    private Long videoFrequency;

    @Value("${config.sdTextImageFrequency}")
    private Long sdTextImageFrequency;

    @Value("${config.sdImage2Frequency}")
    private Long sdImage2Frequency;

    @Value("${config.mjTextImageFrequency}")
    private Long mjTextImageFrequency;

    @Value("${config.mjImage2Frequency}")
    private Long mjImage2Frequency;

    @Value("${config.gptFrequency}")
    private Long gptFrequency;

    @Value("${config.mjUrl}")
    private String mjUrl;


    public ServerStructure getServer() {
        final ServerStructure value = (ServerStructure) redisUtils.getValue(ServerConstant.CONFIG);
        if (value == null) {
            log.warn("当前正在使用服务器默认配置,请及时前往控制台配置服务器参数");
            return new ServerStructure()
                    .setSignInFrequency(signInFrequency)
                    .setVideoFrequency(videoFrequency)
                    .setSdUrl(sdUrl)
                    .setMjUrl(mjUrl)
                    .setOpenKey(openKey)
                    .setGptFrequency(gptFrequency)
                    .setSdImage2Frequency(sdImage2Frequency)
                    .setSdTextImageFrequency(sdTextImageFrequency)
                    .setMjImage2Frequency(mjImage2Frequency)
                    .setMjTextImageFrequency(mjTextImageFrequency)
                    .setOpenAiUrl(openAiUrl)
                    .setIncentiveFrequency(incentiveFrequency);
        } else {
            return value;
        }
    }


}
