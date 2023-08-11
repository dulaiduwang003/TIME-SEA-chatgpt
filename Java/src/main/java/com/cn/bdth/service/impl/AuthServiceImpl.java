package com.cn.bdth.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.common.FunCommon;
import com.cn.bdth.constants.WeChatConstant;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.entity.User;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.WechatException;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.AuthService;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.WeChatUtils;
import com.cn.bdth.vo.WechatCodeVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

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

    private final RedisUtils redisUtils;

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

    @Override
    public WechatCodeVo getWechatQrCode() {
        final String verifyCode = UUID.randomUUID().toString().substring(0, 13);
        redisUtils.setValueTimeout(WeChatConstant.QC_CODE_SCENE + verifyCode, "", 300);
        return new WechatCodeVo().setQrCode(weChatUtils.getQrCode(verifyCode)).setVerifyCode(verifyCode);
    }

    @Override
    public void wechatAuthorizedLogin(final String verifyCode, final String code) {
        if (!redisUtils.doesItExist(WeChatConstant.QC_CODE_SCENE + verifyCode)) {
            throw new WechatException(ExceptionMessages.WECHAT_CODE_ERR);
        }
        final String token = this.wechatAuthorizedLogin(code);
        redisUtils.setValueTimeout(WeChatConstant.QC_CODE_SCENE + verifyCode, token, 300);

    }

    @Override
    public String isQrcodeLoginSucceed(final String verifyCode) {
        final String s = WeChatConstant.QC_CODE_SCENE + verifyCode;
        final Boolean aBoolean = redisUtils.doesItExist(s);
        if (!aBoolean) {
            throw new WechatException(ExceptionMessages.WECHAT_CODE_ERR);
        }
        return (String) redisUtils.getValue(s);
    }

    @Override
    public void logout() {
        if (StpUtil.isLogin()) {
            StpUtil.logout();
        }
    }


}
