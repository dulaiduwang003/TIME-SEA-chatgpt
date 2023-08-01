package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Accessors(chain = true)
@Data
public class UserDrawingVo {


    private Long drawingId;

    private String generateUrl;

}
