package com.cn.bdth.api;

import com.cn.bdth.annotations.note.UserLastOperationTime;
import com.cn.bdth.dto.DrawingGptTextDto;
import com.cn.bdth.dto.DrawingSdImage2TaskDto;
import com.cn.bdth.dto.DrawingSdTextDto;
import com.cn.bdth.exceptions.DrawingException;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.exceptions.ViolationsException;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.DrawingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/drawing")
@RequiredArgsConstructor
public class DrawingController {


    private final DrawingService drawingService;


    /**
     * 添加文字生图任务
     * Add task.
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/gpt/text", name = "根据用户描述来进行绘画传作(GPT)", produces = MediaType.APPLICATION_JSON_VALUE)
    @UserLastOperationTime
    public Result addGptDrawingTextTaskQueue(@Validated @RequestBody final DrawingGptTextDto dto) {
        try {
            return Result.data(drawingService.publishGptDrawingTextTask(dto));
        } catch (FrequencyException | DrawingException | ViolationsException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 添加文字生图任务
     * Add task.
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/sd/text", name = "根据用户描述来进行绘画传作(SD)", produces = MediaType.APPLICATION_JSON_VALUE)
    @UserLastOperationTime
    public Result addSdDrawingTextTaskQueue(@Validated @RequestBody final DrawingSdTextDto dto) {
        try {
            return Result.data(drawingService.publishSdDrawingTextTask(dto));
        } catch (FrequencyException | DrawingException | ViolationsException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 添加图生图任务
     * Add task.
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/sd/image2image", name = "根据用户上传的图片来进行二次创作(SD)", consumes = "multipart/form-data")
    @UserLastOperationTime
    public Result addSdDrawingImageTaskQueue(@Valid DrawingSdImage2TaskDto dto) {
        try {
            return Result.data(drawingService.publishSdDrawingImage2Task(dto));
        } catch (FrequencyException | DrawingException | ViolationsException e) {
            return Result.error(e.getMessage());
        }

    }


    /**
     * 检查SD 网络连通性
     *
     * @return the result
     */
    @GetMapping(value = "/sd/connectivity/{isType}", name = "检查SD网络连通性以及用户次数校验(SD)", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result sdConnectivity(@PathVariable final Long isType) {
        try {
            return Result.data(drawingService.isSdServerStateAndFrequency(isType));
        } catch (FrequencyException | ViolationsException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 添加文字生图任务
     * Add task.
     *
     * @return the result
     */
    @PostMapping(value = "/mj/text", name = "根据用户描述来进行绘画传作(MJ)", produces = MediaType.APPLICATION_JSON_VALUE)
    @UserLastOperationTime
    public Result addMjDrawingTextTaskQueue() {
        try {
            return Result.data(null);
        } catch (FrequencyException | ViolationsException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 添加图生图任务
     * Add task.
     *
     * @return the result
     */
    @PostMapping(value = "/mj/image2image", name = "根据用户上传的图片来进行二次创作(MJ)", consumes = "multipart/form-data")
    @UserLastOperationTime
    public Result addMjDrawingImageTaskQueue() {
        try {
            return Result.data(null);
        } catch (FrequencyException | ViolationsException e) {
            return Result.error(e.getMessage());
        }

    }


    /**
     * 检查SD 网络连通性
     *
     * @return the result
     */
    @GetMapping(value = "/mj/connectivity/{isType}", name = "检查MJ网络连通性以及用户次数校验", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result mjConnectivity(@PathVariable final Long isType) {
        try {
            return Result.data(drawingService.isMjServerStateAndFrequency(isType));
        } catch (FrequencyException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 检查SD绘图是否成功
     *
     * @return the result
     */
    @GetMapping(value = "/status/{drawingId}", name = "监测绘图是否成功", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result isDrawingSucceed(@PathVariable final Long drawingId) {
        try {
            return Result.data(drawingService.isDrawingSuccessful(drawingId));
        } catch (DrawingException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 获取指定图片结果
     *
     * @return the result
     */
    @GetMapping(value = "/image/data/{drawingId}", name = "查看指定绘图结果", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getDrawingResult(@PathVariable final Long drawingId) {
        return Result.data(drawingService.getDrawingResult(drawingId));
    }

    /**
     * 获取指定图片结果
     *
     * @return the result
     */
    @GetMapping(value = "/image/page", name = "获取作品", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getUserOpsPage(@RequestParam(defaultValue = "1") final int pageNum, @RequestParam(defaultValue = "0") final int isPublic) {
        return Result.data(drawingService.getDrawingOpsResult(pageNum, isPublic));
    }


    /**
     * 删除作品
     *
     * @return the result
     */
    @PostMapping(value = "/image/delete/{id}", name = "删除作品", produces = MediaType.APPLICATION_JSON_VALUE)
    @UserLastOperationTime
    public Result deleteImageById(@PathVariable final Long id) {
        drawingService.deleteDrawingById(id);
        return Result.ok();
    }
}
