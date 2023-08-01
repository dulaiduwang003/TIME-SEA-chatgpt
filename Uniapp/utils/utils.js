const TokenKey = 'token';

const UserKey = 'user';

const ChatKey = 'chat';

const AnnouncementKey = 'announcement';


//获取token缓存
export function getToken() {
    return uni.getStorageSync(TokenKey)
}

//设置token缓存
export function setToken(data) {
    return uni.setStorageSync(TokenKey, data)
}

//移除token缓存
export function removeToken() {
    return uni.removeStorageSync(TokenKey)
}

//获取用户信息缓存
export function getUser() {
    return uni.getStorageSync(UserKey)
}

//设置用户信息缓存
export function setUser(data) {
    return uni.setStorageSync(UserKey, data)
}

//移除用户信息缓存
export function removeUser() {
    return uni.removeStorageSync(UserKey)
}

//设置公告
export function setAnnouncement(data) {
    return uni.setStorageSync(AnnouncementKey, data)
}

//移除公告
export function removeAnnouncement(data) {
    return uni.removeStorageSync(AnnouncementKey)
}


//获取公告模板
export function getAnnouncement() {
    return uni.getStorageSync(AnnouncementKey)
}

//获取对话链
export function getChat() {
    return uni.getStorageSync(ChatKey)
}


//设置对话链
export function setChat(data) {
    return uni.setStorageSync(ChatKey, data)
}

//移除对话链
export function removeChat(data) {
    return uni.removeStorageSync(ChatKey)
}


