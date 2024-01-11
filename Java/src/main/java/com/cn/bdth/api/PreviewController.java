package com.cn.bdth.api;

import com.cn.bdth.annotations.note.UserLastOperationTime;
import com.cn.bdth.dto.UploadImageDto;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.exceptions.ViolationsException;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.PreviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/preview")
@RequiredArgsConstructor
public class PreviewController {


    private final PreviewService previewService;

    /**
     * 上传图片
     * Add task.
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/upload/image", name = "图像识别前上传图片", consumes = "multipart/form-data")
    @UserLastOperationTime
    public Result uploadImages(@Valid UploadImageDto dto) {
        try {
            return Result.data(previewService.uploadImage(dto.getImages()));
        } catch (FrequencyException | ViolationsException e) {
            return Result.error(e.getMessage());
        }
    }


}
