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
 *    CN内嵌图
 */
export function SdControlNetDraught(data) {
    return request({
        url: '/drawing/sd/text/controlNet/draught/',
        method: 'POST',
        data
    })
}
