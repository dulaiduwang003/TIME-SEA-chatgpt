package com.cn.bdth.task;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.User;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.utils.AliUploadUtils;
import com.cn.bdth.utils.StringUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class RewardTaskTimer {

    private final UserMapper userMapper;

    private final DrawingMapper drawingMapper;

    private final AliUploadUtils aliUploadUtils;

    @Scheduled(cron = " 0 0 0 * * ?")
    @Transactional(rollbackFor = Exception.class)
    public void executeTask() {
        //回滚签到
        userMapper.update(new User().setIsSignIn(0L), null);
        //清除无效绘图
        drawingMapper.selectList(new QueryWrapper<Drawing>()
                .lambda()
                .eq(Drawing::getGenerateUrl, null)
                .select(Drawing::getOriginalUrl, Drawing::getGenerateUrl, Drawing::getDrawingId)
        ).forEach(this::deleteResource);

        drawingMapper.selectList(new QueryWrapper<Drawing>()
                .lambda()
                .eq(Drawing::getEnv, 0)
                .lt(Drawing::getCreatedTime, LocalDateTime.now().minusDays(2))
        ).forEach(this::deleteResource);

    }

    private void deleteResource(Drawing drawing) {
        final String generateUrl = drawing.getGenerateUrl();
        if (!StringUtils.notEmpty(generateUrl)) {
            //删除图片数据
            drawingMapper.delete(new QueryWrapper<Drawing>().lambda().eq(Drawing::getDrawingId, drawing.getDrawingId()));
            final String originalUrl = drawing.getOriginalUrl();
            try {
                if (StringUtils.notEmpty(originalUrl)) {
                    aliUploadUtils.deleteFile(originalUrl);
                }
                if (StringUtils.notEmpty(generateUrl)) {
                    aliUploadUtils.deleteFile(generateUrl);
                }
            } catch (Exception e) {
                log.warn("删除OSS图片数据失败");
            }
        }
    }
}
