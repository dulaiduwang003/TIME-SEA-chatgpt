
package com.cn.bdth.model;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 微信敏感词拦截模型
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class WeChatMsgCheckModel {

    private String content;

    private Integer version = 2;

    private Integer scene = 2;

    private String openid;
}
