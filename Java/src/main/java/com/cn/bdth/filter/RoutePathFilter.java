package com.cn.bdth.filter;

import cn.dev33.satoken.context.SaHolder;
import cn.dev33.satoken.filter.SaServletFilter;
import cn.dev33.satoken.router.SaRouter;
import cn.dev33.satoken.stp.StpUtil;
import com.cn.bdth.constants.user.AuthConstant;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.msg.Result;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;

/**
 * 路由拦截器
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Configuration
@SuppressWarnings("all")
public class RoutePathFilter {


    @Bean
    public SaServletFilter getSaServletFilter() {
        return new SaServletFilter()
                .addInclude("/**").addExclude("/favicon.ico")
                .setAuth(obj -> {
                    SaRouter.match("/**")
                            .notMatch(
                                    "/auth/**",
                                    "/gpt/**",
                                    "/public/**",
                                    "/gpt-web/**",
                                    "/bing/**",
                                    "/claude/**",
                                    "/personality/**"
                            )
                            .check(r -> StpUtil.checkLogin());
                    SaRouter.match("/admin/**", r -> StpUtil.checkRole(AuthConstant.ADMIN));
                }).setError(e -> Result.error(ExceptionMessages.TOKEN_LAPSE, 401))
                .setBeforeAuth(r -> {
                    SaHolder.getResponse()
                            .setHeader("Access-Control-Allow-Origin", "*")
                            .setHeader("Access-Control-Allow-Methods", "*")
                            .setHeader("Access-Control-Max-Age", "3600")
                            .setHeader("Access-Control-Allow-Headers", "*")
                            .setServer("Zeus");
                    if (SaHolder.getRequest().getMethod().equals(HttpMethod.OPTIONS.toString())) {
                        SaRouter.back();
                    }

                });
    }
}
