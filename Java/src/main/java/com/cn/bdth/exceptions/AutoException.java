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
public class AutoException extends RuntimeException {

    private String message;

    private Integer code;


    public AutoException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public AutoException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }
}
