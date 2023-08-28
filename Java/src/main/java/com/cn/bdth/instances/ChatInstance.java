package com.cn.bdth.instances;

import com.alibaba.fastjson.JSONObject;
import com.cn.bdth.exceptions.ConversationException;
import com.cn.bdth.handler.ConversationWebsocket;
import com.cn.bdth.interfaces.Callback;
import okhttp3.Dispatcher;
import okhttp3.OkHttpClient;
import okhttp3.Request;

import java.io.IOException;
import java.util.Date;
import java.util.Objects;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 处理Bing连接
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
public class ChatInstance {

    public static ExecutorService threadPool = Executors.newFixedThreadPool(1);

    private final OkHttpClient client;

    private final String conversationId;

    private final String clientId;

    private final String conversationSignature;

    private final String locale;

    private short chatCount;

    private int maxNumConversation = 15;

    private final long time;

    /**
     * 获取 参数id 以便于 建立WSS连接
     * @param httpClientBuilder
     * @param locale
     * @throws IOException
     * @throws ConversationException
     */
    public ChatInstance(OkHttpClient.Builder httpClientBuilder, String locale) throws IOException, ConversationException {
        client = httpClientBuilder.dispatcher(new Dispatcher(threadPool)).build();
        this.locale = locale;
        Request req = new Request.Builder().url("https://www.bing.com/turing/conversation/create").get().build();
        String s = Objects.requireNonNull(client.newCall(req).execute().body()).string();

        final JSONObject json = JSONObject.parseObject(s);
        if (!json.getJSONObject("result").getString("value").equals("Success")) {
            throw new ConversationException(json.getJSONObject("result").getString("message"));
        }
        time = new Date().getTime();
        chatCount = 0;
        conversationId = json.getString("conversationId");
        clientId = json.getString("clientId");
        conversationSignature = json.getString("conversationSignature");
    }

    synchronized public ChatInstance newQuestion(String question, Callback callback) {
        Callback cb = new Callback() {
            @Override
            public void onSuccess(JSONObject rawData) {
                if (rawData.containsKey("item") && rawData.getJSONObject("item").containsKey("throttling")
                        && rawData.getJSONObject("item").getJSONObject("throttling").containsKey("maxNumUserMessagesInConversation")) {
                    maxNumConversation = rawData.getJSONObject("item")
                            .getJSONObject("throttling")
                            .getIntValue("maxNumUserMessagesInConversation");
                }
                callback.onSuccess(rawData);
            }

            @Override
            public void onFailure(JSONObject rawData, String cause) {
                callback.onFailure(rawData, cause);
            }

            @Override
            public void onUpdate(JSONObject rawData) {
                callback.onUpdate(rawData);
            }
        };

        Request request = new Request.Builder().get().url("wss://sydney.bing.com/sydney/ChatHub").build();
        client.newWebSocket(
                request,
                new ConversationWebsocket(
                        conversationId,
                        clientId,
                        conversationSignature,
                        question,
                        chatCount,
                        cb,
                        locale
                )
        );
        chatCount++;
        return this;
    }
}
