package com.cn.bdth.vo.admin;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class DrawingVo implements Serializable {

    private Long drawingId;

    private String generateUrl;

    private Long isPublic;

}
