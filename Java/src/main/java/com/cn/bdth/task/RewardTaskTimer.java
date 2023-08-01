package com.cn.bdth.task;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.entity.Drawing;
import com.cn.bdth.entity.User;
import com.cn.bdth.mapper.DrawingMapper;
import com.cn.bdth.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
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
public class RewardTaskTimer {

    private final UserMapper userMapper;

    private final DrawingMapper drawingMapper;

    @Scheduled(cron = "0 0 0 * * ?") // 每天晚上12点执行一次
    @Transactional(rollbackFor = Exception.class)
    public void executeTask() {
        //回滚签到
        userMapper.update(new User().setIsSignIn(0L), null);
        //删除废弃图片
        drawingMapper.delete(new QueryWrapper<Drawing>()
                .lambda()
                .le(Drawing::getCreatedTime, LocalDateTime.now().minusHours(2))
                .isNull(Drawing::getGenerateUrl)
        );
    }
}
