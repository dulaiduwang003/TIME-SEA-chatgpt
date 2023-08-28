package com.cn.bdth.model;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
@Accessors(chain = true)
public class GptModel implements Serializable {

    private String model;

    private int top_p = 1;

    private List<Messages> messages;

    private boolean stream = true;

    private int max_tokens = 2048;

    private int temperature = 1;


    @Data
    public static class Messages {

        private String role;

        private String content;
    }

}
