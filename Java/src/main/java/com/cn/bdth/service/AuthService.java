package com.cn.bdth.service;

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
     * 注销
     */
    void logout();
}
