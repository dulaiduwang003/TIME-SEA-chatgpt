package com.cn.bdth.exceptions;

/**
 * 异常消息
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface ExceptionMessages {
    String NOT_EXIST_CODE = "兑换码不存在或已失效";

    String BUILD_CODE_ERR = "兑换码生成次数不能为0";

    String CONCURRENT = "手速太快了! 请稍后重新点击";

    String IS_SIGN_IN = "今天你已经签到过了,请明天再来";

    String WECHAT_VIOLATIONS = " 请勿发布违反微信社区规则的内容";

    String GPT_TIMEOUT = ", 当前使用人数过多,请稍后再试";

    String WECHAT_AUTHORIZATION = "微信API能力调用失败";


    String TOKEN_LAPSE = "登录信息已过期,请重新登录";

}
