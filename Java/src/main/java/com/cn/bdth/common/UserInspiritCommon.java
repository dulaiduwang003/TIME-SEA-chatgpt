package com.cn.bdth.common;

import com.cn.bdth.config.UserInspiritDefaultConfig;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.utils.RedisUtils;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
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
public class UserInspiritCommon {

    private final RedisUtils redisUtils;

    private final UserInspiritDefaultConfig userInspiritDefaultConfig;

    public InspiritStructure getInspiritStructure() {
        final Object value = redisUtils.getValue(ServerConstant.INSPIRIT_CONFIG);
        if (value == null) {
            return getDefault();
        }
        try {
            return (InspiritStructure) value;
        } catch (Exception e) {
            log.warn("已清除上一个版本的激励配置,请前往控制台重新配置激励参数配置");
            redisUtils.delKey(ServerConstant.INSPIRIT_CONFIG);
            return getDefault();
        }
    }

    private InspiritStructure getDefault() {
        log.warn("请前往控制台配置ChatGPT参数配置");
        return new InspiritStructure()
                .setIncentiveFrequency(userInspiritDefaultConfig.getIncentiveFrequency())
                .setVideoFrequency(userInspiritDefaultConfig.getVideoFrequency())
                .setSignInFrequency(userInspiritDefaultConfig.getSignInFrequency());
    }

    @Data
    @Accessors(chain = true)
    public static class InspiritStructure {
        private Long incentiveFrequency;
        private Long signInFrequency;
        private Long videoFrequency;

    }

}
