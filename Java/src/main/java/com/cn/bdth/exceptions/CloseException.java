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
public class CloseException extends RuntimeException {

    private String message;

    private Integer code;


    public CloseException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public CloseException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public CloseException() {
        this.message = "用户主动关闭了连接";
        this.code = 500;
    }
}
