package com.cn.bdth.model;

import lombok.Data;

@Data
public class PreviousMessagesModel {

    private final String text;

    private final String author = "bot";

    private final String[] adaptiveCards = {};

    private final SuggestedResponsesModel[] suggestedResponses;

    private final String messageId;

    private final String messageType;

}
