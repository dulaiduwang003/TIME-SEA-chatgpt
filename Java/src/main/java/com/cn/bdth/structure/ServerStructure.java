
package com.cn.bdth.structure;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * BOT配置类
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Data
@Accessors(chain = true)
public class ServerStructure {

    /**
     * SD绘图URL
     */
    private String sdUrl;


    /**
     * openAi Url
     */
    private String openAiUrl;

    /**
     * Mj绘图URL
     */
    private String mjUrl;

    /**
     * OpenKey
     */
    private String openKey;

    /**
     * plus
     */
    private String openPlusKey;

    /**
     * 用户第一次登录奖励次数
     */
    private Long incentiveFrequency;

    /**
     * 用户观看视频奖励次数
     */
    private Long videoFrequency;

    /**
     * 调取GPT次数消耗
     */
    private Long gptFrequency;


    /**
     * 调取GPT-4消耗次数
     */
    private Long gptPlusFrequency;

    /**
     * 调取文生图次数消耗
     */
    private Long sdTextImageFrequency;


    /**
     * 调取图生图次数消耗
     */
    private Long sdImage2Frequency;

    /**
     * 调取文生图次数消耗
     */
    private Long mjTextImageFrequency;

    /**
     * 调取图生图次数消耗
     */
    private Long mjImage2Frequency;

    /**
     * 签到赠送次数不能为空
     */
    private Long signInFrequency;


    /**
     * 签到赠送次数不能为空
     */
    private Long gptTextImageFrequency;


    private String organizationUuid;


    private String conversationUuid;


    private String sessionKey;


    private String newBingCookie;

}
