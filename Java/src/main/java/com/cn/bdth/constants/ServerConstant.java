package com.cn.bdth.constants;

/**
 * BOT
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface ServerConstant {
    String CONFIG = "SUPER_CONFIG";

    String ANNOUNCEMENT = "ANNOUNCEMENT";
    String DRAWING_TASK_QUEUE = "DRAWING_TASK_QUEUE";
    String DRAWING_IMAGE = "/sdapi/v1/img2img";
    String DRAWING_TEXT = "/sdapi/v1/txt2img";
    Long DRAWING_IMAGE_TYPE = 1L;
    Long DRAWING_TEXT_TYPE = 0L;

    int IS_PUBLIC = 1;
}
