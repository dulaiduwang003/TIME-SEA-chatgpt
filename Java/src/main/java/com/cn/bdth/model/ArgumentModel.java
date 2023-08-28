package com.cn.bdth.model;


import lombok.Data;

@SuppressWarnings("all")
@Data
public class ArgumentModel {

    private final String source = "cib";

    private final String[] optionsSets = {
            "nlu_direct_response_filter",
            "deepleo",
            "disable_emoji_spoken_text",
            "responsible_ai_policy_235",
            "enablemm",
            "galileo",
            "wlthrottle",
            "blocklistv2",
            "disbing",
            "dv3sugg"
    };
    private final String[] allowedMessageTypes = {
            "Chat",
            "InternalSearchQuery",
            "InternalSearchResult",
            "Disengaged",
            "InternalLoaderMessage",
            "RenderCardRequest",
            "AdsQuery",
            "SemanticSerp",
            "GenerateContentQuery",
            "SearchQuery"
    };
    private final String[] sliceIds = {
            "revdv3cf",
            "perfinstcf",
            "0310wlthrot",
            "302blocklist",
            "308disbing",
            "314glprompts0"
    };
    private final String traceId;
    private final boolean isStartOfSession;
    private final MessageModel message;
    private final String conversationSignature;
    private final ParticipantModel participant;
    private final String conversationId;
    private final PreviousMessagesModel[] previousMessages;

}
