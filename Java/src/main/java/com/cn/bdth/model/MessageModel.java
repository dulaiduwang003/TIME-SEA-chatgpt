package com.cn.bdth.model;

import lombok.Data;

@Data
public class MessageModel {

    private final String locale;

    private final String market;

    private final String region;

    private final String location;

    private final LocationHintsModel locationHints;

    private final String timestamp;

    private final String author = "user";

    private final String inputMethod = "Keyboard";

    private final String text;

    private final String messageType = "Chat";

}
