package com.cn.bdth.config;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@Data
public class UserInspiritDefaultConfig {

    @Value("${config.incentiveFrequency}")
    private Long incentiveFrequency;

    @Value("${config.signInFrequency}")
    private Long signInFrequency;

    @Value("${config.videoFrequency}")
    private Long videoFrequency;

}
