package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.time.LocalDateTime;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Accessors(chain = true)
@Data
public class DrawingOpsVo {

    private String image;

    private ImageInfo value;

    @Data
    public static class ImageInfo {

        private String prompt;

        private Long drawingId;

        private LocalDateTime createdTime;

    }

}
