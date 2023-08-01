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
public class ExchangeException extends RuntimeException {

    private String message;

    private Integer code;


    public ExchangeException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public ExchangeException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public ExchangeException() {
        this.message = "兑换失败";
        this.code = 500;
    }
}
