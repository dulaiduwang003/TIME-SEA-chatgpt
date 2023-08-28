const TokenKey = 'token';

const UserKey = 'user';

const ChatKey = 'chat';

const AnnouncementKey = 'announcement';

const historyKey = 'history'


const nerveKey = 'nerve'

const bingKey = 'bing'

const claudeKey = 'claude'

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
export function removeChat() {
    return uni.removeStorageSync(ChatKey)
}

//设置历史
export function getHistory(data) {
    return uni.getStorageSync(historyKey)
}

//设置历史
export function setHistory(data) {
    return uni.setStorageSync(historyKey, data)
}

//移除历史
export function removeHistory() {
    return uni.removeStorageSync(historyKey)
}


//设置历史
export function getNerve(data) {
    return uni.getStorageSync(nerveKey)
}

//设置历史
export function setNerve(data) {
    return uni.setStorageSync(nerveKey, data)
}

//移除历史
export function removeNerve() {
    return uni.removeStorageSync(nerveKey)
}


//设置历史
export function getBing(data) {
    return uni.getStorageSync(bingKey)
}

//设置历史
export function setBing(data) {
    return uni.setStorageSync(bingKey, data)
}

//移除历史
export function removeBing() {
    return uni.removeStorageSync(bingKey)
}

export function getClaude(data) {
    return uni.getStorageSync(claudeKey)
}

//设置历史
export function setClaude(data) {
    return uni.setStorageSync(claudeKey, data)
}

//移除历史
export function removeClaude() {
    return uni.removeStorageSync(claudeKey)
}
