package com.cn.bdth.service.impl;

import cn.dev33.satoken.secure.SaSecureUtil;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.cn.bdth.constants.OperateConstant;
import com.cn.bdth.constants.user.PersonalityConstant;
import com.cn.bdth.dto.PersonalityDto;
import com.cn.bdth.dto.admin.UserPutDto;
import com.cn.bdth.entity.Orders;
import com.cn.bdth.entity.Personality;
import com.cn.bdth.entity.Star;
import com.cn.bdth.entity.User;
import com.cn.bdth.enums.FileEnum;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.WeChatBindingException;
import com.cn.bdth.mapper.OrdersMapper;
import com.cn.bdth.mapper.PersonalityMapper;
import com.cn.bdth.mapper.StarMapper;
import com.cn.bdth.mapper.UserMapper;
import com.cn.bdth.service.UserService;
import com.cn.bdth.structure.PersonalityConfigStructure;
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
    private final static String SALT = "HuJiaXin";

    private final StarMapper starMapper;

    private final OrdersMapper ordersMapper;


    @Override
    @Transactional(rollbackFor = Exception.class)
    public void editUserAvatar(final MultipartFile file) {
        final String uri = aliUploadUtils.uploadFile(file, FileEnum.AVATAR.getDec(), null, true);
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
    @Transactional(rollbackFor = Exception.class)
    public void wechatBindEmail(final String email, final String password) {
        //获取当前登录ID
        final Long currentLoginId = UserUtils.getCurrentLoginId();
        final User currentUser = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getUserId, currentLoginId)
        );
        if (currentUser.getEmail() != null) {
            throw new WeChatBindingException(ExceptionMessages.EMAIL_BIND_ERR);
        }

        final String md5 = SaSecureUtil.md5BySalt(password, SALT);
        final User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getEmail, email)
                .eq(User::getPassword, md5)
        );
        if (user == null) {
            throw new WeChatBindingException(ExceptionMessages.EMAIL_LOGIN_PWD_ERR);
        }

        //将收藏归为小程序账号所属
        starMapper.update(new Star().setUserId(currentLoginId), new UpdateWrapper<Star>()
                .lambda().eq(Star::getUserId, user.getUserId())
        );
        //打赏记录
        ordersMapper.update(new Orders().setUserId(currentLoginId), new UpdateWrapper<Orders>()
                .lambda()
                .eq(Orders::getUserId, user.getUserId())
        );
        //删除缓存数据信息
        StpUtil.logout(user.getUserId());
        //删除原有邮箱账号
        userMapper.deleteById(user.getUserId());
        //重新分配小程序账号数据
        userMapper.updateById(
                new User()
                        .setUserId(currentLoginId)
                        .setEmail(email)
                        .setPassword(md5)
                        .setType(user.getType())
                        .setFrequency(user.getFrequency() + currentUser.getFrequency())
        );
    }


    @Override
    public UserInfoVo getCurrentUserInfo() {

        final User user = userMapper.selectOne(new QueryWrapper<User>()
                .lambda()
                .eq(User::getUserId, UserUtils.getCurrentLoginId())
                .select(User::getUserName, User::getAvatar, User::getFrequency, User::getOpenId, User::getType)
        );
        return BeanUtils.copyClassProperTies(user, UserInfoVo.class);

    }

    @Override
    public Long getTotalUsers() {
        return userMapper.selectCount(null);
    }

    @Override
    public IPage<UserDataVo> getUserPageVo(final int pageNum, final String prompt) {
        return userMapper.selectPage(new Page<>(pageNum, 15), new QueryWrapper<User>()
                .lambda()
                .like(StringUtils.notEmpty(prompt), User::getUserName, prompt)
                .or().like(StringUtils.notEmpty(prompt), User::getOpenId, prompt)
                .select(User::getFrequency, User::getUserName, User::getCreatedTime, User::getUserId, User::getEmail)
                .orderByDesc(User::getFrequency)
        ).convert(u -> {
            //设置用户最后功能操作时间
            final Object value = redisUtils.getValue(OperateConstant.USER_CALL_TIME + u.getUserId());
            final UserDataVo userDataVo = new UserDataVo()
                    .setEmail(u.getEmail())
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
