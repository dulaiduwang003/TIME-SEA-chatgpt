// 引用网络请求中间件
import request from './../utils/request';


export function getSdModelList() {
    return request({
        url: '/drawing/sd/get/model',
        method: 'GET'
    })
}

/**
 *    发布绘图任务
 */
export function addGptDrawingTextTaskQueue(data) {
    return request({
        url: '/drawing/gpt/text',
        method: 'POST',
        data
    })
}

export function addSdtDrawingTask(data) {
    return request({
        url: '/drawing/sd/wechat/image',
        method: 'POST',
        data
    })
}

/**
 *    检查SD绘图是否成功
 */
export function isDrawingSucceed(data) {
    return request({
        url: '/drawing/status/' + data,
        method: 'GET'
    })
}

/**
 *    检查SD服务是否处于运行状态
 */
export function sdConnectivity() {
    return request({
        url: '/drawing/sd/connectivity',
        method: 'GET'
    })
}


/**
 *    获取指定绘图结果
 */
export function getDrawingResult(drawingId) {
    return request({
        url: '/drawing/image/data/' + drawingId,
        method: 'GET'
    })
}

/**
 *    获取我的创意或者公共作品
 */
export function getDrawingOpsResult(pageNum, isPublic) {
    return request({
        url: '/drawing/image/page?pageNum=' + pageNum + '&isPublic=' + isPublic,
        method: 'GET'
    })
}


/**
 * 删除作品
 * @returns {Promise<unknown>}
 */
export function deleteDrawingById(id) {
    return request({
        url: '/drawing/image/delete/' + id,
        method: 'POST'
    })
}

