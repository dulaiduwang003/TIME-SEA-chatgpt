package com.cn.bdth.utils;

import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.common.ControlCommon;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.ViolationsException;
import com.cn.bdth.exceptions.WechatException;
import com.cn.bdth.model.WeChaQrCodeModel;
import com.cn.bdth.model.WeChatMsgCheckModel;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Base64;

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

    @Value("${ali-oss.domain}")
    private String domain;

    private final RedisUtils redisUtils;

    private final BaiduTranslationUtil translationUtil;

    private final ControlCommon controlCommon;
    private static final WebClient WEB_CLIENT = WebClient.builder().build();

    private final AliUploadUtils aliUploadUtils;

    public String getOpenId(final String code) {
        try {
            final String url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + this.appId +
                    "&secret=" + this.secret + "&js_code=" + code + "&grant_type=authorization_code";
            final String response = WEB_CLIENT.get().uri(url).retrieve().bodyToMono(String.class).block();
            final JSONObject block = JSONObject.parseObject(response);

            final String openid = block.getString("openid");
            if (!StringUtils.notEmpty(openid)) {
                throw new RuntimeException();
            }
            return openid;
        } catch (Exception e) {
            log.error("获取微信用户标识失败 信息:{},错误类:{}", e.getMessage(), e.getClass());
            throw new WechatException(ExceptionMessages.WECHAT_AUTHORIZATION);
        }
    }

    public String getQrCode(final String secene) {

        try {
            final String url = "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" + WeChatTokenUtil.INSTANCE.getWechatToken(appId, secret);
            final byte[] block = WEB_CLIENT.post()
                    .uri(url)
                    .body(BodyInserters.fromValue(new WeChaQrCodeModel().setScene(secene).setEnv_version(controlCommon.getControl().getWechatAppEnv())))
                    .retrieve().bodyToMono(byte[].class).block();
            return "data:image/png;base64," + Base64.getEncoder().encodeToString(block);
        } catch (Exception e) {
            log.error("获取小程序二维码失败 信息:{},错误类:{}", e.getMessage(), e.getClass());
            throw new WechatException(ExceptionMessages.WECHAT_AUTHORIZATION);
        }
    }

    public void filterText(String content, final String openId) {
        try {
            content = translationUtil.chineseTranslation(content);
        } catch (Exception e) {
            log.error("微信文本安全调用翻译失败,将采用原文检测");
        }
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

    public void filterImage(final String image) {
        try {
            String imageUrl = domain + image;
            final byte[] block = WebClient.builder()
                    .codecs(item -> item.defaultCodecs().maxInMemorySize(10 * 1024 * 1024)).build().get()
                    .uri(imageUrl)
                    .accept(MediaType.IMAGE_JPEG, MediaType.IMAGE_PNG, MediaType.IMAGE_JPEG)
                    .retrieve()
                    .bodyToMono(byte[].class)
                    .block();
            final String json = WebClient.create().post()
                    .uri("https://api.weixin.qq.com/wxa/img_sec_check?access_token=" + WeChatTokenUtil.INSTANCE.getWechatToken(appId, secret))
                    .header("Content-Type", "application/octet-stream")
                    .body(BodyInserters.fromValue(block))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            final Integer errcode = JSONObject.parseObject(json).getInteger("errcode");
            if (errcode != 0) {
                //删除图片
                aliUploadUtils.deleteFile(image);
                throw new RuntimeException();
            }
        } catch (Exception e) {
            throw new RuntimeException();
        }

    }


}

