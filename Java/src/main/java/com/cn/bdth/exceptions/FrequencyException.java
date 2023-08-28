package com.cn.bdth.exceptions;


import lombok.Data;

/**
 * 兑换异常
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
public class FrequencyException extends RuntimeException {

    private String message;

    private Integer code;


    public FrequencyException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public FrequencyException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public FrequencyException() {
        this.message = "Super币不足 请观看广告视频获取奖励";
        this.code = 500;
    }
}
