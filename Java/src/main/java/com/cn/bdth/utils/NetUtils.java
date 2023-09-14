package com.cn.bdth.utils;

import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;

import java.time.Duration;

/**
 * 网络遥测
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@SuppressWarnings("all")
public class NetUtils {

    public static boolean checkUrlConnectivity(final String url) {
        WebClient webClient = WebClient.builder()
                .baseUrl(url)
                .build();
        final Mono<HttpStatusCode> response = webClient
                .method(HttpMethod.HEAD)
                .retrieve()
                .toBodilessEntity()
                .map(ResponseEntity::getStatusCode);
        try {
            final HttpStatusCode status = response.timeout(Duration.ofSeconds(5)).block();
            return status != null && status.is2xxSuccessful();
        }catch (WebClientResponseException ex){
            return !(ex.getStatusCode().is4xxClientError()||ex.getStatusCode().is5xxServerError());
        }
        catch (Exception e) {
            return false;
        }
    }
}
