package com.cn.bdth.model;

import lombok.Data;

@Data
public class SuggestedResponsesModel {

    private final String text;

    private final String contentOrigin;

    private final String messageType;

    private final String messageId;

    private final String offense;

}
