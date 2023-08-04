package com.cn.bdth.model;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

/**
 * 发布任务模型
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
@SuppressWarnings("all")
public class PictureSdDrawingModel implements Serializable {

    private List<String> init_images;

    private String prompt;

    private Long width;

    private Long height;

    private String negative_prompt;

    private Long drawingId;

    private String openId;

    private Override override_settings;


    @Data
    public static class Override implements Serializable {
        private String sd_model_checkpoint;
    }
}
