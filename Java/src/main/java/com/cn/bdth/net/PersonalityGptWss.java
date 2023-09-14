package com.cn.bdth.net;

import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
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
@ServerEndpoint("/personality/api/{token}")
@SuppressWarnings("all")
@Service
public class PersonalityGptWss {

    private Session session;
    private static ChatUtils chatUtils;
    private static GptService gptService;


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
        chatUtils = (ChatUtils) SpringContextUtil.getBean("chatUtils");
        gptService = (GptService) SpringContextUtil.getBean("gptServiceImpl");
    }

    @OnMessage
    public void onMessage(final String message, final @PathParam("token") String token) {
        try {
            final Long userId = UserUtils.getLoginIdByToken(token);
            chatUtils.lastOperationTime(userId);
            //与GPT建立通信
            gptService.concatenationGpt(JSONObject.parseObject(message, GptWebDto.class).getMessages(), userId)
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
                            appointSendingSystem(ExceptionMessages.GPT_CONFIG_ERR);
                        }
                    });
        } catch (PersonalityConfigNullException e) {
            appointSendingSystem(e.getMessage());
            handleWebSocketCompletion();
        } catch (Exception e) {
            appointSendingSystem(ExceptionMessages.GPT_CONFIG_ERR);
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
