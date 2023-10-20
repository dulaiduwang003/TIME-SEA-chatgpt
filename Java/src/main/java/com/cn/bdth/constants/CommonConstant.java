package com.cn.bdth.constants;

public interface CommonConstant {
    /**
     * POST请求
     */
    String HTTP_POST = "POST";

    /**
     * PUT请求
     */
    String HTTP_PUT = "PUT";

    /**
     * PATCH请求
     */
    String HTTP_PATCH = "PATCH";

    /**
     * 未知的
     */
    String UNKNOWN = "unknown";

    /**
     * 字符串http
     */
    String STR_HTTP = "http";

    /**
     * String 类型的空值
     */
    String STRING_NULL = "null";

    /**
     * 短信验证码redis-key的前缀
     */
    String PHONE_REDIS_KEY_PRE = "phone_msg_%s";

    /**
     * 短信验证码的次数限制（每个手机号每天只能发20次）
     */
    String PHONE_REDIS_KEY_MSG_LIMIT = "phone:msg:limit:%s";

    /**
     * 短信验证码的ip次数限制（每个ip每天只能发30次）
     */
    String PHONE_REDIS_KEY_MSG_IP_LIMIT = "phone:msg:ip:limit:%s";

    String BASE_CHECK_CODES = "qwertyuiplkjhgfdsazxcvbnmQWERTYUPLKJHGFDSAZXCVBNM1234567890";
}
