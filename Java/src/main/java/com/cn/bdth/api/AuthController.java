package com.cn.bdth.api;

import cn.hutool.core.lang.Validator;
import cn.hutool.core.util.RandomUtil;
import com.alibaba.fastjson.JSONObject;
import com.aliyuncs.exceptions.ClientException;
import com.cn.bdth.config.UserInspiritDefaultConfig;
import com.cn.bdth.constants.CommonConstant;
import com.cn.bdth.dto.EmailCodeDto;
import com.cn.bdth.dto.EmailLoginDto;
import com.cn.bdth.dto.MobileCodeDto;
import com.cn.bdth.dto.MobileLoginDto;
import com.cn.bdth.dto.WeChatAuthLoginDto;
import com.cn.bdth.dto.WeChatAuthQrCodeLoginDto;
import com.cn.bdth.entity.SysLog;
import com.cn.bdth.exceptions.EmailBackException;
import com.cn.bdth.exceptions.ExceptionMessages;
import com.cn.bdth.exceptions.LoginPasswordException;
import com.cn.bdth.exceptions.RegistrationException;
import com.cn.bdth.exceptions.WechatException;
import com.cn.bdth.mapper.SysLogMapper;
import com.cn.bdth.msg.Result;
import com.cn.bdth.service.AuthService;
import com.cn.bdth.utils.IpUtils;
import com.cn.bdth.utils.Md5Util;
import com.cn.bdth.utils.RandImageUtil;
import com.cn.bdth.utils.RedisUtils;
import com.cn.bdth.utils.StringUtils;
import com.cn.bdth.utils.UserUtils;
import com.cn.bdth.utils.sms.DySmsEnum;
import com.cn.bdth.utils.sms.DySmsHelper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * 登录授权接口
 *
 * @author 时间海 @github dulaiduwang003
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {


    private final AuthService authService;
    private final SysLogMapper sysLogMapper;
    private final RedisUtils redisUtils;
    private final UserInspiritDefaultConfig userInspiritDefaultConfig;

    /**
     * 获取注册验证码
     *
     * @param email 邮箱
     * @return the result
     */
    @GetMapping(value = "/email/code/{email}", name = "网页获取邮箱码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getEmailLoginCode(@PathVariable final String email) {
        try {
            authService.getEmailEnrollCode(email);
            return Result.ok();
        } catch (RegistrationException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 找回密码
     *
     * @param dto 邮箱
     * @return the result
     */
    @PostMapping(value = "/email/password/back", name = "找回密码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result RetrieveEmailPassword(@RequestBody @Validated final EmailCodeDto dto) {
        try {
            authService.emailBack(dto);
            return Result.ok();
        } catch (EmailBackException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 注册账号
     *
     * @param dto dto
     * @return the result
     */
    @PostMapping(value = "/email/enroll", name = "注册账号", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result emailEnroll(@RequestBody @Validated final EmailCodeDto dto) {
        try {
            authService.emailEnroll(dto);
            return Result.ok();
        } catch (RegistrationException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 邮箱登录
     *
     * @param dto dto
     * @return the result
     */
    @PostMapping(value = "/email/login", name = "登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result emailLogin(HttpServletRequest request, @RequestBody @Validated final EmailLoginDto dto) {
        try {
            String result = authService.emailLogin(dto);

            final Long currentLoginId = UserUtils.getCurrentLoginId();
            //保存登录日志
            sysLogMapper.insert(new SysLog()
                    .setIp(IpUtils.getIpAddr(request))
                    .setMethod("com.cn.bdth.api.AuthController.emailLogin")
                    .setLogContent("邮箱登录")
                    .setUserId(currentLoginId));

            return Result.data(result);
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 微信小程序授权登录
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/wechat/login", name = "微信授权登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatAuthLogin(HttpServletRequest request, @RequestBody @Validated WeChatAuthLoginDto dto) {
        try {
            String result = authService.wechatAuthorizedLogin(dto.getCode());

            final Long currentLoginId = UserUtils.getCurrentLoginId();
            //保存登录日志
            sysLogMapper.insert(new SysLog()
                    .setIp(IpUtils.getIpAddr(request))
                    .setMethod("com.cn.bdth.api.AuthController.wechatAuthLogin")
                    .setLogContent("微信授权登录")
                    .setUserId(currentLoginId));

            return Result.data(result);
        } catch (LoginPasswordException | WechatException e) {
            return Result.error(e.getMessage());
        }
    }


    /**
     * 获取扫码登录二维码
     *
     * @return the WeChat code
     */
    @PostMapping(value = "/wechat/get/code", name = "获取微信登录二维码", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result getWechatQcCode() {
        try {
            return Result.data(authService.getWechatQrCode());
        } catch (WechatException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }


    /**
     * 扫码结果 是否登录成功
     *
     * @param verifyCode the verify code
     * @return the result
     */
    @GetMapping(value = "/wechat/code/result", name = "扫码结果", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result isQrCodeLoginSucceed(final String verifyCode) {
        try {
            return Result.data(authService.isQrcodeLoginSucceed(verifyCode));
        } catch (WechatException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }

    /**
     * 扫码确认授权登录
     *
     * @param dto the dto
     * @return the result
     */
    @PostMapping(value = "/wechat/code/login", name = "确认授权登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatAuthQrCodeLogin(@RequestBody @Validated final WeChatAuthQrCodeLoginDto dto) {
        try {
            authService.wechatAuthorizedLogin(dto.getVerifyCode(), dto.getCode());
            return Result.ok();
        } catch (WechatException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }


    /**
     * 退出登录
     *
     * @return the result
     */
    @PostMapping(value = "/wechat/logout", name = "退出登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result wechatLogout() {
        try {
            authService.logout();
            return Result.ok();
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage(), e.getCode());
        }
    }

    /**
     * 发送手机短信验证码
     *
     * @param mobileCodeDto
     * @return
     */
    @PostMapping("/mobile/create-code")
    public Result createMobileCode(HttpServletRequest request, @RequestBody MobileCodeDto mobileCodeDto) {
        if (!Validator.isMobile(mobileCodeDto.getMobile())) {
            return Result.error(ExceptionMessages.NOT_MOBILE);
        }
        // 需要加一个随机码 + 图形验证码的校验功能 随机码是为了保持唯一性，图形验证码是为了保证人工操作
        String checkKey = mobileCodeDto.getCheckKey(); //随机码
        String captcha = mobileCodeDto.getCaptcha();   //验证码
        if (StringUtils.isBlank(captcha)) {
            return Result.error("验证码无效");
        }
        String lowerCaseCaptcha = captcha.toLowerCase();
        String realKey = Md5Util.md5Encode(lowerCaseCaptcha + checkKey, "utf-8");
        Object checkCode = redisUtils.getValue(realKey);
        if (checkCode == null || !checkCode.equals(lowerCaseCaptcha)) {
            return Result.error("验证码错误");
        }

        String mobile = mobileCodeDto.getMobile();
        String redisKey = String.format(CommonConstant.PHONE_REDIS_KEY_PRE, mobile);
        if (redisUtils.hasKey(redisKey)) {
            return Result.error("验证码30分钟内，仍然有效！");
        }
        //增加ip限制；--同一个ip每天只能发送30次验证码
        String ip = IpUtils.getIpAddr(request);
        if(StringUtils.isNotBlank(ip)) {
            String ipRedisKey = String.format(CommonConstant.PHONE_REDIS_KEY_MSG_IP_LIMIT, ip);
            if (redisUtils.hasKey(ipRedisKey)) {
                redisUtils.increment(ipRedisKey, 1);
            } else {
                redisUtils.setValueTimeout(ipRedisKey, 1, 24 * 3600);
            }
            if (Integer.parseInt(String.valueOf(redisUtils.getValue(ipRedisKey))) >= 30) {
                throw new RuntimeException("已经超出每天短信数量限制！");
            }
        }

        //随机数
        String captchaMobileCode = RandomUtil.randomNumbers(6);
        JSONObject obj = new JSONObject();
        obj.put("code", captchaMobileCode);
        try {
            //闪速码的key和密钥
            DySmsHelper.setAccessKeyId(userInspiritDefaultConfig.getShansumaAppId());
            DySmsHelper.setAccessKeySecret(userInspiritDefaultConfig.getShansumaSecretKey());
            //登录模板
            boolean b = DySmsHelper.sendSms(mobile, obj, DySmsEnum.LOGIN_TEMPLATE_CODE, redisUtils);

            if (!b) {
                return Result.error("短信验证码发送失败,请稍后重试");
            }
            redisUtils.setValueTimeout(redisKey, captchaMobileCode, 30 * 60);
            return Result.ok();
        } catch (ClientException e) {
            log.error(ExceptionUtils.getStackTrace(e));
            return Result.error("短信接口未配置，请联系管理员！");
        }
    }

    /**
     * 手机 验证码 登录
     *
     * @param dto dto
     * @return the result
     */
    @PostMapping(value = "/mobile/login", name = "登录", produces = MediaType.APPLICATION_JSON_VALUE)
    public Result mobileLogin(HttpServletRequest request, @RequestBody @Validated final MobileLoginDto dto) {
        // 需要加一个随机码 + 图形验证码的校验功能 随机码是为了保持唯一性，图形验证码是为了保证人工操作
        String checkKey = dto.getCheckKey(); //随机码
        String captcha = dto.getCaptcha();   //验证码
        String lowerCaseCaptcha = captcha.toLowerCase();
        String realKey = Md5Util.md5Encode(lowerCaseCaptcha + checkKey, "utf-8");
        Object checkCode = redisUtils.getValue(realKey);
        if (checkCode == null || !checkCode.equals(lowerCaseCaptcha)) {
            return Result.error("验证码错误");
        }

        try {
            String smsCode = dto.getCode();
            String redisKey = String.format(CommonConstant.PHONE_REDIS_KEY_PRE, dto.getMobile());
            Object code = redisUtils.getValue(redisKey);
            if (!smsCode.equals(code)) {
                return Result.error("手机验证码错误");
            }
            String result = authService.mobileLogin(dto);

            final Long currentLoginId = UserUtils.getCurrentLoginId();
            //保存登录日志
            sysLogMapper.insert(new SysLog()
                    .setIp(IpUtils.getIpAddr(request))
                    .setMethod("com.cn.bdth.api.AuthController.mobileLogin")
                    .setLogContent("手机号登录")
                    .setUserId(currentLoginId));

            return Result.data(result);
        } catch (LoginPasswordException e) {
            return Result.error(e.getMessage());
        }
    }

    /**
     * 获取图形验证码，返回base64的图片
     */
    @GetMapping(value = "/randomImage/{checkKey}")
    public Result randomImage(@PathVariable("checkKey") String checkKey) {
        try {
            //生成验证码
            String captcha = RandomUtil.randomString(CommonConstant.BASE_CHECK_CODES, 4);
            //存到redis中
            String lowerCaseCode = captcha.toLowerCase();

            // 加入密钥作为混淆，避免简单的拼接，被外部利用，用户自定义该密钥即可
            String origin = lowerCaseCode + checkKey;
            String realKey = Md5Util.md5Encode(origin, "utf-8");

            redisUtils.setValueTimeout(realKey, lowerCaseCode, 60);
            log.info("获取验证码，Redis key = {}，checkCode = {}", realKey, captcha);
            //返回前端
            String base64 = RandImageUtil.generate(captcha);
            return Result.data(base64);
        } catch (Exception e) {
            log.error("获取验证码失败: {}", ExceptionUtils.getStackTrace(e));
            return Result.error("获取验证码失败,请检查配置!");
        }
    }

    /**
     * 图形验证码
     *
     * @param sysLoginModel
     * @return
     */
//    @PostMapping(value = "/checkCaptcha")
//    public Result checkCaptcha(@RequestBody SysLoginModel sysLoginModel) {
//        String captcha = sysLoginModel.getCaptcha();
//        String checkKey = sysLoginModel.getCheckKey();
//        if (captcha == null) {
//            return Result.error("验证码无效");
//        }
//        String lowerCaseCaptcha = captcha.toLowerCase();
//        String realKey = Md5Util.md5Encode(lowerCaseCaptcha + checkKey, "utf-8");
//        Object checkCode = redisUtils.getValue(realKey);
//        if (checkCode == null || !checkCode.equals(lowerCaseCaptcha)) {
//            return Result.error("验证码错误");
//        }
//        return Result.ok();
//    }

}
