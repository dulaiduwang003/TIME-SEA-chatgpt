package com.cn.bdth.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.cn.bdth.dto.admin.UserPutDto;
import com.cn.bdth.vo.UserInfoVo;
import com.cn.bdth.vo.admin.UserDataVo;
import org.springframework.web.multipart.MultipartFile;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
public interface UserService {



    /**
     * 修改用户头像
     *
     * @param file the file
     */
    void editUserAvatar(final MultipartFile file);


    /**
     * 编辑用户名。
     *
     * @param username the username
     */
    void editUserName(final String username);


    /**
     * 获取当前登陆用户信息
     *
     * @return the current user info
     */
    UserInfoVo getCurrentUserInfo();


    /**
     * 绑定邮箱
     */
    void wechatBindEmail(final String email, final String password);


    /**
     * 获取用户数据分页 （可搜索）
     *
     * @param pageNum the page num
     * @param prompt  the prompt
     * @return the user page vo
     */
    IPage<UserDataVo> getUserPageVo(final int pageNum, final String prompt);

    /**
     * 修改用户信息
     *
     * @param dto the dto
     */
    void updateById(final UserPutDto dto);

    /**
     * 获取平台总人数
     */
    Long getTotalUsers();

}
