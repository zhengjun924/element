import axios from 'axios';
import router from "../router";
import { Message } from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token');
    // 在发送请求之前做些什么
    if (token) {
        const { headers } = config;
        headers.token = token;
    }
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {

    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }

}, error => {
    if (error.response.status) {
        switch (status) {
            case 12345:
                Message({
                    message: '抱歉，无效令牌。',
                    type: 'error'
                });
                router.replace('/user/login');
                break;
            case 401:
                Message({
                    message: '抱歉，你已登录超时。',
                    type: 'warning'
                });
                break;
            case 403:
                Message({
                    message: '抱歉，你无权访问该页面。',
                    type: 'warning'
                });
                break;
            case 404:
                Message({
                    message: '抱歉，你访问的页面不存在。',
                    type: 'error'
                });
                break;
            case 500:
                Message({
                    message: '抱歉，服务器出错了。',
                    type: 'error'
                });
                break;

            default:
                break;
        }
        return Promise.reject(error.response);
    }
});

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err)
            })
    })
}