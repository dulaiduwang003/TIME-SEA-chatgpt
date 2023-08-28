/**
 * @author 明明不是下雨天
 */
package com.cn.bdth.common;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * 微信通知模板类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Component
public class WxSubscribeTemplate {


    @Value("${we-chat.template}")
    private String templateId;

    /**
     *  发送数据给指定微信用户
     * @param openId
     * @param succeed
     * @param msg
     * @param createdTime
     * @return
     */
    public JSONObject drawingOutcomeNotice(final String openId, boolean succeed, String msg, final LocalDateTime createdTime) {
        final JSONObject body = new JSONObject();
        body.put("touser", openId);
        body.put("template_id", templateId);
        final JSONObject data = new JSONObject();
        data.put("phrase1", jsonCase(succeed ? "成功" : "失败"));
        data.put("thing5", jsonCase(msg));
        data.put("time9", jsonCase(createdTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd"))));
        body.put("data", data);
        return body;
    }

    /**
     * 转化微信data
     * @param data
     * @return
     */
    public static JSONObject jsonCase(Object data) {
        final JSONObject character = new JSONObject();
        character.put("value", data);
        return character;
    }
}
