package com.cn.bdth.service.impl;

import com.cn.bdth.common.FunCommon;

import com.cn.bdth.model.GptModel;
import com.cn.bdth.service.GptService;
import com.cn.bdth.structure.ServerStructure;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
public class GptServiceImpl implements GptService {

    private final WebClient.Builder webClient;

    private final FunCommon funCommon;


    @Override
    public Flux<String> concatenationGpt(final GptModel model) {
        final ServerStructure server = funCommon.getServer();
        return webClient.baseUrl(server.getOpenAiUrl())
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + server.getOpenKey())
                .build()
                .post()
                .body(BodyInserters.fromValue(model))
                .retrieve()
                .bodyToFlux(String.class);
    }
}
