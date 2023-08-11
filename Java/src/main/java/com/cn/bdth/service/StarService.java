package com.cn.bdth.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.cn.bdth.dto.StarDialogueDto;
import com.cn.bdth.vo.UserStarDetailVo;
import com.cn.bdth.vo.UserStarVo;

import java.util.List;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface StarService {


    /**
     * 新增收藏
     *
     * @param dto the dto
     * @return the long
     */
    long starDialogue(final StarDialogueDto dto);


    /**
     * 分页获取收藏
     *
     * @param pageNu the page nu
     * @return the user star vo page
     */
    IPage<UserStarVo> getUserStarVoPage(final int pageNu);


    /**
     * 获取指定收藏对话
     *
     * @param id the id
     * @return the user star detail
     */
    UserStarDetailVo getUserStarDetail(final Long id);


    /**
     * 删除对话
     *
     * @param id the id
     */
    void deleteById(final Long id);



    /**
     * 获取我的收藏列
     *
     * @return the user star web
     */
    List<UserStarVo> getUserStarWeb();
}
