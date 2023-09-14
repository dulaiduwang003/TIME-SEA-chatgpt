import request from '@/utils/BSideRequest'

/**
 *    分页获取模型数据
 */
export function GetSdModelPage(a, b) {
    return request({
        url: '/admin/sd/page/model?pageNum=' + a + '&prompt=' + b,
        method: 'GET'
    })
}

/**
 *    新增模型
 */
export function PutSdModel(data) {
    return request({
        url: '/admin/sd/put/data',
        method: 'POST',
        data
    })
}

/**
 *    删除模型
 */
export function DeleteSdModel(data) {
    return request({
        url: '/admin/sd/delete/'+data,
        method: 'POST'
    })
}


export function SdConnectivity() {
    return request({
        url: '/drawing/sd/connectivity',
        method: 'GET'
    })
}


export function GetDrawingDataResult(data) {
    return request({
        url: '/drawing/image/data/'+data,
        method: 'GET'
    })
}

export function GetDrawingResult(data) {
    return request({
        url: '/drawing/status/'+data,
        method: 'GET'
    })
}

export function DrawingSdTask(data) {
    return request({
        url: '/drawing/sd/drawing/image',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}

/**
 *    设置个性参数GPT
 */
export function PutPersonalityConfig(data) {
    return request({
        url: '/user/personality/put/config',
        method: 'POST',
        data
    })
}

/**
 *    设置个性参数GPT
 */
export function GetPersonalityConfig() {
    return request({
        url: '/user/personality/get/config',
        method: 'GET'
    })
}


/**
 *    获取终端数据
 */
export function GetTerminal() {
    return request({
        url: '/admin/server/get/terminal',
        method: 'GET'
    })
}

/**
 *   更新终端数据
 */
export function PutTerminal(data) {
    return request({
        url: '/admin/server/put/terminal',
        method: 'POST',
        data
    })
}

/**
 *    获取分页用户数据
 */
export function GetUserPage(a, b) {
    return request({
        url: '/admin/user/get/page?pageNum=' + a + '&prompt=' + b,
        method: 'GET'
    })
}


export function GetPublicRandomOps() {
    return request({
        url: '/drawing/random/get/ops',
        method: 'GET'
    })
}

export function GetSdModelList() {
    return request({
        url: '/drawing/sd/get/model',
        method: 'GET'
    })
}


/**
 *    获取订单分页数据
 */
export function getOrdersPage(a, b) {
    return request({
        url: '/admin/orders/page?pageNum=' + a + '&prompt=' + b + '&status=',
        method: 'GET'
    })
}

/**
 *   找回密码
 */
export function RetrieveEmailPassword(data) {
    return request({
        url: '/auth/email/password/back',
        method: 'POST',
        data
    })
}

/**
 *   重载服务器配置
 */
export function GetServerConfig() {
    return request({
        url: '/admin/server/get/config',
        method: 'GET'
    })
}


/**
 * Production exchange code
 * @returns {*}
 */
export function AddRedemptionCode(data) {
    return request({
        url: '/admin/exchange/build',
        method: 'POST',
        data
    })
}

/**
 * Production exchange code
 * @returns {*}
 */
export function DeleteRedemptionCode(data) {
    return request({
        url: '/admin/exchange/delete/' + data,
        method: 'POST'
    })
}


/**
 *   分页获取兑换码
 */
export function GetRedemptionCodePage(a, b) {
    return request({
        url: '/admin/exchange/get/page?pageNum=' + a + '&prompt=' + b,
        method: 'GET'
    })
}

/**
 * Production exchange code
 * @returns {*}
 */
export function DeleteProduct(data) {
    return request({
        url: '/admin/product/delete/' + data,
        method: 'POST'
    })
}

/**
 * Production exchange code
 * @returns {*}
 */
export function AddProduct(data) {
    return request({
        url: '/admin/product/put/data',
        method: 'POST',
        data
    })
}

/**
 *   分页获取商品
 */
export function GetProductPage(a, b) {
    return request({
        url: '/admin/product/get/page?pageNum=' + a + '&prompt=' + b,
        method: 'GET'
    })
}


/**
 *   重载服务器配置
 */
export function PutServerConfig(data) {
    return request({
        url: '/admin/server/put/config',
        method: 'POST',
        data
    })
}


/**
 *    修改用户Ai币
 */
export function UpdateUserInfo(data) {
    return request({
        url: '/admin/user/put/data',
        method: 'POST',
        data
    })
}

/**
 *    获取平台总人数
 */
export function GetUserCount() {
    return request({
        url: '/admin/user/get/count',
        method: 'GET'
    })
}

/**
 *    退出
 */
export function Logout() {
    return request({
        url: '/auth/wechat/logout',
        method: 'POST'
    })
}

/**
 *    获取公告
 */
export function getAnnouncement() {
    return request({
        url: '/public/get/announcement',
        method: 'GET'
    })
}

/**
 *    获取验证码
 */
export function getEmailCode(data) {
    return request({
        url: '/auth/email/code/' + data,
        method: 'GET'
    })
}

/**
 *    注册
 */
export function EmailEnroll(data) {
    return request({
        url: '/auth/email/enroll',
        method: 'POST',
        data
    })
}

/**
 *   邮箱登录
 */
export function EmailLogin(data) {
    return request({
        url: '/auth/email/login',
        method: 'POST',
        data
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
