package com.cn.bdth.service;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface InspiritService {


    /**
     * 签到奖励
     */
    void rewardSignIn();


    /**
     * 视频奖励
     */
    void rewardVideo();


    /**
     * 使用兑换码
     *
     * @param code the code
     */
    void useRedemptionCode(final String code);
}
