package com.cn.bdth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * 长连接配置
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Configuration
public class WebSocketConfig {

    /**
     * 设置实例
     *
     * @return the server endpoint exporter
     */
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
