package com.cn.bdth.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.constants.OperateConstant;
import com.cn.bdth.dto.admin.UserPutDto;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.UserService;
import com.cn.bdth.utils.*;
import com.cn.bdth.vo.UserInfoVo;
import com.cn.bdth.vo.admin.UserDataVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 雨纷纷旧故里草木深
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final AliUploadUtils aliUploadUtils;

    private final UserMapper userMapper;

    private final RedisUtils redisUtils;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public void editUserAvatar(final MultipartFile file) {
        final String uri = aliUploadUtils.uploadFile(file, FileEnum.AVATAR.getDec(), null);
        userMapper.updateById(
                new User().setUserId(UserUtils.getCurrentLoginId())
                        .setAvatar(uri)
        );
    }

    @Override
    public void editUserName(final String username) {
        userMapper.updateById(
                new User().setUserId(UserUtils.getCurrentLoginId())
                        .setUserName(username)
        );
    }


    @Override
    public UserInfoVo getCurrentUserInfo() {

        final User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getUserId, UserUtils.getCurrentLoginId())
                .select(User::getUserName, User::getAvatar, User::getFrequency, User::getOpenId)
        );
        final UserInfoVo userInfoVo = BeanUtils.copyClassProperTies(user, UserInfoVo.class);
        return userInfoVo.setType(UserUtils.getCurrentRole());


    }


    @Override
    public IPage<UserDataVo> getUserPageVo(final int pageNum, final String prompt) {
        return userMapper.selectPage(new Page<>(pageNum, 20), new QueryWrapper<User>()
                .lambda()
                .like(StringUtils.notEmpty(prompt), User::getUserName, prompt)
                .or().like(StringUtils.notEmpty(prompt), User::getOpenId, prompt)
                .select(User::getFrequency, User::getUserName, User::getCreatedTime, User::getUserId)
                .orderByDesc(User::getFrequency)
        ).convert(u -> {
            //设置用户最后功能操作时间
            final Object value = redisUtils.getValue(OperateConstant.USER_CALL_TIME + u.getUserId());
            final UserDataVo userDataVo = new UserDataVo()
                    .setUserId(u.getUserId())
                    .setUserName(u.getUserName())
                    .setFrequency(u.getFrequency())
                    .setCreatedTime(u.getCreatedTime());
            if (value != null) {
                try {
                    Date date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(value.toString());
                    userDataVo.setLastOperationTime(String.valueOf(date.getTime()));
                } catch (ParseException e) {
                    log.error("转化时间戳异常");
                }
            }

            return userDataVo;
        });

    }

    @Override
    public void updateById(final UserPutDto dto) {

        userMapper.updateById(new User().setFrequency(dto.getFrequency()).setUserId(dto.getUserId()));

    }

}
