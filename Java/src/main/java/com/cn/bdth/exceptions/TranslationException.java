package com.cn.bdth.exceptions;


import lombok.Data;

/**
 * 翻译异常
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
public class TranslationException extends RuntimeException {

    private String message;

    private Integer code;


    public TranslationException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public TranslationException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }


    public TranslationException() {

    }
}
