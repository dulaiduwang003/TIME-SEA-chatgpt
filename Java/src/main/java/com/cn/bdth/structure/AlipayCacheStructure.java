package com.cn.bdth.structure;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * The type Alipay cache structure.
 *
 * @author 欧渐风.
 * @email 2074055628 @qq.com.
 */
@Data
@Accessors(chain = true)
public class AlipayCacheStructure {

    private String url;

    private LocalDateTime createdTime;

    private String ordersId;

    private Double productPrice;

    private String productName;

}
