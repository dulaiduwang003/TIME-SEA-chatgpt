package com.cn.bdth.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * sd- controlNet
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */

@Data
@TableName(value = "t_sd_control_net")
@Accessors(chain = true)
public class SdControlNet {
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 预处理器
     */
    private String module;
    /**
     * '模型名称'
     */
    private String model;

    /**
     * '权重'
     */
    private double weight;

    /**
     * '开始介入'
     */
    private double guidanceStart;
    /**
     * '结束介入'
     */
    private double guidanceEnd;

    /**
     * '描述'
     */
    private String text;

    /**
     * '-1:文字嵌入图片；0:人物/风景； 1:二维码',
     */
    private Integer type;

    private String typeName;

    private Integer sort;

    @TableLogic
    private Integer delFlag;

    private Boolean isSelected;
}
