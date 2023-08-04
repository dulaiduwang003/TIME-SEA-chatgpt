/**
 * @author 明明不是下雨天
 */
package com.cn.bdth.common;

import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.utils.WeChatTokenUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * 微信发送通知给用户
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@Component
public class WxSubscribe {

    @Value("${we-chat.appId}")
    private String appId;
    @Value("${we-chat.secret}")
    private String secret;

    /**
     * 发送格式数据
     *
     * @param json the json
     */
    public void wxSubscribeMessages(final JSONObject json) {
        final String wechatToken = WeChatTokenUtil.INSTANCE.getWechatToken(appId, secret);
        WebClient.create().post().uri("https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=" + wechatToken)
                .body(BodyInserters.fromValue(json))
                .retrieve()
                .bodyToMono(String.class)
                .subscribe(res->{
                    log.info("消息发送结果:{}", res);
                });

    }


}
