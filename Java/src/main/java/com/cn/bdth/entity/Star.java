package com.cn.bdth.entity;


import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * The type Star.
 *
 * @author 20740
 */
@Data
@TableName(value = "star")
@Accessors(chain = true)
public class Star {

    @TableId(type = IdType.AUTO)
    private Long starId;

    private Long userId;

    private String issue;

    private String answer;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdTime;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;


}
