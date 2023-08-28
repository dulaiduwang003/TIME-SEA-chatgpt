package com.cn.bdth.dto;

import com.cn.bdth.model.GptImageModel;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 添加文生图
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
@SuppressWarnings("all")
public class DrawingGptTextDto {

    @NotBlank(message = "提示词不能为空")
    private String prompt;

    @NotNull(message = "图片大小不能为空")
    private String size;


    public static GptImageModel conversionModels(final DrawingGptTextDto dto) {
        return new GptImageModel().setPrompt(dto.prompt).setSize(dto.getSize());
    }

}
