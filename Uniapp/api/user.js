// 引用网络请求中间件
import request from './../utils/request';


/**
 *    绑定
 */
export function wechatBindEmail(data) {
    return request({
        url: '/user/wechat/bind',
        method: 'POST',
        data
    })
}


/**
 *    获取当前登录用户信息
 */
export function getCurrentUserInfo() {
    return request({
        url: '/user/current/info',
        method: 'POST'
    })
}

/**
 * 修改用户昵称
 * @returns {Promise<unknown>}
 */
export function uploadName(data) {
    return request({
        url: '/user/upload/username?userName=' + data,
        method: 'POST'
    })
}

/**
 * 收藏对话
 * @returns {Promise<unknown>}
 */
export function putStarDialogue(data) {
    return request({
        url: '/user/stat/put/data',
        method: 'POST',
        data
    })
}

/**
 * 取消收藏
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function deleteStarDialogue(data) {
    return request({
        url: '/user/star/delete/' + data,
        method: 'POST'
    })
}

/**
 * 获取收藏分页列
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function getStarPage(data) {
    return request({
        url: '/user/star/page?pageNum=' + data,
        method: 'GET'
    })
}

/**
 * 获取收藏分页列
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function getUserStarDetail(data) {
    return request({
        url: '/user/stat/get/data?starId=' + data,
        method: 'GET'
    })
}

/**
 * 获取作品分页列
 * @param data
 * @returns {Promise | Promise<unknown>}
 */
export function getUserOpsPage(data) {
    return request({
        url: '/user/drawing/page?pageNum=' + data,
        method: 'GET'
    })
}
