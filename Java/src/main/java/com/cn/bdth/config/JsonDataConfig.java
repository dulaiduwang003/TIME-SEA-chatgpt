package com.cn.bdth.config;


import com.alibaba.fastjson.serializer.SerializeConfig;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.serializer.ValueFilter;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;
import org.springframework.boot.autoconfigure.http.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * JSON数据配置
 * 当后端数据为null 转化为 空字符
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Configuration
public class JsonDataConfig {
    @Bean
    public HttpMessageConverters fastJsonHttpMessageConverters() {
        FastJsonHttpMessageConverter converter = new FastJsonHttpMessageConverter();
        SerializeConfig serializeConfig = new SerializeConfig();
        serializeConfig.addFilter(String.class, (ValueFilter) (object, name, value) -> value == null ? "" : value);
        converter.setFastJsonConfig(new FastJsonConfig());
        converter.getFastJsonConfig().setSerializeConfig(serializeConfig);
        converter.getFastJsonConfig().setSerializerFeatures(SerializerFeature.WriteNullStringAsEmpty);
        return new HttpMessageConverters(converter);
    }
}
