package com.cn.bdth.entity;


import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Data
@TableName(value = "sd_model")
@Accessors(chain = true)
public class SdModelEntity {

  @TableId(type = IdType.AUTO)
  private Long sdModelId;

  private String modelName;

  private String textName;

  @TableField(fill = FieldFill.INSERT)
  private LocalDateTime createdTime;

  @TableField(fill = FieldFill.INSERT_UPDATE)
  private LocalDateTime updateTime;


}
