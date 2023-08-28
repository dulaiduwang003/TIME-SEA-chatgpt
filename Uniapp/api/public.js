// 引用网络请求中间件
import request from './../utils/request';

/**
 *    获取公告
 */
export function getAnnouncementData() {
    return request({
        url: '/public/get/announcement',
        method: 'GET'
    })
}


/**
 *    获取状态
 */
export function getWechatAppStatus() {
    return request({
        url: '/public/get/wechat/status',
        method: 'GET'
    })
}
