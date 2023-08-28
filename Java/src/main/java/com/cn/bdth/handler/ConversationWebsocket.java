package com.cn.bdth.handler;

import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.interfaces.Callback;
import com.cn.bdth.model.ArgumentModel;
import com.cn.bdth.model.ChatWebsocketModel;
import com.cn.bdth.model.MessageModel;
import com.cn.bdth.model.ParticipantModel;
import com.cn.bdth.utils.BingUtils;
import com.google.gson.GsonBuilder;
import okhttp3.Response;
import okhttp3.WebSocket;
import okhttp3.WebSocketListener;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;


public class ConversationWebsocket extends WebSocketListener {

    private final char TerminalChar = '\u001e';

    private final String conversationId;

    private final String clientId;

    private final String conversationSignature;

    private final String question;

    private final String invocationID;

    private final Callback callback;


    private final String locale;


    public ConversationWebsocket(String ConversationId, String ClientId, String ConversationSignature, String question, short invocationID, Callback callback, String locale) {
        conversationId = ConversationId;
        clientId = ClientId;
        conversationSignature = ConversationSignature;
        this.question = question;
        this.invocationID = String.valueOf(invocationID);
        this.callback = callback;

        this.locale = locale;
    }

    @Override
    public void onClosed(@NotNull WebSocket webSocket, int code, @NotNull String reason) {

        super.onClosed(webSocket, code, reason);
    }

    @Override
    public void onClosing(@NotNull WebSocket webSocket, int code, @NotNull String reason) {

        super.onClosing(webSocket, code, reason);
    }

    @Override
    public void onFailure(@NotNull WebSocket webSocket, @NotNull Throwable t, @Nullable Response response) {

        webSocket.close(1000, String.valueOf(TerminalChar));
        super.onFailure(webSocket, t, response);
    }


    @Override
    public void onMessage(@NotNull WebSocket webSocket, @NotNull String text) {
        for (String textSpited : text.split(String.valueOf(TerminalChar))) {

            JSONObject json = JSONObject.parseObject(textSpited);
            if (json.isEmpty()) {
                sendData(webSocket, "{\"type\":6}");
                String s = new GsonBuilder().disableHtmlEscaping().create().toJson(
                        new ChatWebsocketModel(new ArgumentModel[]{
                                new ArgumentModel(
                                        BingUtils.randomString(32).toLowerCase(),
                                        invocationID.equals("0"),
                                        new MessageModel(
                                                locale,
                                                locale,
                                                null,
                                                null,
                                                null,
                                                BingUtils.getNowTime(),
                                                question
                                        ),
                                        conversationSignature,
                                        new ParticipantModel(clientId),
                                        conversationId,
                                        null
                                )
                        }, invocationID)
                );
                sendData(webSocket, s);
            } else if (json.containsKey("type")) {
                int type = json.getIntValue("type");
                if (type == 3) {
                    //end
                    webSocket.close(1000, String.valueOf(TerminalChar));
                } else if (type == 6) {
                    //resend packet
                    sendData(webSocket, "{\"type\":6}");
                } else if (type == 2) {
                    if (json.getJSONObject("item").containsKey("result") && !json.getJSONObject("item").getJSONObject("result").getString("value").equals("Success")) {
                        callback.onFailure(json, json.getJSONObject("item").getJSONObject("result").getString("message"));
                    } else {
                        callback.onSuccess(json);
                    }
                } else if (type == 1) {
                    callback.onUpdate(json);
                } else if (type == 7) {
                    callback.onFailure(json, json.getString("error"));
                    webSocket.close(1000, String.valueOf(TerminalChar));
                }
            } else if (json.containsKey("error")) {
                callback.onFailure(json, json.getString("error"));
                webSocket.close(1000, String.valueOf(TerminalChar));
            }
        }
        super.onMessage(webSocket, text);
    }

    /**
     * On open.
     *
     * @param webSocket the web socket
     * @param response  the response
     */
    @Override
    public void onOpen(@NotNull WebSocket webSocket, @NotNull Response response) {
        super.onOpen(webSocket, response);
        sendData(webSocket, "{\"protocol\":\"json\",\"version\":1}");
    }

    /**
     * Send data.
     *
     * @param ws   the ws
     * @param data the data
     */
    private void sendData(@NotNull WebSocket ws, @NotNull String data) {

        ws.send(data + TerminalChar);
    }
}
