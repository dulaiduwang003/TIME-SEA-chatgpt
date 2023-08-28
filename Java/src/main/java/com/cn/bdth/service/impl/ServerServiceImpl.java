package com.cn.bdth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.common.ControlCommon;
import com.cn.bdth.constants.ServerConstant;
import com.cn.bdth.dto.PutExchangeDto;
import com.cn.bdth.dto.ServerConfigDto;
import com.cn.bdth.dto.TerminalConfigDto;
import com.cn.bdth.dto.admin.AnnouncementDto;
import com.cn.bdth.entity.Exchange;
import com.cn.bdth.mapper.ExchangeMapper;
import com.cn.bdth.service.ServerService;
import com.cn.bdth.structure.AnnouncementStructure;
import com.cn.bdth.structure.ControlStructure;
import com.cn.bdth.structure.ServerStructure;
import com.cn.bdth.utils.BeanUtils;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.StringUtils;
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
        final ServerStructure serverStructure = BeanUtils.copyClassProperTies(dto, ServerStructure.class);
        redisUtils.setValue(ServerConstant.SERVER, serverStructure);
    }

    @Override
    public ControlStructure getTerminal() {
        return (ControlStructure) redisUtils.getValue(ServerConstant.TERMINAL);
    }

    @Override
    public void putTerminal(TerminalConfigDto dto) {
        final ControlStructure controlStructure = BeanUtils.copyClassProperTies(dto, ControlStructure.class);
        redisUtils.setValue(ServerConstant.TERMINAL, controlStructure);
    }

    @Override
    public ServerStructure getDisposition() {
        return (ServerStructure) redisUtils.getValue(ServerConstant.SERVER);
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
