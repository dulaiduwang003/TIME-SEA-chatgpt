package com.cn.bdth.exceptions;


import lombok.Data;

/**
 * 绘图异常
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
public class DrawingException extends RuntimeException {

    private String message;

    private Integer code;


    public DrawingException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public DrawingException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public DrawingException() {
        this.message = "绘图失败";
        this.code = 500;
    }
}
