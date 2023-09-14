package com.cn.bdth.dto;

import com.cn.bdth.model.SdDrawingModel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.web.multipart.MultipartFile;

/**
 * 添加图生图
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
@SuppressWarnings("all")
public class DrawingSdTaskDto {

    private MultipartFile images;

    @NotBlank(message = "提示词不能为空")
    private String prompt;

    @NotNull(message = "图片宽度不能为空")
    private Long width;

    @NotNull(message = "图片高度不能为空")
    private Long height;

    @NotBlank(message = "模型名称不能为空")
    private String modelName;

    @NotNull(message = "迭代次数不能为空")
    private Integer steps;

    @NotBlank(message = "采样方法不能为空")
    private String sampler_index;

    @NotNull(message = "环境不能为空")
    private Integer env;

    private String negative_prompt;

    public static SdDrawingModel convertToPictureImgModel(DrawingSdTaskDto item) {
        if (item == null) {
            return null;
        }
        SdDrawingModel result = new SdDrawingModel();
        result.setPrompt(item.getPrompt());
        result.setWidth(item.getWidth());
        result.setSteps(item.getSteps());
        result.setSampler_index(item.sampler_index);
        result.setNegative_prompt(item.negative_prompt);
        result.setHeight(item.getHeight());
        result.setOverride_settings(new SdDrawingModel.Override().setSd_model_checkpoint(item.modelName));
        return result;
    }


}
