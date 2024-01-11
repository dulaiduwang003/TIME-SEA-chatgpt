package com.cn.bdth.model;

import com.alibaba.fastjson2.annotation.JSONField;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.List;

/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@SuppressWarnings("all")
@Data
@Accessors(chain = true)
public class GptPreviewModel implements Serializable {

    private String model;
    private List<Messages> messages;
    private int max_tokens=2048;
    @Data
    public static class Messages {

        private String role="user";

        private List<Contents> content;

        @Data
        public static class Contents {
            private String type;
            private String text;
            private ImageUrl image_url;
            @Data
            public static class ImageUrl {
                private String url;
                //high消耗low两倍的token
                private String detail="high";
            }
        }
    }

}
