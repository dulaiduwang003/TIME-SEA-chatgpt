package com.cn.bdth.dto.admin;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
public class UserPutDto {

    @NotNull(message = "用户次数不能为空")
    private Long frequency;

    @NotNull(message = "用户标识不能为空")
    private Long userId;

    private String userName;
}
