package com.cn.bdth.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.web.multipart.MultipartFile;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class ImageAudioSynthesisTaskDto {

    @NotNull(message = "上传图片不能为空")
    private MultipartFile image;

    private MultipartFile audio;

    private String input;

}
