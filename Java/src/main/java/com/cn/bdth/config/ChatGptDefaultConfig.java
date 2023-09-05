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
public class ChatGptDefaultConfig {


    @Value("${config.openAiUrl}")
    private String openAiUrl;

    @Value("${config.openAiPlusUrl}")
    private String openAiPlusUrl;

    @Value("${config.openKey}")
    private String openKey;

    @Value("${config.openPlusKey}")
    private String openPlusKey;

    @Value("${config.gptTextImageFrequency}")
    private Long gptTextImageFrequency;

    @Value("${config.gptFrequency}")
    private Long gptFrequency;

    @Value("${config.gptPlusFrequency}")
    private Long gptPlusFrequency;
}
