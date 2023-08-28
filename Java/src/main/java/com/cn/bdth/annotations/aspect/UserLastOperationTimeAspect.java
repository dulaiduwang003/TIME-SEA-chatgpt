package com.cn.bdth.annotations.aspect;

import com.cn.bdth.constants.OperateConstant;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Aspect
@Component
@RequiredArgsConstructor
public class  UserLastOperationTimeAspect {

    private final RedisUtils redisUtils;

    @Before("@annotation(com.cn.bdth.annotations.note.UserLastOperationTime)")
    public void beforeMethodExecution(JoinPoint joinPoint) {
        //设置用户最后操作时间
        redisUtils.setValueTimeout(OperateConstant.USER_CALL_TIME + UserUtils.getCurrentLoginId(), LocalDateTime.now(), 604800);
    }
}
