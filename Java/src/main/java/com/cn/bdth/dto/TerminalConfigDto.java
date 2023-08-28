package com.cn.bdth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class TerminalConfigDto {

    @NotBlank(message = "代理IP不能为空")
    private String proxyIp;

    @NotNull(message = "代理端口不能为空")
    private Integer proxyPort;

    @NotBlank(message = "小程序环境不能为空")
    private String wechatAppEnv;

    @NotBlank(message = "敏感词过滤不能为空")
    private String sensitiveWords;

    @NotNull(message = "敏感词开启不能空")
    private Boolean enableSensitive;

    @NotNull(message = "增强开启不能空")
    private Boolean enableGptPlus;

    @NotNull(message = "小程序主页面开启不能空")
    private Boolean enableWechatAppMain;

    @NotNull(message = "代理开启不能为空")
    private Boolean enableProxy;
}
