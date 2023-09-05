package com.cn.bdth.common;

import com.cn.bdth.config.NewBingDefaultConfig;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.utils.RedisUtils;
import lombok.Data;
import lombok.RequiredArgsConstructor;
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
@Data
public class NewBingCommon {

    private final RedisUtils redisUtils;

    private final NewBingDefaultConfig newBingDefaultConfig;

    public String getNewBingCookie() {
        final Object value = redisUtils.getValue(ServerConstant.NEW_BING_CONFIG);
        if (value == null) {
            return newBingDefaultConfig.getNewBingCookie();
        }
        try {
            return String.valueOf(value);
        } catch (Exception e) {
            log.warn("已清除上一个版本的NEW BING配置,请前往控制台重新配置New BING参数配置");
            redisUtils.delKey(ServerConstant.NEW_BING_CONFIG);
            return newBingDefaultConfig.getNewBingCookie();
        }
    }

}
