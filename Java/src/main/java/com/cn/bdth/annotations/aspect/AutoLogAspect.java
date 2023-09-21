package com.cn.bdth.annotations.aspect;

import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.PropertyFilter;
import com.cn.bdth.annotations.note.AutoLog;
import com.cn.bdth.constants.CommonConstant;
import com.cn.bdth.dto.DrawingSdImage2TaskDto;
import com.cn.bdth.dto.ImageAudioSynthesisTaskDto;
import com.cn.bdth.entity.SysLog;
import com.cn.bdth.mapper.SysLogMapper;
import com.cn.bdth.utils.IpUtils;
import com.cn.bdth.utils.SpringContextUtil;
import com.cn.bdth.utils.UserUtils;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.web.multipart.MultipartFile;

import java.lang.reflect.Method;
import java.lang.reflect.Parameter;

/**
 * 系统日志
 *
 * @author yzq
 * @date 2023/08/21 17:44
 */

@Aspect
@Component
@RequiredArgsConstructor
@Slf4j
public class AutoLogAspect {
    private final SysLogMapper sysLogMapper;

    @Pointcut("@annotation(com.cn.bdth.annotations.note.AutoLog)")
    public void logPointCut() {

    }

    @Around("logPointCut()")
    public Object around(ProceedingJoinPoint point) throws Throwable {
        long beginTime = System.currentTimeMillis();

        Object result = point.proceed();

        long time = System.currentTimeMillis() - beginTime;
        try {
            MethodSignature signature = (MethodSignature) point.getSignature();
            Method method = signature.getMethod();

            AutoLog autoLog = method.getAnnotation(AutoLog.class);

            if (null != autoLog) {
                SysLog sysLog = new SysLog();
                sysLog.setCostTime(time);
                sysLog.setLogContent(autoLog.value());

                String className = point.getTarget().getClass().getName();
                String methodName = signature.getName();
                sysLog.setMethod(className + "." + methodName);

                HttpServletRequest request = SpringContextUtil.getHttpServletRequest();
                sysLog.setRequestParam(getRequestParams(request, point));

                sysLog.setIp(IpUtils.getIpAddr(request));


                final Long currentLoginId = UserUtils.getCurrentLoginId();
                sysLog.setUserId(currentLoginId);

                sysLogMapper.insert(sysLog);
            }
        } catch (Exception e) {
            log.error("日志记录错误: {}", ExceptionUtils.getStackTrace(e));
        }

        return result;
    }

    /**
     * @param request:   request
     * @param joinPoint: joinPoint
     * @Description: 获取请求参数
     * @author: scott
     * @date: 2020/4/16 0:10
     * @Return: java.lang.String
     */
    private String getRequestParams(HttpServletRequest request, JoinPoint joinPoint) {
        String httpMethod = request.getMethod();
        String params = "";
        if (CommonConstant.HTTP_POST.equals(httpMethod) || CommonConstant.HTTP_PUT.equals(httpMethod) || CommonConstant.HTTP_PATCH.equals(httpMethod)) {
            Object[] paramsArray = joinPoint.getArgs();
            // java.lang.IllegalStateException: It is illegal to call this method if the current request is not in asynchronous mode (i.e. isAsyncStarted() returns false)
            //  https://my.oschina.net/mengzhang6/blog/2395893
            Object[] arguments = new Object[paramsArray.length];
            for (int i = 0; i < paramsArray.length; i++) {
                if (paramsArray[i] instanceof BindingResult || paramsArray[i] instanceof ServletRequest
                        || paramsArray[i] instanceof ServletResponse || paramsArray[i] instanceof MultipartFile
                        || paramsArray[i] instanceof DrawingSdImage2TaskDto
                        || paramsArray[i] instanceof ImageAudioSynthesisTaskDto) {
                    //ServletRequest不能序列化，从入参里排除，否则报异常：java.lang.IllegalStateException: It is illegal to call this method if the current request is not in asynchronous mode (i.e. isAsyncStarted() returns false)
                    //ServletResponse不能序列化 从入参里排除，否则报异常：java.lang.IllegalStateException: getOutputStream() has already been called for this response
                    continue;
                }
                arguments[i] = paramsArray[i];
            }
            //update-begin-author:taoyan date:20200724 for:日志数据太长的直接过滤掉
            PropertyFilter profilter = (o, name, value) -> {
                int length = 500;
                if (value != null && value.toString().length() > length) {
                    return false;
                }
                return true;
            };
            params = JSONObject.toJSONString(arguments, profilter);
        } else {
            MethodSignature signature = (MethodSignature) joinPoint.getSignature();
            Method method = signature.getMethod();
            // 请求的方法参数值
            Object[] args = joinPoint.getArgs();
            // 请求的方法参数名称
//            LocalVariableTableParameterNameDiscoverer u = new LocalVariableTableParameterNameDiscoverer();
//            String[] paramNames = u.getParameterNames(method);
            Parameter[] paramNames = method.getParameters();

            if (args != null && paramNames != null) {
                for (int i = 0; i < args.length; i++) {
                    params += "  " + paramNames[i].getName() + ": " + args[i];
                }
            }
        }
        return params;
    }

}
