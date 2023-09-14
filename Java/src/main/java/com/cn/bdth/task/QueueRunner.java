
package com.cn.bdth.task;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.cn.bdth.entity.Orders;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.mapper.OrdersMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.RBlockingDeque;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * The type Queue runner.
 *
 * @author 明明不是下雨天
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class QueueRunner implements CommandLineRunner {


    private final RBlockingDeque<String> blockingFairQueue;

    private final OrdersMapper ordersMapper;

    @Override
    public void run(String... args) {
        new Thread(() -> {
            while (true) {
                String orderNo;
                try {
                    //获取订单号
                    orderNo = blockingFairQueue.take();
                } catch (Exception e) {
                    continue;
                }
                final Orders superOrder = ordersMapper.selectOne(new QueryWrapper<Orders>()
                        .lambda()
                        .eq(Orders::getOrdersId, orderNo)
                        .eq(Orders::getState, 1)
                        .select(Orders::getOrdersId)
                );
                if (superOrder == null) {
                    ordersMapper.updateById(new Orders()
                            .setOrdersId(orderNo)
                            .setState(2)
                            .setReasonFailure(ExceptionMessages.NOT_PAID_FOR_LONG_TIME)
                    );
                }
            }
        }).start();
    }
}
