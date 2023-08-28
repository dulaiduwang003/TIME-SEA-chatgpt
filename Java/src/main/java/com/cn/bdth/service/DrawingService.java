package com.cn.bdth.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.cn.bdth.dto.DrawingGptTextDto;
import com.cn.bdth.dto.DrawingSdImage2TaskDto;
import com.cn.bdth.dto.DrawingSdTextDto;
import com.cn.bdth.vo.DrawingDetailVo;
import com.cn.bdth.vo.DrawingOpsVo;
import com.cn.bdth.vo.DrawingTaskVo;
import com.cn.bdth.vo.UserDrawingVo;
import com.cn.bdth.vo.admin.DrawingVo;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface DrawingService {

    /**
     * 发布文生图任务
     *
     * @param dto the dto
     * @return the drawing task vo
     */
    DrawingTaskVo publishGptDrawingTextTask(final DrawingGptTextDto dto);

    /**
     * 发布文生图任务
     *
     * @param dto the dto
     * @return the long
     */
    DrawingTaskVo publishSdDrawingTextTask(final DrawingSdTextDto dto);

    /**
     * 发布图生图任务
     *
     * @param dto the dto
     * @return the long
     */
    DrawingTaskVo publishSdDrawingImage2Task(final DrawingSdImage2TaskDto dto);

    /**
     * 检查SD连通性以及次数检查
     *
     * @param isType the is type
     * @return the boolean
     */
    boolean isSdServerStateAndFrequency(final Long isType);


    /**
     * 检查SD连通性以及次数检查
     *
     * @param isType the is type
     * @return the boolean
     */
    boolean isMjServerStateAndFrequency(final Long isType);

    /**
     * 检查绘图是否成功
     *
     * @param id the id
     * @return the boolean
     */
    boolean isDrawingSuccessful(final Long id);

    /**
     * 获取指定绘图结果
     *
     * @param id the id
     * @return the drawing result
     */
    DrawingDetailVo getDrawingResult(final Long id);


    /**
     * 获取 个人作品？公共作品
     *
     * @param pageNum  the page num
     * @param isPublic the is public
     * @return the drawing ops result
     */
    IPage<DrawingOpsVo> getDrawingOpsResult(final int pageNum, final int isPublic);


    /**
     * 获取绘图分页结果
     *
     * @param pageNum the page num
     * @return the drawing page
     */
    IPage<DrawingVo> getDrawingPage(final int pageNum);


    /**
     * 更新作品公开类型
     *
     * @param drawingId the drawing id
     */
    void putPublicDrawingOps(final Long drawingId);


    /**
     * 删除绘图
     *
     * @param drawingId the drawing id
     */
    void deleteDrawingById(final Long drawingId);


    /**
     * 获取我的作品
     *
     * @param pageNum the page num
     * @return the user drawing ops page
     */
    IPage<UserDrawingVo> getUserDrawingOpsPage(final int pageNum);


}
