package com.cn.bdth.exceptions;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public class RewardException extends RuntimeException {
    private String message;

    private Integer code;


    public RewardException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public RewardException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public RewardException() {
        this.message = "非法获取奖励,已记录违规,多次将限制IP";
        this.code = 500;
    }
}
