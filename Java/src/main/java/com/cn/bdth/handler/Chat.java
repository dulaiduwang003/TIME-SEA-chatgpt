package com.cn.bdth.handler;

import com.cn.bdth.exceptions.ConversationException;
import com.cn.bdth.instances.ChatInstance;
import com.cn.bdth.utils.DefaultClientUtil;
import okhttp3.OkHttpClient;

import java.io.IOException;
import java.net.Proxy;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public class Chat {
    /**
     * The C.
     */
    private final OkHttpClient.Builder c;

    /**
     * The Locale.
     */
    private final String locale;


    public Chat(String defaultCookie, Boolean bypassCN) {
        c = new DefaultClientUtil(bypassCN, defaultCookie).getClient().newBuilder();
        this.locale = "zh-CN";
    }


    public Chat(String defaultCookie, Boolean bypassCN, String locale) {
        c = new DefaultClientUtil(bypassCN, defaultCookie).getClient().newBuilder();
        this.locale = locale;
    }

    /**
     * Close.
     */
    public void close() {
        OkHttpClient client = c.build();
        client.connectionPool().evictAll();
        client.dispatcher().executorService().shutdown();
    }

    /**
     * Sets proxy.
     *
     * @param proxy the proxy
     * @return the proxy
     */
    public Chat setProxy(Proxy proxy) {
        c.proxy(proxy);
        return this;
    }



    public ChatInstance newChat() {
        try {
            return new ChatInstance(c, locale);
        } catch (IOException | ConversationException e) {
            throw new RuntimeException(e);
        }
    }
}
