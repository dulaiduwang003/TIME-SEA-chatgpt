import axios from 'axios'

// TODO 请求取消令牌列表
export let cancelArr = [];

// TODO 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 6 * 60 * 1000
});

// TODO 请求拦截器
service.interceptors.request.use(config => {
    // TODO 请求头
    config.headers['token'] = localStorage.getItem('token')

    // TODO 添加取消令牌
    config.cancelToken = new axios.CancelToken(cancel => {
        cancelArr.push(cancel)
    })

    return config
}, error => {
    return Promise.reject(error)
});

// TODO 响应拦截器
service.interceptors.response.use(response => {
    const res = response.data;
    if (res.code !== 200) {
        if (res.code === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            location.reload();
        } else {
            throw res.msg
        }
    } else {
        return res.data
    }
}, () => {
    throw 'AI服务调用失败，正在紧急处理，请稍后使用。'
})

export default service
