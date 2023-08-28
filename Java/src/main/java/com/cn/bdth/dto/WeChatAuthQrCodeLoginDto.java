package com.cn.bdth.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * 微信授权登录
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
public class WeChatAuthQrCodeLoginDto {

    @NotBlank(message = "微信授权CODE不能为空")
    private String code;

    @NotBlank(message = "校验CODE不能为空")
    private String verifyCode;
}
