import axios from 'axios'
// let loadingInstance = null // 加载全局的loading
//公共baseURL
//正式环境：https://xsad.lkkjjt.com/    测试环境：http://192.168.0.77:9466/
//引入全局消息提示
import {message} from 'ant-design-vue';

const baseURL:string = process.env.NODE_ENV === 'production' ? 'https://renjie.wang/api': 'http://www.o2o.me:80' //根据自己配置的反向代理去设置不同环境的baeUrl;
const instance = axios.create({ //创建axios实例，在这里可以设置请求的默认配置
    timeout: 15000, // 设置超时时间12s
    baseURL,
    headers:{
      "content-Type":'application/json;charset=utf-8',
    },

})

//枚举http状态码
let httpCode = { //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
    400: '(400)请求参数错误',
    401: '(401)权限不足, 请重新登录',
    403: '(403)服务器拒绝本次访问',
    404: '参数错误或资源未找到',
    500: '(500)内部服务器错误',
    501: '(501)服务器不支持该请求中使用的方法',
    502: '(502)网关错误',
    504: '(504)网关超时'
}



/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    (config.headers!)['token'] = localStorage.getItem('token') || '';
    return config;
})


/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
        const code:number=response.data?.code;
        if (code === 200) { // 响应结果里的status: 200是我与后台的约定
            return Promise.resolve(response.data)
        } else {
            message.error(response.data.msg);
            return Promise.reject(response.data.msg);
        }


},error=>{
    // loadingInstance.close()
    if (error.response) {
        /**
         * 在这里：可以根据业务需求可以在请求失败后做什么。
         * 根据请求失败的http状态码去给用户相应的提示
         */
        let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message;
        message.error(tips);
        return Promise.reject(error)
    } else {
        message.error( '请求失败');
        return Promise.reject(new Error('请求失败'))
    }

})

export default instance;