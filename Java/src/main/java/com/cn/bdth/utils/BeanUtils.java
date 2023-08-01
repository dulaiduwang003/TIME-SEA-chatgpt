package com.cn.bdth.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;

import java.util.List;


/**
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public final class BeanUtils {

    public static <S, T> T copyClassProperTies(S source, Class<T> target) {
        return JSON.parseObject(JSON.toJSONString(source), target);
    }

    public static <T> List<T> copyArrayProperTies(Object source, Class<T> target) {
        return JSON.parseArray(JSON.toJSONString(source), target);
    }


    public static <S, T> T copyClassProperTiesWriteDate(S source, Class<T> target) {
        return JSON.parseObject(
                JSONObject.toJSONStringWithDateFormat(source, "yyyy-MM-dd HH:mm:ss", SerializerFeature.WriteDateUseDateFormat), target
        );

    }


    /**
     * Copy array proper ties write date list.
     *
     * @param <T>    the type parameter
     * @param source the source
     * @param target the target
     * @return the list
     */
    public static <T> List<T> copyArrayProperTiesWriteDate(Object source, Class<T> target) {
        return JSON.parseArray(
                JSONObject.toJSONStringWithDateFormat(source, "yyyy-MM-dd HH:mm:ss", SerializerFeature.WriteDateUseDateFormat), target
        );
    }
}
