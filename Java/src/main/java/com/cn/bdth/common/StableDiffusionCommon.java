package com.cn.bdth.common;

import com.cn.bdth.config.StableDiffusionDefaultConfig;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.utils.RedisUtils;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class StableDiffusionCommon {

    private final RedisUtils redisUtils;

    private final StableDiffusionDefaultConfig stableDiffusionDefaultConfig;

    public StableDiffusionStructure getStableDiffusionStructure() {
        final Object value = redisUtils.getValue(ServerConstant.SD_CONFIG);
        if (value == null) {
            return getDefault();
        }
        try {
            return (StableDiffusionStructure) value;
        } catch (Exception e) {
            log.warn("已清除上一个版本的SD配置,请前往控制台重新配置SD参数配置");
            redisUtils.delKey(ServerConstant.SD_CONFIG);
            return getDefault();
        }
    }

    private StableDiffusionStructure getDefault() {
        log.warn("请前往控制台配置ChatGPT参数配置");
        return new StableDiffusionStructure()
                .setSdUrl(stableDiffusionDefaultConfig.getSdUrl())
                .setSdImageFrequency(stableDiffusionDefaultConfig.getSdImageFrequency());
    }

    @Data
    @Accessors(chain = true)
    public static class StableDiffusionStructure {

        private Long sdImageFrequency;

        private String sdUrl;

    }
}
