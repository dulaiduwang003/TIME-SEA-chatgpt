package com.cn.bdth.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class DrawingDetailVo implements Serializable {


    private DrawingImage drawingImage;

    private DrawingText drawingText;

    private LocalDateTime createdTime;

    private String userName;

    private String avatar;

    private String negativePrompt;

    private String prompt;
    @Data
    @Accessors(chain = true)
    public static class DrawingImage {

        private String originalImage;

        private String generateImage;

    }

    @Data
    public static class DrawingText {

        private String generateImage;

    }
}
