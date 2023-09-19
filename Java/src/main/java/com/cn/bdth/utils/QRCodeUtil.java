package com.cn.bdth.utils;

import com.alibaba.fastjson.JSONObject;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * descThisFile
 *
 * @author yzq
 * @date 2023/09/16 11:02
 */
@Component
@SuppressWarnings("all")
@RequiredArgsConstructor
@Slf4j
public class QRCodeUtil {

    private final WebClient.Builder webClientBuilder;

//    public static void main(String[] args) {
//        JSONObject jsonObject = new JSONObject();
//        jsonObject.put("qr_image", "http://oss.xxxx/xxx/xxx.jdp");
//        String qrCodeUrl = getQRCodeUrl(jsonObject,"");
//
//        System.out.println(qrCodeOptimize(qrCodeUrl));
//    }

    public static String getQRCodeUrl(JSONObject json, String bearerToken) {
        WebClient webClient = WebClient.builder()
                .build();
        final String block = webClient
                .post()
                .uri("https://api.2weima.com/api/qrdecode")
                .header("Content-Type", "application/json")
                .header(HttpHeaders.AUTHORIZATION,"Bearer " + bearerToken)
                .body(BodyInserters.fromValue(json))
                .retrieve()
                .bodyToMono(String.class)
                .block();

        JSONObject jsonObject = JSONObject.parseObject(block);

        if(jsonObject.containsKey("status") && 200 == jsonObject.getIntValue("status")) {
            return jsonObject.getString("qr_content");
        }else {
            log.error("二维码解码失败:{}", jsonObject.toJSONString());
        }
        return "";
    }

    public static String qrCodeOptimize(String qrCodeUrl) {
        WebClient webClient = WebClient.builder()
                .build();
        final String block = webClient
                .get()
                .uri("http://127.0.0.1:3000/qrcode?url="+qrCodeUrl)
                .header("Content-Type", "application/json")
                .retrieve()
                .bodyToMono(String.class)
                .block();

        return block;
    }

}
