package com.cn.bdth.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * descThisFile
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Args {
    private boolean enabled;
    /**
     * PreProcessor 例如："module": "lineart_coarse"
     */
    /**
     *  在将图像传递给此单元之前在其上使用的预处理器。接受/controlnet/module_list 路由返回的值。默认为 none
     */
    private String module;
    /**
     * 用于此单元中的调节的模型的名称。接受/controlnet/model_list 路由返回的值。默认为 None
     */
    private String model;

    /**
     * 此单元的权重。默认为 1
     */
    private double weight = 1.0;
    /**
     * 用于此单元的图像。默认为 null
     */
    private String input_image;
    /**
     *  用于过滤图像的掩码 pixel_perfect。默认为 null
     */
    private String mask;

    /**
     * 有关用法，请参见相关问题。默认为 0。接受的值为：
     * 0 或 Balanced：平衡，对提示和控制模型没有偏好
     * 1 或 My prompt is more important：提示比模型更有影响力
     * 2 或 ControlNet is more important：控制网络模型比提示更有影响力
     *
     */
    private int control_mode = 0;

    /**
     * 启用像素完美的预处理器。默认为 false
     */
    private boolean pixel_perfect = true;

    /**
     *  是否通过处理时间来补偿低 GPU 内存。默认为 false
     */
    private boolean lowvram;
    /**
     * 预处理器的分辨率。默认为 64
     */
    private int processor_res;
    /**
     * 预处理器的第一个参数。仅在预处理器接受参数时生效。默认为 64
     */
    private int threshold_a;
    /**
     * 此单元停止发挥作用的生成比例。默认为 1.0
     */
    private int threshold_b;
    /**
     *此单元停止发挥作用的生成比例。默认为 1.0
     */
    private double guidance_start;
    /**
     * 此单元停止发挥作用的生成比例。默认为 1.0
     */
    private double guidance_end = 1.0;

    /**
     *  如何调整输入图像以适应生成的输出分辨率。默认为 Scale to Fit (Inner Fit)。接受的值为：
     * 0 或 Just Resize：只需将图像调整为目标宽度/高度
     * 1 或 Scale to Fit (Inner Fit)：按比例缩放和裁剪以适应最小尺寸。保持比例。
     * 2 或 Envelope (Outer Fit)：按比例缩放以适应最大尺寸。保持比例。
     *
     */
    private int resize_mode = 1;
}
