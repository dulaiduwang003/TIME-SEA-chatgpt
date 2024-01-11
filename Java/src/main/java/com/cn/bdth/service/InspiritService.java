package com.cn.bdth.service;

/**
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
