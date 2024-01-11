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
@TableName(value = "preview_images")
@Accessors(chain = true)
public class PreviewImages {

    @TableId(type = IdType.AUTO)
    private Long imageId;

    private Long userId;

    private String url;

    private LocalDateTime createdTime;

    private LocalDateTime updateTime;

}
