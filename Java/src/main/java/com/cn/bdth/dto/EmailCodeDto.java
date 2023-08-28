package com.cn.bdth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class EmailCodeDto {


    @Email(message = "邮箱格式错误")
    private String email;

    @Size(min = 5, max = 20, message = "密码在5-20位之间")
    private String password;

    @NotBlank(message = "验证码不能为空")
    private String code;
}
