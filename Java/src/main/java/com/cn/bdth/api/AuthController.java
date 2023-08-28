package com.cn.bdth.api;

import com.cn.bdth.dto.EmailCodeDto;
import com.cn.bdth.dto.EmailLoginDto;
import com.cn.bdth.dto.WeChatAuthLoginDto;
import com.cn.bdth.dto.WeChatAuthQrCodeLoginDto;
import com.cn.bdth.exceptions.EmailBackException;
import com.cn.bdth.exceptions.LoginPasswordException;
import com.cn.bdth.exceptions.RegistrationException;
import com.cn.bdth.exceptions.WechatException;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * 登录授权接口
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {


    private final AuthService authService;

    /**
     * 获取注册验证码
     *
     * @param email 邮箱
     * @return the result
     */
    @GetMapping(value = "/email/code/{email}", name = "网页获取邮箱码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getEmailLoginCode(@PathVariable final String email) {
        try {
            authService.getEmailEnrollCode(email);
            return Result.ok();
        } catch (RegistrationException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 找回密码
     *
     * @param dto 邮箱
     * @return the result
     */
    @PostMapping(value = "/email/password/back", name = "找回密码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result RetrieveEmailPassword(@RequestBody @Validated final EmailCodeDto dto) {
        try {
            authService.emailBack(dto);
            return Result.ok();
        } catch (EmailBackException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 注册账号
     *
     * @param dto dto
     * @return the result
     */
    @PostMapping(value = "/email/enroll", name = "注册账号", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result emailEnroll(@RequestBody @Validated final EmailCodeDto dto) {
        try {
            authService.emailEnroll(dto);
            return Result.ok();
        } catch (RegistrationException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 注册账号
     *
     * @param dto dto
     * @return the result
     */
    @PostMapping(value = "/email/login", name = "登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result emailLogin(@RequestBody @Validated final EmailLoginDto dto) {
        try {
            return Result.data(authService.emailLogin(dto));
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 微信小程序授权登录
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/wechat/login", name = "微信授权登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatAuthLogin(@RequestBody @Validated WeChatAuthLoginDto dto) {
        try {
            return Result.data(authService.wechatAuthorizedLogin(dto.getCode()));
        } catch (LoginPasswordException | WechatException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 获取扫码登录二维码
     *
     * @return the WeChat code
     */
    @PostMapping(value = "/wechat/get/code", name = "获取微信登录二维码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getWechatQcCode() {
        try {
            return Result.data(authService.getWechatQrCode());
        } catch (WechatException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }


    /**
     * 扫码结果 是否登录成功
     *
     * @param verifyCode the verify code
     * @return the result
     */
    @GetMapping(value = "/wechat/code/result", name = "扫码结果", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result isQrCodeLoginSucceed(final String verifyCode) {
        try {
            return Result.data(authService.isQrcodeLoginSucceed(verifyCode));
        } catch (WechatException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }

    /**
     * 扫码确认授权登录
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/wechat/code/login", name = "确认授权登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatAuthQrCodeLogin(@RequestBody @Validated final WeChatAuthQrCodeLoginDto dto) {
        try {
            authService.wechatAuthorizedLogin(dto.getVerifyCode(), dto.getCode());
            return Result.ok();
        } catch (WechatException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }


    /**
     * 退出登录
     *
     * @return the result
     */
    @PostMapping(value = "/wechat/logout", name = "退出登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatLogout() {
        try {
            authService.logout();
            return Result.ok();
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }

}
