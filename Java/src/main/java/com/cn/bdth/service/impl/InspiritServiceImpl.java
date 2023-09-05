package com.cn.bdth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.cn.bdth.common.UserInspiritCommon;
import com.cn.bdth.constants.lock.LockPrefix;
import com.cn.bdth.constants.user.UserConstant;
import com.cn.bdth.entity.Exchange;
import com.cn.bdth.entity.User;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.ExchangeException;
import com.cn.bdth.exceptions.SignInException;
import com.cn.bdth.mapper.ExchangeMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.InspiritService;
import com.cn.bdth.utils.RedisLockHelper;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.TimeUnit;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
public class InspiritServiceImpl implements InspiritService {


    private final UserInspiritCommon userInspiritCommon;

    private final ExchangeMapper exchangeMapper;

    private final RedisLockHelper lockHelper;

    private final UserMapper userMapper;

    private final RedisUtils redisUtils;


    @Override
    public void rewardSignIn() {
        final User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda().eq(User::getUserId, UserUtils.getCurrentLoginId())
                .select(User::getFrequency, User::getIsSignIn, User::getUserId)
        );
        if (user.getIsSignIn() == UserConstant.IS_SIGN_IN) {
            //已经签到过了
            throw new SignInException(ExceptionMessages.IS_SIGN_IN);
        }

        userMapper.update(null, new UpdateWrapper<User>()
                .lambda()
                .setSql("is_sign_in = 1")
                .eq(User::getUserId, UserUtils.getCurrentLoginId())
                .setSql("frequency = frequency + " + userInspiritCommon.getInspiritStructure().getSignInFrequency())

        );
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void rewardVideo() {
        final String key = UserConstant.ACCESS_FREQUENCY + UserUtils.getCurrentLoginId();
        final long increment = redisUtils.increment(key, 1);
        if (increment <= 6) {
            if (increment == 1) {
                redisUtils.expire(key, 1, TimeUnit.MINUTES);
            } else {
                redisUtils.expire(key, redisUtils.getExpire(key), TimeUnit.SECONDS);
            }
            userMapper.update(null, new UpdateWrapper<User>()
                    .lambda()
                    .eq(User::getUserId, UserUtils.getCurrentLoginId())
                    .setSql("frequency = frequency + " + userInspiritCommon.getInspiritStructure().getVideoFrequency())
            );
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void useRedemptionCode(final String code) {
        final List<Exchange> exchanges = exchangeMapper.selectList(new QueryWrapper<Exchange>()
                .lambda().eq(Exchange::getExchangeCode, code)
                .select(Exchange::getFrequency, Exchange::getExchangeId)
        );
        if (exchanges == null || exchanges.isEmpty()) {
            throw new ExchangeException(ExceptionMessages.NOT_EXIST_CODE);
        }
        final Exchange exchange = exchanges.get(0);
        final String lockTime = String.valueOf(System.currentTimeMillis());
        final String lockPrefix = LockPrefix.EXCHANGE_CODE_KEY + code;
        final boolean lock = lockHelper.lock(lockPrefix, lockTime);
        if (!lock) {
            throw new ExchangeException(ExceptionMessages.CONCURRENT);
        }
        try {
            final User user = userMapper.selectOne(new QueryWrapper<User>()
                    .lambda().eq(User::getUserId, UserUtils.getCurrentLoginId())
            );
            userMapper.updateById(user.setFrequency(user.getFrequency() + exchange.getFrequency()));
            exchangeMapper.deleteById(exchange);
        } finally {
            lockHelper.unlock(lockPrefix, lockTime);
        }
    }
}
