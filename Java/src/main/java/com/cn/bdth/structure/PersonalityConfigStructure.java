package com.cn.bdth.structure;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class PersonalityConfigStructure implements Serializable {

    private String model;

    private Integer top_p;

    private Integer max_tokens;

    private Integer temperature;

    private String openKey;

    private String openAiUrl;

    private String questions;

    private String answer;

    private Integer speed;
}
