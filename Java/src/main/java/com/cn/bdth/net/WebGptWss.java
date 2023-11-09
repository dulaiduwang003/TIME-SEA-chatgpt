package com.cn.bdth.net;

import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.common.ControlCommon;
import com.cn.bdth.dto.GptWebDto;
import com.cn.bdth.entity.SysLog;
import com.cn.bdth.exceptions.CloseException;
import com.cn.bdth.exceptions.DrawingException;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.mapper.SysLogMapper;
import com.cn.bdth.model.GptModel;
import com.cn.bdth.service.GptService;
import com.cn.bdth.utils.ChatUtils;
import com.cn.bdth.utils.IpUtils;
import com.cn.bdth.utils.SpringContextUtil;
import com.cn.bdth.utils.UserUtils;
import jakarta.websocket.*;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;


/**
 * 长连接响应. (标准)
 *
 * @author bdth
 */
@Slf4j
@ServerEndpoint("/gpt-web/api/{token}/{model}")
@SuppressWarnings("all")
@Service
public class WebGptWss {

    private Session session;
    private static ChatUtils chatUtils;
    private static GptService gptService;
    private static ChatGptCommon chatGptCommon;
    private static ControlCommon controlCommon;
    private static SysLogMapper sysLogMapper;

    AtomicBoolean isColse = new AtomicBoolean(true);

    @OnOpen
    public void onOpen(final Session session, @PathParam("token") String token) {
        try {
            assert session.getId() != null;
            assert StpUtil.getLoginIdByToken(token) != null;
        } catch (Exception e) {
            return;
        }
        this.session = session;
        if (gptService == null) {
            initDependencies();
        }
    }

    private void initDependencies() {
        controlCommon = (ControlCommon) SpringContextUtil.getBean("controlCommon");
        chatUtils = (ChatUtils) SpringContextUtil.getBean("chatUtils");
        gptService = (GptService) SpringContextUtil.getBean("gptServiceImpl");
        chatGptCommon = (ChatGptCommon) SpringContextUtil.getBean("chatGptCommon");
        sysLogMapper = (SysLogMapper) SpringContextUtil.getBean("sysLogMapper");
    }

    @OnMessage
    public void onMessage(final String message, final @PathParam("token") String token, final @PathParam("model") String model) {
        try {
            final GptWebDto gptWebDto = JSONObject.parseObject(message, GptWebDto.class);

            final Long userId = UserUtils.getLoginIdByToken(token);

            //每次存最后一条的 user 提问信息
            GptModel.Messages lastMessage = gptWebDto.getMessages().get(gptWebDto.getMessages().size()-1);
            lastMessage.getContent();
            sysLogMapper.insert(new SysLog()
                    .setMethod("com.cn.bdth.net.WebGptWss.onMessage")
                    .setLogContent("gpt对话-web")
                    .setRequestParam(lastMessage.getContent())
                    .setUserId(userId));

            chatUtils.lastOperationTime(userId);

            final ChatGptCommon.ChatGptStructure chatGptStructure = chatGptCommon.getChatGptStructure();

            final String s = chatUtils.drawingCueWord(gptWebDto.getMessages());

            if (s == null) {
//                boolean isAdvancedModel = AiTypeConstant.ADVANCED.equals(model);
                boolean isAdvancedModel = false;
                // 是否微软调用
                boolean isAzure = true;

                final Long frequency = controlCommon.getControl().getEnableGptPlus() ? (isAdvancedModel ? chatGptStructure.getGptPlusFrequency() : chatGptStructure.getGptFrequency()) : chatGptStructure.getGptFrequency();

                chatUtils.deplete(frequency, userId);
                //与GPT建立通信
                gptService.concatenationGpt(chatUtils.conversionStructure(gptWebDto), isAzure, chatGptStructure)
                        .doFinally(signal -> handleWebSocketCompletion())
                        .subscribe(data -> {
                            if (JSON.isValid(data)) {
                                JSONObject jsonObject = JSONObject.parseObject(data);
                                JSONArray choices = jsonObject.getJSONArray("choices");
                                if (choices != null && !choices.isEmpty()) {
                                    JSONObject delta = choices.getJSONObject(0).getJSONObject("delta");
                                    if (delta.containsKey("content")) {
                                        // 可能会抛出关闭异常
                                        try {
                                            this.session.getBasicRemote().sendText(delta.getString("content"));
                                        } catch (Exception e) {
                                            //用户可能手动端口连接
                                            throw new CloseException();
                                        }
                                    }
                                }
                            }
                        }, throwable -> {
                            //为 Close异常时 过滤
                            if (!(throwable instanceof CloseException)) {
                                log.error("调用GPT-AZURE-WEB时出现异常 userId:{} 提问内容:{} 异常信息:{} ", userId, lastMessage.getContent(), (throwable instanceof WebClientResponseException)?((WebClientResponseException) throwable).getResponseBodyAsString():throwable.getMessage());
                                if(true) {
                                    isColse.set(false);
                                    gptService.concatenationGpt(chatUtils.conversionStructure(gptWebDto), false, chatGptStructure)
                                            .doFinally(signal -> handleWebSocketCompletion())
                                            .subscribe(data -> {
                                                isColse.set(true);
                                                if (JSON.isValid(data)) {
                                                    JSONObject jsonObject = JSONObject.parseObject(data);
                                                    JSONArray choices = jsonObject.getJSONArray("choices");
                                                    if (choices != null && !choices.isEmpty()) {
                                                        JSONObject delta = choices.getJSONObject(0).getJSONObject("delta");
                                                        if (delta.containsKey("content")) {
                                                            // 可能会抛出关闭异常
                                                            try {
                                                                this.session.getBasicRemote().sendText(delta.getString("content"));
                                                            } catch (Exception e) {
                                                                //用户可能手动端口连接
                                                                throw new CloseException();
                                                            }
                                                        }
                                                    }
                                                }
                                            }, throwable1 -> {
                                                isColse.set(true);
                                                //为 Close异常时 过滤
                                                if (!(throwable1 instanceof CloseException)) {
                                                    chatUtils.compensate(frequency, userId);
                                                    log.error("调用GPT-OPEN-WEB时出现异常 userId:{} 提问内容:{} 异常信息:{} ", userId, lastMessage.getContent(), (throwable1 instanceof WebClientResponseException)?((WebClientResponseException) throwable1).getResponseBodyAsString():throwable1.getMessage());
                                                    appointSendingSystem(ExceptionMessages.GPT_TIMEOUT);
                                                }
                                            });
                                }else {
                                    chatUtils.compensate(frequency, userId);
                                    appointSendingSystem(ExceptionMessages.GPT_TIMEOUT);
                                }
                            }
                        });
            } else {
                Long frequency = null;
                try {
                    frequency = chatGptStructure.getGptTextImageFrequency();
                    chatUtils.deplete(frequency, userId);
                    final String context = gptService.drawAccordingGpt(s, chatGptStructure);
                    this.session.getBasicRemote().sendText(context);
                } catch (DrawingException e) {
                    chatUtils.compensate(frequency, userId);
                    appointSendingSystem(ExceptionMessages.GPT_TIMEOUT);
                } finally {
                    handleWebSocketCompletion();
                }
            }


        } catch (FrequencyException e) {
            appointSendingSystem(e.getMessage());
            handleWebSocketCompletion();
        } catch (Exception e) {
            log.error(" 与 OPEN Ai建立连接失败 原因:{}", ExceptionUtils.getStackTrace(e));
            appointSendingSystem(ExceptionMessages.GPT_ERR);
            handleWebSocketCompletion();
        }
    }

    @OnClose
    public void handleWebSocketCompletion() {
        if(isColse.get()){
            try {
                this.session.close();
            } catch (IOException e) {
                log.error("关闭 GPT WebSocket 会话失败.", e);
            }
        }
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        log.warn("GPT websocket出现异常 原因:{}", ExceptionUtils.getStackTrace(throwable));
        //打印堆栈
        //      throwable.printStackTrace();
    }

    public void appointSendingSystem(final String message) {
        try {
            this.session.getBasicRemote().sendText(message);
        } catch (Exception e) {

        }
    }


}
