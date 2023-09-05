package com.cn.bdth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@RequiredArgsConstructor
public class PersonalityDto {

    @NotBlank(message = "model不能为空")
    private String model;

    @NotNull(message = "topP不能为空")
    private Integer top_p;

    @NotNull(message = "maxTokens不能为空")
    private Integer max_tokens;

    @NotNull(message = "temperature不能为空")
    private Integer temperature;

    @NotBlank(message = "openKey不能为空")
    private String openKey;

    @NotBlank(message = "openAiUrl不能为空")
    private String openAiUrl;

    @NotBlank(message = "questions不能为空")
    private String questions;

    @NotBlank(message = "answer不能为空")
    private String answer;

    @NotNull(message = "speed不能为空")
    private Integer speed;

}
