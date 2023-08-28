package com.cn.bdth.utils;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.util.Objects;


/**
 * redis锁
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
public final class RedisLockHelper {


    private final RedisTemplate<String, String> redisTemplate;

    public boolean lock(String targetKey, String timeStamp) {
        if (Boolean.TRUE.equals(redisTemplate.opsForValue().setIfAbsent(targetKey, timeStamp))) {

            return Boolean.TRUE;
        }
        String currentLock = redisTemplate.opsForValue().get(targetKey);
        if (StringUtils.notEmpty(currentLock)) {
            assert currentLock != null;
            final long val = Long.parseLong(currentLock);

            if (val > System.currentTimeMillis()) {

                String preLock = redisTemplate.opsForValue().getAndSet(targetKey, timeStamp);

                return StringUtils.notEmpty(preLock) && Objects.equals(preLock, currentLock);
            }

        }
        return false;

    }


    public void unlock(String targetKey, String timeStamp) {
        try {
            String currentValue = redisTemplate.opsForValue().get(targetKey);
            if (StringUtils.notEmpty(currentValue) && Objects.equals(currentValue, timeStamp)) {
                redisTemplate.opsForValue().getOperations().delete(targetKey);
            }
        } catch (Exception e) {
            log.error("锁错误 KEY:{},错误信息{}", targetKey, e.getMessage());
        }

    }

}
