/**
 * @author 明明不是下雨天
 */
package com.cn.bdth.config;

import com.cn.bdth.constants.OrderConstant;
import org.redisson.api.RBlockingDeque;
import org.redisson.api.RDelayedQueue;
import org.redisson.api.RedissonClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * The type Redis delay queue config.
 *
 * @author 欧渐风.
 */
@Configuration
public class RedisDelayQueueConfig {

    @Bean
    public RBlockingDeque<String> blockingDeque(RedissonClient redissonClient) {

        return redissonClient.getBlockingDeque(OrderConstant.ORDER_QUEUE);
    }

    @Bean
    public RDelayedQueue<String> delayedQueue(RedissonClient redissonClient) {
        return redissonClient.getDelayedQueue(blockingDeque(redissonClient));
    }
}
