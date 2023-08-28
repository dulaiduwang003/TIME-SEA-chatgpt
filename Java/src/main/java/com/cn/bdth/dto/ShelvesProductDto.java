package com.cn.bdth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
public class ShelvesProductDto {

    @NotBlank(message = "产品名称不能为空")
    private String productName;

    @NotNull(message = "赠予数量不能为空")
    private Long frequency;

    @NotNull(message = "赠予不能为空")
    private Double productPrice;
}
