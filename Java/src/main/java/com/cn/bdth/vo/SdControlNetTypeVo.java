package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * sd-controlNet 的类型选择
 *
 * @author yzq
 * @date 2023/09/21 20:06
 */
@Data
@Accessors(chain = true)
public class SdControlNetTypeVo implements Serializable {

    private Integer type;

    private String typeName;

}
