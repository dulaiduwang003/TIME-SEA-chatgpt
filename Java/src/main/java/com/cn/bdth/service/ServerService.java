package com.cn.bdth.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.cn.bdth.dto.PutExchangeDto;
import com.cn.bdth.dto.ServerConfigDto;
import com.cn.bdth.dto.TerminalConfigDto;
import com.cn.bdth.dto.admin.AnnouncementDto;
import com.cn.bdth.structure.AnnouncementStructure;
import com.cn.bdth.structure.ControlStructure;
import com.cn.bdth.vo.DispositionVo;
import com.cn.bdth.vo.admin.RedemptionCodeVo;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface ServerService {

    /**
     * 更新服务器配置
     *
     * @param dto the dto
     */
    void heavyLoadDisposition(final ServerConfigDto dto);

    /**
     * 获取服务器配置
     *
     * @return the disposition
     */
    DispositionVo getDisposition();


    /**
     * 获取终端配置
     *
     * @return ControlCommon
     */
    ControlStructure getTerminal();


    /**
     * 更新终端配置
     */
    void putTerminal(final TerminalConfigDto dto);

    /**
     * 生成兑换码
     *
     * @param dto the dto
     */
    void buildRedemptionCode(final PutExchangeDto dto);


    /**
     * 分页获取兑换码
     *
     * @param pageNum the page num
     * @param prompt  the prompt
     * @return the redemption code page
     */
    IPage<RedemptionCodeVo> getRedemptionCodePage(final int pageNum, final String prompt);


    /**
     * 根据 ID 删除兑换代码。
     *
     * @param id the id
     */
    void deleteRedemptionCodeBasedOnTheId(final Long id);


    /**
     * 发布公告
     *
     * @param dto the dto
     */
    void putAnnouncement(final AnnouncementDto dto);


    /**
     * 获取公告
     *
     * @return the announcement
     */
    AnnouncementStructure getAnnouncement();


    /**
     * 获取小程序状态
     *
     * @return 开启?关闭
     */
    boolean wechatStatus();
}
