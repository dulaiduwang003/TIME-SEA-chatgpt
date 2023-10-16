import request from '@/utils/YSideRequest'

/**
 *    CN类型查询
 */
export function GetSdControlNetType() {
    return request({
        url: '/drawing/sd/get/controlNet/type',
        method: 'GET'
    })
}

/**
 *    CN文本内嵌图
 */
export function SdTextControlNetDraught(data) {
    return request({
        url: '/drawing/sd/text/controlNet/draught/',
        method: 'POST',
        data
    })
}

/**
 *    CN图片内嵌图
 */
export function SdImageControlNetDraught(data) {
    return request({
        url: '/drawing/sd/image/controlNet/draught/',
        method: 'POST',
        data
    })
}
