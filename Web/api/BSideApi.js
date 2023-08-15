import request from '@/utils/BSideRequest'


/**
 *    邮箱号码登录
 */
export function Logout() {
    return request({
        url: '/auth/wechat/logout',
        method: 'POST'
    })
}

/**
 *    获取用户信息
 */
export function GetUserInfo() {
    return request({
        url: '/user/current/info',
        method: 'POST'
    })
}

/**
 *    发送消息
 */
export function SendAMessage(data) {
    return request({
        url: '/gpt/ask',
        method: 'POST',
        data
    })
}


/**
 *    获取收藏列表
 */
export function Favorites(data) {
    return request({
        url: '/user/star/get/web',
        method: 'GET',
        data
    })
}

/**
 *    获取商品列表
 */
export function GetProducts() {
    return request({
        url: '/pay/product/list',
        method: 'GET'
    })
}

/**
 *    构建支付宝订单
 */
export function alipayPayQrCode(data) {
    return request({
        url: '/pay/alipay/pay/' + data,
        method: 'POST'
    })
}

/**
 *    支付宝支付状态查询
 */
export function alipayIsSucceed(data) {
    return request({
        url: '/pay/alipay/status/' + data,
        method: 'POST'
    })
}

/**
 *    用户订单PAGE
 */
export function UsersOrdersPage(data) {
    return request({
        url: '/pay/orders/page?pageNum=' + data,
        method: 'GET'
    })
}

/**
 *    使用兑换码
 */
export function UseExchangeCode(data) {
    return request({
        url: '/inspirit/exchange/' + data,
        method: 'POST'
    })
}

/**
 *    添加收藏
 */
export function FavoritesAdd(data) {
    return request({
        url: '/user/stat/put/data',
        method: 'POST',
        data
    })
}

/**
 *    删除收藏
 */
export function FavoritesDel(data) {
    return request({
        url: '/user/star/delete/' + data,
        method: 'POST'
    })
}

/**
 * 获取授权登录二维码
 */
export function GetWechatCode() {
    return request({
        url: '/auth/wechat/get/code',
        method: 'POST'
    })
}

/**
 * 是否登录成功
 */
export function isQrCodeLoginSucceed(data) {
    return request({
        url: '/auth/wechat/code/result?verifyCode=' + data,
        method: 'GET'
    })
}
