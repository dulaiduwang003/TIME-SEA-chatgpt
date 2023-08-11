package com.cn.bdth.dto;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class GptMiniDto {

    private String prompt;


    private List<Context> context;

    @Data
    @Accessors(chain = true)
    public static class Context {

        private String question;

        private String answer;
    }
}
