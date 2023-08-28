
package com.cn.bdth.model;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

/**
 * 微信敏感词拦截模型
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
@SuppressWarnings("all")
public class WeChaQrCodeModel implements Serializable {

    private String scene;

    private String page = "pages/web/authorizationView";

    private Boolean check_path = false;

    private String env_version = "develop";

    private Boolean is_hyaline = true;

//    private Boolean auto_color = false;
//
//    private LineColor line_color = new LineColor();


//    @Data
//    private static class LineColor {
//        private Integer r = 151;
//
//        private Integer g = 136;
//
//        private Integer b = 239;
//
//    }
}
