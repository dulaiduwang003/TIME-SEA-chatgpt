package com.cn.bdth.api;

import com.cn.bdth.exceptions.ExchangeException;
import com.cn.bdth.exceptions.RewardException;
import com.cn.bdth.exceptions.SignInException;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.InspiritService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/inspirit")
@RequiredArgsConstructor
public class InspiritController {


    private final InspiritService inspiritService;


    /**
     * 签到激励
     *
     * @return the result
     */
    @PostMapping(value = "/reward/signIn", name = "用户签到", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result userSignInReward() {
        try {
            inspiritService.rewardSignIn();
            return Result.ok();
        } catch (SignInException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 视频激励
     *
     * @return the result
     */
    @PostMapping(value = "/reward/video", name = "视频激励", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result useVideoReward() {
        try {
            inspiritService.rewardVideo();
            return Result.ok();
        } catch (RewardException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 使用兑换码
     *
     * @return the result
     */
    @PostMapping(value = "/exchange/{code}", name = "使用兑换码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result useExchangeCode(@PathVariable final String code) {
        try {
            inspiritService.useRedemptionCode(code);
            return Result.ok();
        } catch (ExchangeException e) {
            return Result.error(e.getMessage());
        }

    }
}
