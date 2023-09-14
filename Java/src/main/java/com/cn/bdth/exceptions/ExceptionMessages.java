package com.cn.bdth.exceptions;

/**
 * 异常消息
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface ExceptionMessages {

    String EMAIL_BIND_ERR = "当前微信号已经绑定过了,不可再次绑定";
    String EMAIL_LOGIN_PWD_ERR = "邮箱或密码错误";

    String ACCOUNT_ALREADY_EXISTS_ERR = "该账号已存在";

    String EMAIL_NOT_EXIST = "该邮箱不存在";
    String CODE_ERR = "验证码错误";
    String NOT_EXIST_CODE = "兑换码不存在或已失效";

    String VERIFICATION_CODE_ERR = "生成验证码失败";

    String NOT_PAID_FOR_LONG_TIME = "长时间未支付,已自动取消";

    String PRODUCT_NULL_ERR = "商品不存在";

    String BUILD_CODE_ERR = "兑换码生成次数不能为0";

    String CONCURRENT = "手速太快了! 请稍后重新点击";

    String IS_SIGN_IN = "今天你已经签到过了,请明天再来";

    String WECHAT_VIOLATIONS = " 请勿发布违反微信社区规则的内容";

    String WECHAT_CODE_ERR = "二维码已过期,请重新扫一扫";

    String PLACE_AN_ORDER_REPEATEDLY_ERR = "请勿重复下单";

    String BUILD_FAILED_PAY_ERR = "生成支付二维码失败";

    String GPT_TIMEOUT = "哦豁!现在貌似出了点问题 请重新发送试试";

    String GPT_CONFIG_ERR = "哦豁!貌似参数配置不对 请检查一下Ai配置";

    String GPT_FREQUENT = "SUPER币不足,请观看小程序广告获得奖励";

    String GPT_ERR = "建立连接失败,请重新发送数据";

    String WECHAT_AUTHORIZATION = "微信API能力调用失败";

    String BING_ERR = "目前必应可能正在维护中,请稍后再试";

    String DRAWING_DELETE = "本次生成可能涉及敏感词,已被系统自动删除";

    String DRAWING_VIOLATIONS = "请勿上传违规图片";

    String TOKEN_LAPSE = "登录信息已过期,请重新登录";


    String DRAWING_SUCCEED = "创作成功!前往个人中心查看吧!";

    String DRAWING_MISTAKE = "创作失败!请检查是否涉及敏感词!";

}
