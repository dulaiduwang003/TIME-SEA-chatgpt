package com.cn.bdth.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.common.FunCommon;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.entity.User;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.AuthService;
import com.cn.bdth.utils.WeChatUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Set;

/**
 * 登录授权业务处理类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

    private final UserMapper userMapper;

    private final WeChatUtils weChatUtils;

    @Value("#{'${admin}'.split(',')}")
    private Set<String> administrators;

    private final FunCommon funCommon;

    /**
     * 微信授权登录
     *
     * @param code the code
     * @return the string
     */
    @Override
    public String wechatAuthorizedLogin(final String code) {
        //获取微信用户ID
        final String openId = weChatUtils.getOpenId(code);
        //是否存在
        User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getOpenId, openId)
                .select(User::getUserId, User::getOpenId)
        );
        //不存在则写入DB
        if (user == null) {
            //初始化用户登录次数
            user = new User()
                    .setFrequency(funCommon.getServer().getIncentiveFrequency())
                    .setOpenId(openId);
            userMapper.insert(user);
        }
        //匹配是否为管理员用户
        boolean isAdmin = administrators.contains(user.getOpenId());
        StpUtil.login(user.getUserId());
        //设置具体TOKEN Session权限
        StpUtil.getSession()
                .set(AuthConstant.ROLE, isAdmin ? AuthConstant.ADMIN : AuthConstant.USER)
                .set(AuthConstant.OPEN_ID, user.getOpenId());
        // 返回TOKEN
        return StpUtil.getTokenValue();
    }

    /**
     * 注销登录
     */
    @Override
    public void logout() {
        if (StpUtil.isLogin()) {
            StpUtil.logout();
        }
    }
}
