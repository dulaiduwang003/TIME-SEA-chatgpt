// 引用网络请求中间件
import request from './../utils/request';

/**
 *    用户签到
 */
export function userSignInReward() {
    return request({
        url: '/inspirit/reward/signIn',
        method: 'POST'
    })
}

/**
 *    视频激励
 */
export function useVideoReward() {
    return request({
        url: '/inspirit/reward/video',
        method: 'POST'
    })
}




/**
 *    使用兑换码
 */
export function useExchangeCode(data) {
    return request({
        url: '/inspirit/exchange/'+data,
        method: 'POST'
    })
}
