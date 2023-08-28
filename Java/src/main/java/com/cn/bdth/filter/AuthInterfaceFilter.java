package com.cn.bdth.filter;

import cn.dev33.satoken.stp.StpInterface;
import com.cn.bdth.utils.UserUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 权限拦截处理类
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Component
@RequiredArgsConstructor
public class AuthInterfaceFilter implements StpInterface {


    /**
     * 获取当前用户拥有的权限
     *
     * @param o the o
     * @param s the s
     * @return the role list
     */
    @Override
    public List<String> getRoleList(Object o, String s) {
        return List.of(UserUtils.getCurrentRole());
    }

    /**
     * 获取当前用户拥有的权限
     *
     * @param o the o
     * @param s the s
     * @return the permission list
     */
    @Override
    public List<String> getPermissionList(Object o, String s) {
        return null;
    }


}
