package com.cn.bdth.common;

import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.structure.ControlStructure;
import com.cn.bdth.utils.RedisUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class ControlCommon {


    private final RedisUtils redisUtils;

    @Value("${control.proxyIp}")
    private String proxyIp;

    @Value("${control.proxyPort}")
    private Integer proxyPort;

    @Value("${control.wechatAppEnv}")
    private String wechatAppEnv;

    @Value("${control.sensitiveWords}")
    private String sensitiveWords;

    @Value("${control.enableSensitive}")
    private Boolean enableSensitive;

    @Value("${control.enableGptPlus}")
    private Boolean enableGptPlus;

    @Value("${control.enableProxy}")
    private Boolean enableProxy;

    @Value("${control.enableWechatAppMain}")
    private Boolean enableWechatAppMain;


    public ControlStructure getControl() {
        try {
            final ControlStructure value = (ControlStructure) redisUtils.getValue(ServerConstant.TERMINAL);
            if (value == null) {
                log.warn("当前正在使用服务器默认终端配置,请及时前往控制台配置服务器终端参数");
                return createdDefaultServer();
            } else {
                return value;
            }
        } catch (Exception e) {
            redisUtils.delKey(ServerConstant.TERMINAL);
            log.warn("已清除旧版本的服务器配置,当前正在使用服务器默认配置,请及时前往控制台配置服务器参数");
            return createdDefaultServer();

        }
    }

    private ControlStructure createdDefaultServer() {
        return new ControlStructure()
                .setEnableGptPlus(enableGptPlus)
                .setProxyIp(proxyIp)
                .setProxyPort(proxyPort)
                .setEnableProxy(enableProxy)
                .setSensitiveWords(sensitiveWords)
                .setEnableSensitive(enableSensitive)
                .setWechatAppEnv(wechatAppEnv)
                .setEnableWechatAppMain(enableWechatAppMain);

    }
}
