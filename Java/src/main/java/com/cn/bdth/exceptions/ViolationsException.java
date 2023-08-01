package com.cn.bdth.exceptions;


import lombok.Data;

/**
 * 用户违规异常
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
public class ViolationsException extends RuntimeException {

    private String message;

    private Integer code;


    public ViolationsException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public ViolationsException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public ViolationsException() {

    }
}
