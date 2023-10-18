package com.cn.bdth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 * 获取 手机 验证码
 *
 * @author yzq
 * @date 2023/10/18 20:39
 */
@Data
@RequiredArgsConstructor
public class MobileCodeDto {
    /** 手机号 */
    @NotNull(message = "手机号不能空")
    private String mobile;

    /** 类型 0登录；1忘记密码；2注册*/
    private String type;

}
