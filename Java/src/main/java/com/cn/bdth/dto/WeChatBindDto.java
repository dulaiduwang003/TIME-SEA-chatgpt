package com.cn.bdth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * 微信授权登录
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
public class WeChatBindDto {

    @Email(message = "邮箱格式不正确")
    private String email;

    @NotBlank(message = "邮箱密码不能为空")
    private String password;
}
