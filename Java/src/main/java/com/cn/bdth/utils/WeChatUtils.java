package com.cn.bdth.utils;

import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.ViolationsException;
import com.cn.bdth.exceptions.WechatException;
import com.cn.bdth.model.WeChatMsgCheckModel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * 微信工具类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 * @date 2022/6/11 14:23
 */
@Component
@SuppressWarnings("all")
@RequiredArgsConstructor
@Slf4j
public class WeChatUtils {
    @Value("${we-chat.appId}")
    private String appId;


    @Value("${we-chat.secret}")
    private String secret;


    private final RedisUtils redisUtils;

    private static final WebClient WEB_CLIENT = WebClient.builder().build();

    public String getOpenId(final String code) {
        try {
            final String url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + this.appId +
                    "&secret=" + this.secret + "&js_code=" + code + "&grant_type=authorization_code";
            final String response = WEB_CLIENT.get().uri(url).retrieve().bodyToMono(String.class).block();
            final JSONObject block = JSONObject.parseObject(response);

            final String openid = block.getString("openid");
            assert openid != null;
            return openid;
        } catch (Exception e) {
            log.error("获取微信用户标识失败 信息:{},错误类:{}", e.getMessage(), e.getClass());
            throw new WechatException(ExceptionMessages.WECHAT_AUTHORIZATION);
        }
    }

    public void filterText(final String content, final String openId) {
        JSONObject jsonObject = null;
        try {
            final String response = WEB_CLIENT.post().uri("https://api.weixin.qq.com/wxa/msg_sec_check?access_token=" + WeChatTokenUtil.INSTANCE.getWechatToken(appId, secret))
                    .body(BodyInserters.fromValue(new WeChatMsgCheckModel().setContent(content).setOpenid(openId)))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            final JSONObject json = JSONObject.parseObject(response);
            assert json != null;
            jsonObject = JSONObject.parseObject(json.getString("result"));
        } catch (Exception e) {
            log.error("调取微信授权失败 信息:{},错误类:{}", e.getMessage(), e.getClass());
            throw new WechatException(ExceptionMessages.WECHAT_AUTHORIZATION);
        }
        if (!("pass".equals(jsonObject.getString("suggest")))) {
            throw new ViolationsException(ExceptionMessages.WECHAT_VIOLATIONS);
        }

    }

}
