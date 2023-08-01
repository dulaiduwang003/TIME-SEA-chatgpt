package com.cn.bdth.api;

import com.cn.bdth.dto.WeChatAuthLoginDto;
import com.cn.bdth.exceptions.LoginPasswordException;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


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
     * 小程序退出登录
     *
     * @return the result
     */
    @PostMapping(value = "/wechat/logout", name = "微信小程序退出登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatLogout() {
        try {
            authService.logout();
            return Result.ok();
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }

}
