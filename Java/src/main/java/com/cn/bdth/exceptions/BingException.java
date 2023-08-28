package com.cn.bdth.exceptions;


import lombok.Data;


/**
 * 登录授权类异常处理
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@SuppressWarnings("all")
public class BingException extends RuntimeException {

    private String message;

    private Integer code;


    public BingException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public BingException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }
}
