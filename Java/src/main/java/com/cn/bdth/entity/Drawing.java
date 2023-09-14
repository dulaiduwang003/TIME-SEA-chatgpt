package com.cn.bdth.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 绘图实体类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@TableName(value = "drawing")
@Accessors(chain = true)
public class Drawing {

    @TableId(type = IdType.AUTO)
    private Long drawingId;

    private Long userId;

    private String prompt;

    private String originalUrl;

    private String generateUrl;

    private Long isPublic;

    private Integer env;

    private LocalDateTime createdTime;

    private LocalDateTime updateTime;


}
