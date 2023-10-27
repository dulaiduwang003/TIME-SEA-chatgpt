package com.cn.bdth.annotations.aspect;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.constants.OperateConstant;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.entity.User;
import com.cn.bdth.mapper.SysLogMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

/**
 * 管理员认证
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */

@Aspect
@Component
@RequiredArgsConstructor
public class AdminAuthAspect {

    private final UserMapper userMapper;

    @Before("@annotation(com.cn.bdth.annotations.note.AdminAuth)")
    public void beforeMethodExecution(JoinPoint joinPoint) {
        final Long currentLoginId = UserUtils.getCurrentLoginId();
        if(null == currentLoginId) {
            throw new RuntimeException("请先登录！");
        }
        final User currentUser = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getUserId, currentLoginId)
                .eq(User::getType, AuthConstant.ADMIN));
        if(null == currentUser) {
            throw new RuntimeException("不是管理员，禁止操作！");
        }
    }
}
