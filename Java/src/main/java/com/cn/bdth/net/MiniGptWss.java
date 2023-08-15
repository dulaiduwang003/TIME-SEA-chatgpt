package com.cn.bdth.net;

import cn.dev33.satoken.stp.StpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.common.FunCommon;
import com.cn.bdth.constants.WeChatConstant;
import com.cn.bdth.dto.GptMiniDto;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.FrequencyException;
import com.cn.bdth.exceptions.ViolationsException;
import com.cn.bdth.exceptions.WechatException;
import com.cn.bdth.model.GptModel;
import com.cn.bdth.service.GptService;
import com.cn.bdth.utils.ChatUtils;
import com.cn.bdth.utils.SpringContextUtil;
import com.cn.bdth.utils.UserUtils;
import com.cn.bdth.utils.WeChatUtils;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.Duration;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeoutException;


/**
 * 长连接响应. (标准)
 *
 * @author bdth
 */
@Slf4j
@ServerEndpoint("/gpt/api/{token}/{model}")
@SuppressWarnings("all")
@Service
public class MiniGptWss {

    private Session session;
    private static ConcurrentHashMap<String, Session> webSocketSet = new ConcurrentHashMap<>();
    private static ChatUtils chatUtils;
    private static WeChatUtils weChatUtils;
    private static GptService gptService;
    private static FunCommon funCommon;

    /**
     * On open.
     *
     * @param session the session
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("token") String token) {
        this.session = session;
        webSocketSet.put(session.getId(), session);
        if (StpUtil.getLoginIdByToken(token) == null) {
            //关闭连接
            handleWebSocketCompletion();
        }
        if (gptService == null) {
            chatUtils = (ChatUtils) SpringContextUtil.getBean("chatUtils");
            weChatUtils = (WeChatUtils) SpringContextUtil.getBean("weChatUtils");
            gptService = (GptService) SpringContextUtil.getBean("gptServiceImpl");
            funCommon = (FunCommon) SpringContextUtil.getBean("funCommon");
        }

    }


    /**
     * 发送消息
     *
     * @param messages 请求体数据
     * @param type     执行类型
     * @param token    用户token
     */
    @OnMessage
    public void onMessage(String messages, @PathParam("token") String token, @PathParam("model") String model) {
        try {
            final GptMiniDto gptMiniDto = JSONObject.parseObject(messages, GptMiniDto.class);
            // 微信文字识别能力 防止用户发送色情 政治信息
            //weChatUtils.filterText(gptMiniDto.getPrompt(), UserUtils.getOpenIdByToken(token));
            //校验用户次数
            final Long userId = UserUtils.getLoginIdByToken(token);
            //消耗次数
            final Long gptFrequency = funCommon.getServer().getGptFrequency();
            //更新用户最后操作时间
            chatUtils.lastOperationTime(userId);
            chatUtils.deplete(gptFrequency, userId);
            // 缓存对话数据 初始化缓存长度
            final StringBuilder builder = new StringBuilder(2000);
            final GptModel gptModel = new GptModel().setMessages(chatUtils.conversionStructure(gptMiniDto));
            if (chatUtils.getEnableGpt()) {
                gptModel.setModel(model);
            }
            gptService.concatenationGpt(gptModel)
                    .timeout(Duration.ofSeconds(60))
                    .doOnError(TimeoutException.class, e -> {
                        log.error("GPT回复超时 异常信息:{} 异常类:{}", e.getMessage(), e.getClass());
                        chatUtils.compensate(gptFrequency, userId);
                        handleWebSocketError(ExceptionMessages.GPT_TIMEOUT);
                    })
                    .doFinally(signal -> {
                        handleWebSocketCompletion();
                    })
                    .subscribe(data -> {
                        //是否为合法JSON
                        if (JSON.isValid(data)) {
                            final JSONObject jsonObject = JSONObject.parseObject(data);
                            // 获取文本节点
                            final JSONObject delta = jsonObject.getJSONArray("choices").getJSONObject(0).getJSONObject("delta");
                            if (delta.containsKey("content")) {
                                final String string = delta.getString("content");
                                // 是否开启自定义校验
                                if (chatUtils.getIsSensitive()) {
                                    builder.append(string.trim().toUpperCase());
                                    if (chatUtils.isSusceptible(builder.toString())) {
                                        handleWebSocketError(WeChatConstant.RC_MODE);
                                        handleWebSocketCompletion();
                                        return;
                                    }
                                }
                                AppointSending(session.getId(), string);
                            }
                        }
                    }, throwable -> {
                        chatUtils.compensate(gptFrequency, userId);
                        log.error("调用GPT时出现异常 异常信息:{} 异常类:{}", throwable.getMessage(), throwable.getClass());
                        // throwable.printStackTrace(); 输出错误堆栈信息
                        handleWebSocketError(ExceptionMessages.GPT_TIMEOUT);
                    });
        } catch (WechatException | FrequencyException | ViolationsException e) {
            AppointSending(session.getId(), e.getMessage());
            handleWebSocketCompletion();
            return;
        }
    }

    /**
     * 发送错误消息
     *
     * @param errMsg the err msg
     */
    private void handleWebSocketError(final String errMsg) {
        AppointSending(session.getId(), errMsg);
    }

    /**
     * 回收资源
     */
    @OnClose
    public void handleWebSocketCompletion() {
        webSocketSet.remove(this.session.getId());
        try {
            this.session.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


    /**
     * 发送消息
     *
     * @param id      the id
     * @param message the message
     */
    public void AppointSending(final String id, final String message) {
        try {
            final Session conversation = webSocketSet.get(id);
            conversation.getBasicRemote().sendText(message);
        } catch (Exception e) {

        }
    }

}
