package com.cn.bdth.entity;


import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

@Data
@TableName(value = "personality")
@Accessors(chain = true)
public class Personality {

    @TableId(type = IdType.AUTO)
    private Long personalityId;

    private Long userId;

    private String model;

    private Integer topP;

    private Integer maxTokens;

    private Integer temperature;

    private String openKey;

    private String openAiUrl;

    private String questions;

    private String answer;

    private Integer speed;

    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createdTime;

    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;



}
