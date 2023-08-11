// 引用网络请求中间件
import request from './../utils/request';

/**
 * 获取所有分页列表
 * @returns {Promise<unknown>}
 */
export function getUserPages(pageNum, prompt) {
    return request({
        url: '/admin/user/get/page?pageNum=' + pageNum + '&prompt=' + prompt,
        method: 'GET'
    })
}

/**
 * 获取所有分页列表
 * @returns {Promise<unknown>}
 */
export function getOrdersPages(pageNum, prompt, status) {
    return request({
        url: '/admin/orders/page?pageNum=' + pageNum + '&prompt=' + prompt + '&status=' + status,
        method: 'GET'
    })
}

/**
 * 获取所有产品分页
 * @returns {Promise<unknown>}
 */
export function getProductPages(pageNum, prompt) {
    return request({
        url: '/admin/product/get/page?pageNum=' + pageNum + '&prompt=' + prompt,
        method: 'GET'
    })
}

/**
 * 添加产品
 * @returns {Promise<unknown>}
 */
export function addProduct(data) {
    return request({
        url: '/admin/product/put/data',
        method: 'POST',
        data
    })
}

/**
 * 删除产品
 * @returns {Promise<unknown>}
 */
export function deleteProduct(data) {
    return request({
        url: '/admin/product/delete/'+data,
        method: 'POST'
    })
}


/**
 * 修改用户次数
 * @returns {Promise<unknown>}
 */
export function updateUserById(data) {
    return request({
        url: '/admin/user/put/data',
        method: 'POST',
        data
    })
}


/**
 * 获取所有兑换码分页列表
 * @returns {Promise<unknown>}
 */
export function getExchangeCode(pageNum, prompt) {
    return request({
        url: '/admin/exchange/get/page?pageNum=' + pageNum + '&prompt=' + prompt,
        method: 'GET'
    })
}

/**
 * 根据ID删除兑换码
 * @returns {Promise<unknown>}
 */
export function deleteExchangeCodeById(data) {
    return request({
        url: '/admin/exchange/delete/' + data,
        method: 'POST'
    })
}

/**
 * 洗脑子兑换码
 * @returns {Promise<unknown>}
 */
export function buildExchangeCode(data) {
    return request({
        url: '/admin/exchange/build',
        method: 'POST',
        data
    })
}

/**
 * 获取服务器配置参数
 * @returns {Promise<unknown>}
 */
export function getServerConfig() {
    return request({
        url: '/admin/server/get/config',
        method: 'GET'
    })
}


/**
 * 更新服务器配置参数
 * @returns {Promise<unknown>}
 */
export function putServerConfig(data) {
    return request({
        url: '/admin/server/put/config',
        method: 'POST',
        data
    })
}

/**
 * 获取所有
 * @returns {Promise<unknown>}
 */
export function getDrawingPage(pageNum) {
    return request({
        url: '/admin/drawing/page?pageNum=' + pageNum,
        method: 'GET'
    })
}

/**
 * 更新图片状态
 * @returns {Promise<unknown>}
 */
export function putDrawingStatus(id) {
    return request({
        url: '/admin/drawing/status/' + id,
        method: 'POST'
    })
}

/**
 * 发布公告
 * @returns {Promise<unknown>}
 */
export function putAnnouncement(data) {
    return request({
        url: '/admin/put/announcement',
        method: 'POST',
        data
    })
}
