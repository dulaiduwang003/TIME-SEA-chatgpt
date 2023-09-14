package com.cn.bdth.constants;

/**
 * BOT
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface ServerConstant {



    String INSPIRIT_CONFIG ="INSPIRIT_CONFIG";
    String SD_CONFIG ="SD_CONFIG";
    String NEW_BING_CONFIG ="NEW_BING_CONFIG";
    String CHAT_GPT_CONFIG ="CHAT_GPT_CONFIG";
    String CLAUDE_CONFIG ="CLAUDE_CONFIG";
    String TERMINAL_CONFIG = "TERMINAL_CONFIG";
    String ANNOUNCEMENT = "ANNOUNCEMENT";
    String DRAWING_SD_TASK_QUEUE = "DRAWING_SD_TASK_QUEUE";
    String SD_DRAWING_IMAGE = "/sdapi/v1/img2img";
    String SD_DRAWING_TEXT = "/sdapi/v1/txt2img";

    String GPT_DIALOGUE = "/chat/completions";
    String GPT_DRAWING = "/images/generations";

    int DRAWING_IMAGE_TYPE = 1;
    int DRAWING_TEXT_TYPE = 0;
    int IS_PUBLIC = 1;

    int DRAWING_WEB = 0;

    int DRAWING_WECHAT = 1;
}
