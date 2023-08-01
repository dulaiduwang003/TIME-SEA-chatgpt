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
public class PictureDrawingModel implements Serializable {


    private List<String> init_images;

    /**
     * 提示词
     * The Prompt.
     */
    private String prompt;


    /**
     * 图片宽度
     * The Width.
     */
    private Long width;


    /**
     * 图片高度
     * The Height.
     */
    private Long height;


    private String negative_prompt;


//    /**
//     * (使用较高的值可以提高图像质量)
//     * The Resize mode.
//     */
//    private int resize_mode = 1;
//
//    /**
//     * 根据需要调整去噪强度
//     * The Demonising strength.
//     */
//    private double denoising_strength = 0.5;
//
//
//
//
//    /**
//     * The Inpaint full res.
//     */
//    private boolean inpaint_full_res = true;
//
//
//    /**
//     * The Inpaint full res padding.
//     */
//    private int inpaint_full_res_padding = 20;
//
//    /**
//     * 较低的初始噪声乘数
//     */
//    private double initial_noise_multiplier = 0;
//
//
//
//    /**
//     * 1
//     * 修复程度
//     * The Inpainting fill.
//     */
//    private int inpainting_fill = 1;
//
//
//    /**
//     * 50~100
//     * 迭代步数
//     * The Inpainting fill.
//     */
//    private int steps = 160;
//
//
//    /**
//     * The Cfg scale.
//     */
//    private int cfg_scale = 7;
//
//    /**
//     * The Seed.
//     */
//    private int seed;
//
//
//    /**
//     * The Restore faces.
//     */
//    private boolean restore_faces;
//
//    /**
//     * 批处理大小 1-8
//     */
//    private int batch_size = 1;


    private Long drawingId;

    private String openId;

    private Override override_settings;


    @Data
    public static class Override implements Serializable {
        private String sd_model_checkpoint;
    }
}
