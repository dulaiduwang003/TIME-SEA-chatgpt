package com.cn.bdth.service.impl;

import cn.dev33.satoken.secure.SaSecureUtil;
import cn.dev33.satoken.stp.StpUtil;
import cn.hutool.core.util.RandomUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.common.UserInspiritCommon;
import com.cn.bdth.constants.WeChatConstant;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.dto.EmailCodeDto;
import com.cn.bdth.dto.EmailLoginDto;
import com.cn.bdth.entity.SysLog;
import com.cn.bdth.entity.User;
import com.cn.bdth.exceptions.*;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.AuthService;
import com.cn.bdth.utils.IpUtils;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.WeChatUtils;
import com.cn.bdth.vo.WechatCodeVo;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.Date;
import java.util.UUID;

/**
 * 登录授权业务处理类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@SuppressWarnings("all")
public class AuthServiceImpl implements AuthService {

    private final UserMapper userMapper;

    private final WeChatUtils weChatUtils;

    private final UserInspiritCommon userInspiritCommon;

    private final RedisUtils redisUtils;

    private final JavaMailSender mailSender;

    private final TemplateEngine templateEngine;
    private final static String SALT = "HuJiaXin";

    @Value(value = "${spring.mail.username}")
    private String username;

    @Override
    public void emailBack(final EmailCodeDto dto) {
        final String code = dto.getCode();
        final String KEY = AuthConstant.EMAIL_CODE + dto.getEmail();
        final Object value = redisUtils.getValue(KEY);
        if (value != null && value.equals(code)) {
            final Long l = userMapper.selectCount(new QueryWrapper<User>()
                    .lambda().eq(User::getEmail, dto.getEmail())
                    .select(User::getUserId));
            if (l <= 0) {
                throw new EmailBackException(ExceptionMessages.EMAIL_NOT_EXIST);
            }
            userMapper.update(new User()
                    .setPassword(SaSecureUtil.md5BySalt(dto.getPassword(), SALT)), new QueryWrapper<User>().lambda().eq(User::getEmail, dto.getEmail()));
            redisUtils.delKey(KEY);
        } else {
            throw new EmailBackException(ExceptionMessages.CODE_ERR);
        }
    }

    @Override
    public void emailEnroll(final EmailCodeDto dto) {
        final String code = dto.getCode();
        final String KEY = AuthConstant.EMAIL_CODE + dto.getEmail();
        final Object value = redisUtils.getValue(KEY);
        if (value != null && value.equals(code)) {
            final User user = userMapper.selectOne(new QueryWrapper<User>()
                    .lambda().eq(User::getEmail, dto.getEmail())
                    .select(User::getUserId));
            if (user != null) {
                throw new RegistrationException(ExceptionMessages.ACCOUNT_ALREADY_EXISTS_ERR);
            }

            userMapper.insert(new User()
                    .setEmail(dto.getEmail())
                    .setPassword(SaSecureUtil.md5BySalt(dto.getPassword(), SALT))
                    .setFrequency(userInspiritCommon.getInspiritStructure().getIncentiveFrequency()));
            redisUtils.delKey(KEY);
        } else {
            throw new RegistrationException(ExceptionMessages.CODE_ERR);
        }

    }

    @Override
    public void getEmailEnrollCode(final String email) {
        final String code = RandomUtil.randomNumbers(6);
        Context context = new Context();
        context.setVariable("code", code);
        String process = templateEngine.process("emailCode.html", context);
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setSubject("TIME SEA PLUS GPT验证码");
            helper.setFrom(username);
            helper.setTo(email);
            helper.setSentDate(new Date());
            helper.setText(process, true);
            redisUtils.setValueTimeout(AuthConstant.EMAIL_CODE + email, code, 300);
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            throw new RegistrationException(ExceptionMessages.VERIFICATION_CODE_ERR, 500);
        }
    }

    @Override
    public String emailLogin(final EmailLoginDto dto) {
        final User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getEmail, dto.getEmail())
                .eq(User::getPassword, SaSecureUtil.md5BySalt(dto.getPassword(), SALT))
                .select(User::getType, User::getUserId)

        );
        if (user == null) {
            throw new LoginPasswordException(ExceptionMessages.EMAIL_LOGIN_PWD_ERR);
        }
        StpUtil.login(user.getUserId());
        //设置具体TOKEN Session权限
        StpUtil.getSession()
                .set(AuthConstant.ROLE, user.getType());
        return StpUtil.getTokenValue();
    }

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
                .select(User::getUserId, User::getOpenId, User::getType)
        );
        //不存在则写入DB
        if (user == null) {
            //初始化用户登录次数
            user = new User()
                    .setFrequency(userInspiritCommon.getInspiritStructure().getIncentiveFrequency())
                    .setOpenId(openId);
            userMapper.insert(user);
        }
        StpUtil.login(user.getUserId());
        //设置具体TOKEN Session权限
        StpUtil.getSession()
                .set(AuthConstant.ROLE, user.getType())
                .set(AuthConstant.OPEN_ID, user.getOpenId());
        // 返回TOKEN
        return StpUtil.getTokenValue();
    }

    @Override
    public WechatCodeVo getWechatQrCode() {
        final String verifyCode = UUID.randomUUID().toString().substring(0, 13);
        redisUtils.setValueTimeout(WeChatConstant.QC_CODE_SCENE + verifyCode, "", 120);
        return new WechatCodeVo().setQrCode(weChatUtils.getQrCode(verifyCode)).setVerifyCode(verifyCode);
    }

    @Override
    public void wechatAuthorizedLogin(final String verifyCode, final String code) {
        if (!redisUtils.doesItExist(WeChatConstant.QC_CODE_SCENE + verifyCode)) {
            throw new WechatException(ExceptionMessages.WECHAT_CODE_ERR);
        }
        final String token = this.wechatAuthorizedLogin(code);
        redisUtils.setValueTimeout(WeChatConstant.QC_CODE_SCENE + verifyCode, token, 120);

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
