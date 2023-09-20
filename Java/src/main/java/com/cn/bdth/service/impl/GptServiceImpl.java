package com.cn.bdth.service.impl;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.common.ClaudeCommon;
import com.cn.bdth.common.ControlCommon;
import com.cn.bdth.common.NewBingCommon;
import com.cn.bdth.constants.AiModelConstant;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.constants.user.PersonalityConstant;
import com.cn.bdth.dto.PersonalityDto;
import com.cn.bdth.entity.Personality;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.exceptions.BingException;
import com.cn.bdth.exceptions.DrawingException;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.PersonalityConfigNullException;
import com.cn.bdth.handler.Chat;
import com.cn.bdth.interfaces.Callback;
import com.cn.bdth.mapper.PersonalityMapper;
import com.cn.bdth.model.ClaudeModel;
import com.cn.bdth.model.GptImageModel;
import com.cn.bdth.model.GptModel;
import com.cn.bdth.service.GptService;
import com.cn.bdth.structure.ControlStructure;
import com.cn.bdth.structure.PersonalityConfigStructure;
import com.cn.bdth.utils.AliUploadUtils;
import com.cn.bdth.utils.BeanUtils;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.netty.http.client.HttpClient;
import reactor.netty.transport.ProxyProvider;

import java.net.InetSocketAddress;
import java.net.Proxy;
import java.util.List;
import java.util.UUID;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class GptServiceImpl implements GptService {

    private final WebClient.Builder webClient;

    private final ControlCommon controlCommon;

    private final NewBingCommon newBingCommon;

    private final ClaudeCommon claudeCommon;

    private final RedisUtils redisUtils;

    private final PersonalityMapper personalityMapper;

    private final AliUploadUtils aliUploadUtils;

    @Value("${ali-oss.domain}")
    private String domain;

    @Override
    public PersonalityConfigStructure getPersonalityConfig(Long currentLoginId) {
        if (currentLoginId == null) {
            currentLoginId = UserUtils.getCurrentLoginId();
        }

        String key = PersonalityConstant.GPT_CONFIG + currentLoginId;
        PersonalityConfigStructure personalityConfigStructure = (PersonalityConfigStructure) redisUtils.getValue(key);

        if (personalityConfigStructure == null) {
            Personality personality = personalityMapper.selectOne(new QueryWrapper<Personality>()
                    .lambda().eq(Personality::getUserId, currentLoginId)
                    .select(
                            Personality::getPersonalityId,
                            Personality::getAnswer,
                            Personality::getModel,
                            Personality::getOpenKey,
                            Personality::getMaxTokens,
                            Personality::getTemperature,
                            Personality::getOpenAiUrl,
                            Personality::getSpeed,
                            Personality::getTopP,
                            Personality::getQuestions
                    )
            );
            if (personality != null) {
                personalityConfigStructure = new PersonalityConfigStructure()
                        .setAnswer(personality.getAnswer())
                        .setModel(personality.getModel())
                        .setQuestions(personality.getQuestions())
                        .setSpeed(personality.getSpeed())
                        .setOpenAiUrl(personality.getOpenAiUrl())
                        .setMax_tokens(personality.getMaxTokens())
                        .setTemperature(personality.getTemperature())
                        .setOpenKey(personality.getOpenKey())
                        .setTop_p(personality.getTopP());
                redisUtils.setValueTimeout(key, personalityConfigStructure, 43200);
            }
        }

        return personalityConfigStructure;
    }

    @Override
    public void putPersonalityConfig(final PersonalityDto dto) {
        final Personality personality = BeanUtils.copyClassProperTies(dto, Personality.class);
        final Long currentLoginId = UserUtils.getCurrentLoginId();
        final Personality data = personalityMapper.selectOne(new QueryWrapper<Personality>()
                .lambda()
                .eq(Personality::getUserId, currentLoginId)
                .select(Personality::getPersonalityId)
        );
        personality.setUserId(currentLoginId);
        if (data != null) personalityMapper.updateById(personality.setPersonalityId(data.getPersonalityId()));
        else {
            personalityMapper.insert(personality);
        }
        redisUtils.delKey(PersonalityConstant.GPT_CONFIG + currentLoginId);

    }

    @Override
    public Flux<String> concatenationGpt(final GptModel model, final boolean isAdvanced, final ChatGptCommon.ChatGptStructure chatGptStructure) {
        //设置请求模型
        model.setModel(isAdvanced ? AiModelConstant.ADVANCED : AiModelConstant.BASIC);

        return webClient.baseUrl(isAdvanced ? chatGptStructure.getOpenAiPlusUrl() : chatGptStructure.getOpenAiUrl())
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + (isAdvanced ? chatGptStructure.getOpenPlusKey() : chatGptStructure.getOpenKey())).build()
                .post()
                .uri(ServerConstant.GPT_DIALOGUE)
                .body(BodyInserters.fromValue(model))
                .retrieve()
                .bodyToFlux(String.class);
    }

    @Override
    public String drawAccordingGpt(final String promptWords, final ChatGptCommon.ChatGptStructure str) {
        try {
            final String block = webClient.baseUrl(str.getOpenAiUrl())
                    .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + str.getOpenKey())
                    .build()
                    .post()
                    .uri(ServerConstant.GPT_DRAWING)
                    .body(BodyInserters.fromValue(new GptImageModel()
                            .setPrompt(promptWords)
                    ))
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();
            final JSONObject jsonObject = JSONObject.parseObject(block);
            assert jsonObject != null;
            final String imageUrl = jsonObject.getJSONArray("data").getJSONObject(0).getString("url");

            return "![DRAWING](" + domain + aliUploadUtils.uploadImageFromUrl(imageUrl, FileEnum.PAINTING.getDec(), UUID.randomUUID() + ".jpg") + ")";
        } catch (Exception e) {
            throw new DrawingException();
        }
    }

    @Override
    public Flux<String> concatenationGpt(List<GptModel.Messages> messages, final Long userId) {
        //获取个性配置
        final PersonalityConfigStructure config = getPersonalityConfig(userId);
        if (config == null) {
            throw new PersonalityConfigNullException();
        }
        //装填模型参数
        return webClient.baseUrl(config.getOpenAiUrl())
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + config.getOpenKey()).build()
                .post()
                .uri(ServerConstant.GPT_DIALOGUE)
                .body(BodyInserters.fromValue(
                        //封装MODEL
                        new GptModel().setMessages(messages)
                                .setTemperature(config.getTemperature())
                                .setModel(config.getModel())
                                .setTop_p(config.getTop_p())
                                .setMax_tokens(config.getMax_tokens())))
                .retrieve()
                .bodyToFlux(String.class);
    }


    @Override
    public Flux<String> concatenationNewBing(final String messages) {
        final ControlStructure control = controlCommon.getControl();
        //获取Cookie
        final String newBingCookie = "_U=" + newBingCommon.getNewBingCookie();

        final Chat chat;
        if (control.getEnableProxy()) {
            chat = new Chat(newBingCookie, false)
                    .setProxy(new Proxy(Proxy.Type.HTTP, new InetSocketAddress(control.getProxyIp(), control.getProxyPort())));
        } else {
            chat = new Chat(newBingCookie, false);
        }
        return Flux.create(f -> chat.newChat().newQuestion(messages, new Callback() {
            @Override
            public void onSuccess(JSONObject rawData) {
                f.complete();
            }

            @Override
            public void onFailure(JSONObject rawData, String cause) {
                log.error("NEW BING现在已经不可用 原因:{}", cause);
                throw new BingException(ExceptionMessages.BING_ERR);
            }

            @Override
            public void onUpdate(JSONObject rawData) {
                f.next(String.valueOf(rawData));
            }
        }));
    }

    @Override
    public Flux<String> concatenationClaude(final String message) {
        final ControlStructure control = controlCommon.getControl();
        final ClaudeModel claudeModel = claudeCommon.getClaudeModel()
                .setCompletion(new ClaudeModel.Completion().setPrompt(message))
                .setText(message);
        final WebClient.Builder builder = WebClient.builder()
                .baseUrl("https://claude.ai/api/append_message")
                .clientConnector(new ReactorClientHttpConnector())
                .defaultHeader(HttpHeaders.ORIGIN, "https://claude.ai")
                .defaultCookie("sessionKey", claudeModel.getSessionKey());
        if (control.getEnableProxy()) {
            builder.clientConnector(new ReactorClientHttpConnector(
                    HttpClient.create()
                            .proxy(proxy -> proxy
                                    .type(ProxyProvider.Proxy.HTTP)
                                    .address(new InetSocketAddress(control.getProxyIp(), control.getProxyPort())))
            ));
        }
        return builder.build()
                .post()
                .body(BodyInserters.fromValue(claudeModel))
                .retrieve()
                .bodyToFlux(String.class);
    }

}
