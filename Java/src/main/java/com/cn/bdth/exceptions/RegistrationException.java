package com.cn.bdth.exceptions;

import lombok.Data;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@SuppressWarnings("all")
public class RegistrationException extends RuntimeException {
    private String message;

    private Integer code;


    public RegistrationException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public RegistrationException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }
}
