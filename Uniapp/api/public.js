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

