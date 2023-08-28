package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class ProductVo {

    private Long productId;

    private String productName;

    private Long frequency;

    private Double productPrice;

    private LocalDateTime createdTime;
}
