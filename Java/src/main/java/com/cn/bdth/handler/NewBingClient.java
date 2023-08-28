package com.cn.bdth.handler;

import jakarta.websocket.ClientEndpoint;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;

import java.util.concurrent.CountDownLatch;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@ClientEndpoint
@SuppressWarnings("all")
public class NewBingClient {
    private CountDownLatch latch;

    private Session session;

    @OnOpen
    public void onWebSocketConnect(Session session) {
        this.session = session;
        latch.countDown();
    }
    @OnMessage
    public void onWebSocketMessage(String message) {

    }
    public void sendMessage(String message) throws Exception {
        if (session != null && session.isOpen()) {
            session.getBasicRemote().sendText(message);
        }
    }

    public void close() throws Exception {
        if (session != null && session.isOpen()) {
            session.close();
        }
    }
}
