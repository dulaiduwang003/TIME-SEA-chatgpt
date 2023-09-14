package com.cn.bdth.net;

import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.exceptions.CloseException;
import com.cn.bdth.exceptions.ExceptionMessages;
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
 * 长连接响应. (免费)
 *
 * @author bdth
 */
@Slf4j
@ServerEndpoint("/bing/api/{token}")
@SuppressWarnings("all")
@Service
public class NewBingWss {

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

    /**
     * 发送消息
     *
     * @param messages 请求体数据
     * @param type     执行类型
     * @param token    用户token
     */
    @OnMessage
    public void onMessage(final String messages, @PathParam("token") final String token) {
        try {
            //用户ID
            final Long userId = UserUtils.getLoginIdByToken(token);
            //更新用户最后操作时间
            chatUtils.lastOperationTime(userId);
            gptService.concatenationNewBing(messages)
                    .doFinally(signal -> handleWebSocketCompletion())
                    .subscribe(data -> {
                        final JSONObject jsonObject = JSONObject.parseObject(data.toString());
                        for (Object arguments : jsonObject.getJSONArray("arguments")) {
                            final JSONObject json = JSONObject.parseObject(arguments.toString());
                            //校验数据格式 取内容
                            if (json.containsKey("messages") && (!json.containsKey("cursor"))) {
                                final JSONArray jsonArray = json.getJSONArray("messages").getJSONObject(0).getJSONArray("adaptiveCards");
                                final JSONObject body = jsonArray.getJSONObject(0).getJSONArray("body").getJSONObject(0);
                                //是否为回复
                                if (body.containsKey("text")) {
                                    try {
                                        this.session.getBasicRemote().sendText(body.getString("text"));
                                    } catch (Exception e) {
                                        //用户可能手动端口连接
                                        throw new CloseException();
                                    }
                                }
                            }
                        }
                    }, throwable -> {
                        if (!(throwable instanceof CloseException)) {
                            log.error("调用必应时出现异常 异常信息:{} ", throwable.getMessage());
                            appointSendingSystem(ExceptionMessages.GPT_TIMEOUT);
                        }
                    });
        } catch (Exception e) {
            log.error(" 与必应建立连接失败 原因:{}", e.getMessage());
            appointSendingSystem(ExceptionMessages.GPT_ERR);
            handleWebSocketCompletion();
        }


    }

    @OnClose
    public void handleWebSocketCompletion() {
        try {
            this.session.close();
        } catch (IOException e) {
            log.error("关闭 必应 WebSocket 会话失败.", e);
        }
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        log.warn("必应 websocket出现异常 原因:{}", throwable.getMessage());
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
