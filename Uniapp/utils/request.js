import env from '../utils/env';
import {getToken, removeToken, removeUser} from "@/utils/utils";

function service(options = {}) {
    options.url = `${env.baseUrl}${options.url}`;
    options.timeout = 100000;
    if (getToken()) {
        options.header = {
            'content-type': 'application/json',
            'token': `${getToken()}`
        };
    }
    return new Promise((resolve, reject) => {
        // 发送 HTTP 请求
        uni.request({
            ...options,
            success: function (res) {

                if (res.statusCode === 200) {
                    if (res.data.code === 200) {
                        resolve(res.data.data);
                    } else {
                        //未登录 ? 登陆失效
                        if (res.data.code === 401) {
                            removeToken()
                            removeUser()
                            uni.reLaunch({
                                url: '/pages/master/master?swiperIndex=1'
                            })
                        } else {
                            reject(res.data.msg);
                        }
                    }
                } else {
                    reject('与服务器建立连接失败');
                }
            },
            fail: function () {
                reject('与服务器建立连接失败');
            }
        });
    });
}

export default service;
