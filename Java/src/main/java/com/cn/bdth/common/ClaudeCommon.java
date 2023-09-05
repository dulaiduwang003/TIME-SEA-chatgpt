package com.cn.bdth.common;

import com.cn.bdth.config.ClaudeDefaultConfig;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.model.ClaudeModel;
import com.cn.bdth.utils.RedisUtils;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;


/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
@Slf4j
@Data
public class ClaudeCommon {

    private final RedisUtils redisUtils;

    private final ClaudeDefaultConfig claudeDefaultConfig;

    public ClaudeModel getClaudeModel() {
        final Object value = redisUtils.getValue(ServerConstant.CLAUDE_CONFIG);
        if (value == null) {
            return getDefault();
        }
        try {
            return (ClaudeModel) value;
        } catch (Exception e) {
            log.warn("已清除上一个版本的CLAUDE配置,请前往控制台重新配置ChatGPT参数配置");
            redisUtils.delKey(ServerConstant.CLAUDE_CONFIG);
            return getDefault();
        }
    }

    private ClaudeModel getDefault() {
        log.warn("请前往控制台配置CLAUDE参数配置");
        return new ClaudeModel()
                .setSessionKey(claudeDefaultConfig.getSessionKey())
                .setOrganization_uuid(claudeDefaultConfig.getOrganizationUuid())
                .setConversation_uuid(claudeDefaultConfig.getConversationUuid());
    }

}
