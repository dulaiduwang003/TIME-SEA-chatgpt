package com.cn.bdth.api;

import com.cn.bdth.dto.WeChatAuthLoginDto;
import com.cn.bdth.dto.WeChatAuthQrCodeLoginDto;
import com.cn.bdth.exceptions.LoginPasswordException;
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
     * 微信小程序授权登录
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/wechat/login", name = "微信授权登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatAuthLogin(@RequestBody @Validated WeChatAuthLoginDto dto) {
        try {
            return Result.data(authService.wechatAuthorizedLogin(dto.getCode()));
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage(), e.getCode());
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
