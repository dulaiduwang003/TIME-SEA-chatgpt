package com.cn.bdth.net;

import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.common.ControlCommon;
import com.cn.bdth.constants.AiTypeConstant;
import com.cn.bdth.dto.GptWebDto;
import com.cn.bdth.exceptions.*;
import com.cn.bdth.service.GptService;
import com.cn.bdth.utils.ChatUtils;
import com.cn.bdth.utils.SpringContextUtil;
import com.cn.bdth.utils.UserUtils;
import jakarta.websocket.*;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;


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

    @OnOpen
    public void onOpen(final Session session, @PathParam("token") String token) {
        try {
            assert session.getId() != null;
            assert StpUtil.getLoginIdByToken(token) != null;
        } catch (NullPointerException e) {
            log.warn("无法获取到建立连接数据,已拒绝连接");
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
    }

    @OnMessage
    public void onMessage(final String message, final @PathParam("token") String token, final @PathParam("model") String model) {
        try {
            final GptWebDto gptWebDto = JSONObject.parseObject(message, GptWebDto.class);
            final Long userId = UserUtils.getLoginIdByToken(token);
            chatUtils.lastOperationTime(userId);

            final ChatGptCommon.ChatGptStructure chatGptStructure = chatGptCommon.getChatGptStructure();

            boolean isAdvancedModel = AiTypeConstant.ADVANCED.equals(model);

            final Long frequency = controlCommon.getControl().getEnableGptPlus() ? (isAdvancedModel ? chatGptStructure.getGptPlusFrequency() : chatGptStructure.getGptFrequency()) : chatGptStructure.getGptFrequency();

            chatUtils.deplete(frequency, userId);
            //与GPT建立通信
            gptService.concatenationGpt(chatUtils.conversionStructure(gptWebDto), isAdvancedModel, chatGptStructure)
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
                            chatUtils.compensate(frequency, userId);
                            log.error("调用GPT时出现异常 异常信息:{} 异常类:{}", throwable.getMessage(), throwable.getClass());
                            appointSendingSystem(ExceptionMessages.GPT_TIMEOUT);
                        }
                    });
        } catch (ViolationsException e) {
            appointSendingSystem(e.getMessage());
            handleWebSocketCompletion();
        } catch (Exception e) {
            log.error(" 与 OPEN Ai建立连接失败 原因:{}", e.getMessage());
            appointSendingSystem(ExceptionMessages.GPT_FREQUENT);
            handleWebSocketCompletion();
        }
    }

    @OnClose
    public void handleWebSocketCompletion() {
        try {
            this.session.close();
        } catch (IOException e) {
            log.error("关闭 GPT WebSocket 会话失败.", e);
        }
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        log.warn("GPT websocket出现异常 原因:{}", throwable.getMessage());
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
