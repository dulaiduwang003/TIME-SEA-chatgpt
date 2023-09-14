package com.cn.bdth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.common.ChatGptCommon;
import com.cn.bdth.common.ControlCommon;
import com.cn.bdth.common.StableDiffusionCommon;
import com.cn.bdth.common.UserInspiritCommon;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.dto.PutExchangeDto;
import com.cn.bdth.dto.ServerConfigDto;
import com.cn.bdth.dto.TerminalConfigDto;
import com.cn.bdth.dto.admin.AnnouncementDto;
import com.cn.bdth.entity.Exchange;
import com.cn.bdth.mapper.ExchangeMapper;
import com.cn.bdth.model.ClaudeModel;
import com.cn.bdth.service.ServerService;
import com.cn.bdth.structure.AnnouncementStructure;
import com.cn.bdth.structure.ControlStructure;
import com.cn.bdth.utils.BeanUtils;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.StringUtils;
import com.cn.bdth.vo.DispositionVo;
import com.cn.bdth.vo.admin.RedemptionCodeVo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@RequiredArgsConstructor
@Service
public class ServerServiceImpl implements ServerService {

    private final RedisUtils redisUtils;

    private final ExchangeMapper exchangeMapper;

    private final ControlCommon controlCommon;

    @Override
    public void heavyLoadDisposition(final ServerConfigDto dto) {
        //激励
        redisUtils.setValue(ServerConstant.INSPIRIT_CONFIG,
                new UserInspiritCommon.InspiritStructure()
                        .setIncentiveFrequency(dto.getIncentiveFrequency())
                        .setSignInFrequency(dto.getSignInFrequency())
                        .setVideoFrequency(dto.getVideoFrequency())
        );
        //SD
        redisUtils.setValue(ServerConstant.SD_CONFIG,
                new StableDiffusionCommon.StableDiffusionStructure()
                        .setSdUrl(dto.getSdUrl())
                        .setSdImageFrequency(dto.getSdImageFrequency())
        );
        //Bing
        redisUtils.setValue(ServerConstant.NEW_BING_CONFIG, dto.getNewBingCookie());
        // CHAT GPT
        redisUtils.setValue(ServerConstant.CHAT_GPT_CONFIG,
                new ChatGptCommon.ChatGptStructure()
                        .setGptFrequency(dto.getGptFrequency())
                        .setGptPlusFrequency(dto.getGptPlusFrequency())
                        .setOpenAiPlusUrl(dto.getOpenAiPlusUrl())
                        .setOpenKey(dto.getOpenKey())
                        .setOpenPlusKey(dto.getOpenPlusKey())
                        .setOpenAiUrl(dto.getOpenAiUrl())
                        .setGptTextImageFrequency(dto.getGptTextImageFrequency())
        );
        // claude
        redisUtils.setValue(ServerConstant.CLAUDE_CONFIG,
                new ClaudeModel()
                        .setConversation_uuid(dto.getConversationUuid())
                        .setOrganization_uuid(dto.getOrganizationUuid())
                        .setSessionKey(dto.getSessionKey())
        );
    }

    @Override
    public ControlStructure getTerminal() {
        return (ControlStructure) redisUtils.getValue(ServerConstant.TERMINAL_CONFIG);
    }

    @Override
    public void putTerminal(TerminalConfigDto dto) {
        final ControlStructure controlStructure = BeanUtils.copyClassProperTies(dto, ControlStructure.class);
        redisUtils.setValue(ServerConstant.TERMINAL_CONFIG, controlStructure);
    }

    @Override
    public DispositionVo getDisposition() {
        final ClaudeModel claudeModel = (ClaudeModel) redisUtils.getValue(ServerConstant.CLAUDE_CONFIG);
        final StableDiffusionCommon.StableDiffusionStructure sdStructure = (StableDiffusionCommon.StableDiffusionStructure) redisUtils.getValue(ServerConstant.SD_CONFIG);
        final ChatGptCommon.ChatGptStructure chatGptStructure = (ChatGptCommon.ChatGptStructure) redisUtils.getValue(ServerConstant.CHAT_GPT_CONFIG);
        final String newBingCookie = String.valueOf(redisUtils.getValue(ServerConstant.NEW_BING_CONFIG));
        final UserInspiritCommon.InspiritStructure inspiritStructure = (UserInspiritCommon.InspiritStructure) redisUtils.getValue(ServerConstant.INSPIRIT_CONFIG);
        final DispositionVo dispositionVo = new DispositionVo();

        dispositionVo.setConversationUuid(claudeModel != null ? claudeModel.getConversation_uuid() : null);
        dispositionVo.setOrganizationUuid(claudeModel != null ? claudeModel.getOrganization_uuid() : null);
        dispositionVo.setOpenAiPlusUrl(chatGptStructure != null ? chatGptStructure.getOpenAiPlusUrl() : null);
        dispositionVo.setSessionKey(claudeModel != null ? claudeModel.getSessionKey() : null);
        dispositionVo.setSdUrl(sdStructure != null ? sdStructure.getSdUrl() : null);
        dispositionVo.setSdImageFrequency(sdStructure != null ? sdStructure.getSdImageFrequency() : null);
        dispositionVo.setGptFrequency(chatGptStructure != null ? chatGptStructure.getGptFrequency() : null);
        dispositionVo.setGptPlusFrequency(chatGptStructure != null ? chatGptStructure.getGptPlusFrequency() : null);
        dispositionVo.setOpenAiUrl(chatGptStructure != null ? chatGptStructure.getOpenAiUrl() : null);
        dispositionVo.setOpenKey(chatGptStructure != null ? chatGptStructure.getOpenKey() : null);
        dispositionVo.setOpenPlusKey(chatGptStructure != null ? chatGptStructure.getOpenPlusKey() : null);
        dispositionVo.setGptTextImageFrequency(chatGptStructure != null ? chatGptStructure.getGptTextImageFrequency() : null);
        dispositionVo.setNewBingCookie(StringUtils.isNotBlank(newBingCookie) ? newBingCookie : "");
        dispositionVo.setSignInFrequency(inspiritStructure != null ? inspiritStructure.getSignInFrequency() : null);
        dispositionVo.setVideoFrequency(inspiritStructure != null ? inspiritStructure.getVideoFrequency() : null);
        dispositionVo.setIncentiveFrequency(inspiritStructure != null ? inspiritStructure.getIncentiveFrequency() : null);

        return dispositionVo;
    }

    @Override
    public void buildRedemptionCode(final PutExchangeDto dto) {
        List<String> list = new ArrayList<>(Math.toIntExact(dto.getBuildQuantity()));
        ThreadLocalRandom random = ThreadLocalRandom.current();
        final String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        int averageCodeLength = 8;
        int charactersLength = characters.length();
        for (int i = 0; i < dto.getBuildQuantity(); i++) {
            StringBuilder randomString = new StringBuilder(averageCodeLength);
            for (int j = 0; j < averageCodeLength; j++) {
                int index = random.nextInt(charactersLength);
                randomString.append(characters.charAt(index));
            }
            list.add(randomString.toString());
        }
        list.parallelStream().forEach(p -> exchangeMapper.insert(new Exchange().setExchangeCode(p).setFrequency(dto.getBuildFrequency())));
    }

    @Override
    public IPage<RedemptionCodeVo> getRedemptionCodePage(final int pageNum, final String prompt) {

        return exchangeMapper.selectPage(new Page<>(pageNum, 15), new QueryWrapper<Exchange>()
                .lambda()
                .like(StringUtils.notEmpty(prompt), Exchange::getExchangeCode, prompt)
                .orderByDesc(Exchange::getFrequency)
        ).convert(e -> BeanUtils.copyClassProperTies(e, RedemptionCodeVo.class));
    }

    @Override
    public void deleteRedemptionCodeBasedOnTheId(final Long id) {
        exchangeMapper.deleteById(id);
    }


    @Override
    public void putAnnouncement(final AnnouncementDto dto) {
        final AnnouncementStructure structure = BeanUtils.copyClassProperTies(dto, AnnouncementStructure.class);
        //生成随机模板
        structure.setLogotypeId(UUID.randomUUID().toString());
        structure.setCreatedTime(LocalDateTime.now());
        redisUtils.setValue(ServerConstant.ANNOUNCEMENT, structure);
    }

    @Override
    public AnnouncementStructure getAnnouncement() {
        final Object value = redisUtils.getValue(ServerConstant.ANNOUNCEMENT);
        if (value != null) {
            return (AnnouncementStructure) value;
        }
        return null;
    }

    @Override
    public boolean wechatStatus() {
        return controlCommon.getControl().getEnableWechatAppMain();
    }
}
