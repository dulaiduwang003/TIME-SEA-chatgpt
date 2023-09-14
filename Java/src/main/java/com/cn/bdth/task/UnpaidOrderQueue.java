
package com.cn.bdth.task;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.RDelayedQueue;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;

/**
 * The type Unpaid order queue.
 *
 * @author 欧渐风.
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class UnpaidOrderQueue {

    private final RDelayedQueue<String> delayedQueue;


    public void addOrder(final String orderNo) {
        delayedQueue.offer(orderNo, 290, TimeUnit.SECONDS);
    }
}
