package com.cn.bdth.common;

import cn.dev33.satoken.secure.SaSecureUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.entity.User;
import com.cn.bdth.mapper.UserMapper;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class InitConfig {


    @Value("${root.email}")
    private String rootEmail;


    @Value("${root.password}")
    private String rootPassword;

    private final UserMapper userMapper;


    @PostConstruct
    @Transactional(rollbackFor = Exception.class)
    public void initAdminData() {
        final User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getEmail, rootEmail)
        );
        final String s = SaSecureUtil.md5BySalt(rootPassword, "HuJiaXin");
        if (user != null) {
            userMapper.updateById(user.setPassword(s));
        } else
            userMapper.insert(
                    new User()
                            .setEmail(rootEmail)
                            .setPassword(s)
                            .setType(AuthConstant.ADMIN)
            );
        log.info("初始化管理员完毕}");
        log.info("************************");
        log.info("账号: {}", rootEmail);
        log.info("密码: {}", rootPassword);
        log.info("************************");

    }
}
