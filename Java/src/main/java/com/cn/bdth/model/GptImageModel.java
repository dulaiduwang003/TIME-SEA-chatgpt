/**
 * @author 明明不是下雨天
 */
package com.cn.bdth.model;

import lombok.Data;
import lombok.experimental.Accessors;


/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
@Accessors(chain = true)
public class GptImageModel {


    private String model = "image-alpha-001";

    private String prompt;

    private String size = "512x512";

    private Integer num_images = 1;

    private String response_format = "url";
}
