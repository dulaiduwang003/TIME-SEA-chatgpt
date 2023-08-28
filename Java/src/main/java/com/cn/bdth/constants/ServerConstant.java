package com.cn.bdth.constants;

/**
 * BOT
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface ServerConstant {
    String SERVER = "SERVER_CONFIG";

    String TERMINAL = "TERMINAL_CONFIG";

    String ANNOUNCEMENT = "ANNOUNCEMENT";
    String DRAWING_SD_TASK_QUEUE = "DRAWING_SD_TASK_QUEUE";
    String SD_DRAWING_IMAGE = "/sdapi/v1/img2img";
    String SD_DRAWING_TEXT = "/sdapi/v1/txt2img";

    String GPT_DIALOGUE = "/chat/completions";
    String GPT_DRAWING = "/images/generations";

    Long DRAWING_IMAGE_TYPE = 1L;
    Long DRAWING_TEXT_TYPE = 0L;
    int IS_PUBLIC = 1;
}
