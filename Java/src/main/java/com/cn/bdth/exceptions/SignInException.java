package com.cn.bdth.exceptions;


import lombok.Data;

/**
 * 上传文件异常
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
public class SignInException extends RuntimeException {

    private String message;

    private Integer code;


    public SignInException(final String message, final Integer code) {
        super(message);
        this.message = message;
        this.code = code;
    }

    public SignInException(final String message) {
        super(message);
        this.message = message;
        this.code = 500;
    }

    public SignInException() {
        this.message = "签到失败";
        this.code = 500;
    }
}
