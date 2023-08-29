package com.cn.bdth.common;

import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.model.ClaudeModel;
import com.cn.bdth.utils.RedisUtils;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
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

    @Value("${config.organizationUuid}")
    private String organizationUuid;

    @Value("${config.conversationUuid}")
    private String conversationUuid;

    @Value("${config.sessionKey}")
    private String sessionKey;


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
                .setSessionKey(sessionKey)
                .setOrganization_uuid(organizationUuid)
                .setConversation_uuid(conversationUuid);
    }

}
