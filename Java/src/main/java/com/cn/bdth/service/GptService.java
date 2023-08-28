package com.cn.bdth.service;

import com.cn.bdth.model.GptModel;
import reactor.core.publisher.Flux;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface GptService {

    /**
     * 建立GPT 流式连接
     *
     * @param model 请求模型
     * @return string 流数据
     */
    Flux<String> concatenationGpt(final GptModel model, final boolean isAdvanced);


    /**
     * NewBing
     *
     * @return the flux
     */
    Flux<String> concatenationNewBing(final String messages);


    /*
     *  Claude
     */
    Flux<String> concatenationClaude(final String messages);
}
