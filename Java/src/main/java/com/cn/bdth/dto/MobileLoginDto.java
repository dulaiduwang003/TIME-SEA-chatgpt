package com.cn.bdth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 手机号 验证码登录
 *
 * @author yzq
 * @date 2023/10/18 20:39
 */
@Data
@Accessors(chain = true)
public class MobileLoginDto {

    @NotBlank(message = "手机号不能为空")
    private String mobile;

    @NotBlank(message = "验证码不能为空")
    private String code;

}
