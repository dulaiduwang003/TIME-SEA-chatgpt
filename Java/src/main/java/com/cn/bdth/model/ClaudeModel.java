package com.cn.bdth.model;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.LinkedList;
import java.util.List;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */


@Data
@Accessors(chain = true)
public  class ClaudeModel {

    private List<String> attachments = new LinkedList<>();

    private ClaudeModel.Completion completion;

    private String conversation_uuid;

    private String organization_uuid;

    private String text;

    private String sessionKey;


    @Data
    @Accessors(chain = true)
    public static class Completion {

        private String model = "claude-2";

        private String prompt;

        private String timezone = "Asia/Shanghai";
    }
}
