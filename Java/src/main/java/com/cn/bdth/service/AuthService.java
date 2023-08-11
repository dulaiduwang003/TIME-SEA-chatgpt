package com.cn.bdth.service;

import com.cn.bdth.vo.WechatCodeVo;

/**
 * 登录接口
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface AuthService {

    /**
     * 微信授权登录
     *
     * @param code the code
     * @return the string
     */
    String wechatAuthorizedLogin(final String code);


    /**
     * 获取微信登录二维码
     *
     * @return the WeChat qr code
     */
    WechatCodeVo getWechatQrCode();


    /**
     * 扫码登录
     *
     * @param verifyCode the verify code
     * @param code       the code
     */
    void wechatAuthorizedLogin(final String verifyCode, final String code);


    /**
     * 是否授权登录
     *
     * @param verifyCode the verify code
     * @return the string
     */
    String isQrcodeLoginSucceed(final String verifyCode);


    /**
     * 注销
     */
    void logout();
}
