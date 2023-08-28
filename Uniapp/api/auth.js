// 引用网络请求中间件
import request from './../utils/request';

/**
 *    登陆请求
 */
export function wechatLogin(data) {
    return request({
        url: '/auth/wechat/login',
        method: 'POST',
        data
    })
}


/**
 *    确认授权登录
 */
export function wechatAuthQrCodeLogin(data) {
    return request({
        url: '/auth/wechat/code/login',
        method: 'POST',
        data
    })
}

/**
 * 小程序退出登录
 * @returns {Promise | Promise<unknown>}
 */
export function wechatLoginOut() {
    return request({
        url: '/auth/wechat/logout',
        method: 'POST'
    })
}

