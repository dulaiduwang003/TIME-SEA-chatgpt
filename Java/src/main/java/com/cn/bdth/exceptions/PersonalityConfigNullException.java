package com.cn.bdth.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class PersonalityConfigNullException extends RuntimeException {
    private String message;

    private Integer code;


    public PersonalityConfigNullException() {

        this.message = "请先设置个性化配置信息";
        this.code = 500;
    }


}
