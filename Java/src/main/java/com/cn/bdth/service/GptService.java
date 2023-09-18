package com.cn.bdth.service;

import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.dto.PersonalityDto;
import com.cn.bdth.model.GptModel;
import com.cn.bdth.structure.PersonalityConfigStructure;
import reactor.core.publisher.Flux;

import java.util.List;

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
    Flux<String> concatenationGpt(final GptModel model, final boolean isAdvanced, final ChatGptCommon.ChatGptStructure chatGptStructure);

    /**
     * 通过GPT绘制图片
     *
     * @param promptWords 提此次
     * @return string 流数据
     */
    String drawAccordingGpt(final String promptWords, final ChatGptCommon.ChatGptStructure chatGptStructure);

    /**
     * 建立GPT 流式连接 个性
     *
     * @param messages 请求数据
     * @return string 流数据
     */
    Flux<String> concatenationGpt(List<GptModel.Messages> messages, final Long userId);

    /**
     * 获取个性配置
     */
    PersonalityConfigStructure getPersonalityConfig(Long currentLoginId);


    /**
     * 写入个性配置
     */
    void putPersonalityConfig(final PersonalityDto dto);

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
