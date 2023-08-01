package com.cn.bdth.dto;

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
public class PutExchangeDto {

    @NotNull(message = "可兑换次数不能为空")

    private Long buildFrequency;

    @NotNull(message = "生成兑换码数量不能为空")
    private Long buildQuantity;

}
