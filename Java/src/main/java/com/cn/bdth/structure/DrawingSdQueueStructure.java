package com.cn.bdth.structure;

import com.cn.bdth.model.SdDrawingModel;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 绘图结构体
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class DrawingSdQueueStructure {

    private Long drawingId;

    private String openId;

    private int isType;

    private int env;

    private SdDrawingModel sdDrawingModel;

}
