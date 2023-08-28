package com.cn.bdth.utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Base64;

/**
 * 图像工具类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Component
@Slf4j
public class ImageUtils {


    @Value("${ali-oss.domain}")
    private String domain;

    public String convertImageToBase64(final String imagePath) {
        try {
            String imageUrl = domain + imagePath;
            Mono<byte[]> imageMono = WebClient.builder()
                    .codecs(item -> item.defaultCodecs().maxInMemorySize(10 * 1024 * 1024 * 1024)).build().get()
                    .uri(imageUrl)
                    .accept(MediaType.IMAGE_JPEG, MediaType.IMAGE_PNG)
                    .retrieve()
                    .bodyToMono(byte[].class);
            byte[] imageBytes = imageMono.block();
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);
            return "data:image/jpg;base64," + base64Image;
        } catch (Exception e) {
            log.error("图片转BASE64失败 错误信息:{} 位置:{}", e.getMessage(), e.getClass());
            throw new RuntimeException(e);
        }
    }

}
