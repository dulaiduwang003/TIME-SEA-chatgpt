package com.cn.bdth.model;


public class ChatWebsocketModel {

    private final ArgumentModel[] arguments;

    private final String invocationId;

    private final String target = "chat";

    private final int type = 4;

    public ChatWebsocketModel(ArgumentModel[] args, String invocationId) {
        arguments = args;
        this.invocationId = invocationId;
    }

    public ArgumentModel[] getArguments() {
        return arguments;
    }


    public String getInvocationId() {
        return invocationId;
    }
}
