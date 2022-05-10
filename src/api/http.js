// http/index.js
import axios from 'axios';
// import Qs from 'qs';


//创建axios的一个实例 
const service = axios.create({
    // baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
    timeout: 8000, //设置超时
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    }
})

//请求拦截器 
service.interceptors.request.use((config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // const token = window.localStorage.getItem('token');
    // token && (config.headers.Authorization = token)

    // Loading();   //打开loading
    if (config.method.toLowerCase() == "post") {

        if (config.data instanceof FormData) { //文件类,FormData传输
            config.headers['Content-Type'] = 'multipart/form-data'; //修改`Content-Type`

        } else { //非文件类,stringify
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'; //修改`Content-Type`
            // 判断传过来的是不是json格式数据
            let newdata = config.data;
            let isjson = typeof (newdata) == "object" && Object.prototype.toString.call(newdata).toLowerCase() == "[object object]" && !newdata.length;
            if (isjson) {

                // // 方式一、采用URLSearchParams对象传递
                // let postData= new URLSearchParams()
                // for (let key in newdata) {
                //     let dax=newdata[key];
                //     if(typeof newdata[key] == "object"){
                //         dax=JSON.stringify(newdata)
                //     }
                //     postData.append(key,  dax)
                // }
                // config.data = postData;

                // 方式二、拼接字符串的形式传递
                let sstr = '';
                for (let key in newdata) {
                    let dax = newdata[key];
                    if (typeof newdata[key] == "object") {
                        dax = JSON.stringify(newdata)
                    }
                    sstr += '&' + key + '=' + dax;
                }
                if (sstr.substring(0, 1) == '&') {
                    sstr = sstr.substring(1);
                }
                config.data = sstr;

            }

        }

    }

    return config;
}, (error) => {

    return Promise.reject(error);
});

//响应拦截器
service.interceptors.response.use((response) => {
    //响应成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据


    // Loading().close();  //关闭loading

    return response.data;
}, (error) => {
    // console.log(error);
    // Loading().close();   //关闭loading
    //响应错误
    if (error.response && error.response.status) {
        const status = error.response.status
        switch (status) {
            case 400:
                console.log('请求错误');
                break;
            case 401:
                console.log('未授权，请重新登录');
                break;
            case 403:
                console.log("拒绝访问");
                break;
            case 404:
                console.log('请求地址出错');
                break;
            case 408:
                console.log('请求超时');
                break;
            case 500:
                console.log('服务器内部错误!');
                break;
            case 501:
                console.log('服务未实现!');
                break;
            case 502:
                console.log('网关错误!');
                break;
            case 503:
                console.log('服务不可用!');
                break;
            case 504:
                console.log('网关超时!');
                break;
            case 505:
                console.log('HTTP版本不受支持');
                break;
            default:
                console.log('请求失败');
        }
    } else {
        console.log('连接到服务器失败');
    }
    // throw error
    return Promise.reject(error);

});


/*** 方法封装 **********************************/
/**
 * @method post请求
 * @param {string} url 请求接口路由地址
 * @param {any} [data] 接口参数
 * @param {any} [config] 请求头部配置信息
 * @returns AxiosPromise<any>
 */
const post = (url, data, config) => {
    return service.post(url, data, { ...config })
}

/**
 * @method get请求
 * @param {string} url 请求接口路由地址
 * @param {any} [data] 接口参数
 * @param {any} [config] 请求头部配置信息
 * @returns AxiosPromise<any>
 */
const get = (url, data, config) => {
    return service.get(url, {
        params: data,
        ...config
    })
}

/**
 * @method del删除
 * @param {string} url 请求接口路由地址
 * @param {any} [data] 接口参数
 * @param {any} [config] 请求头部配置信息
 * @returns AxiosPromise<any>
 */
const del = (url, data, config) => {
    return service.delete(url, {
        params: data,
        ...config
    })
}
/**
 * @method put请求
 * @param {string} url 请求接口路由地址
 * @param {any} [data] 接口参数
 * @param {any} [config] 请求头部配置信息
 * @returns {AxiosPromise<any>}
 */
const put = (url, data, config) => {
    return service.put(url, data, { ...config })
}

/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} [data]    请求的参数
 * @param {Object} [config]  请求的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 * @example http({method,url,data,config})
 */
const http = ({
    method,
    url,
    data,
    config
}) => {
    method = method.toLowerCase();  //method统一转成小写，方便后面操作
    if (method == 'post') {
        return post(url, data, config)
    } else if (method == 'get') {
        return get(url, data, config)
    } else if (method == 'delete') {
        return del(url, data, config)
    } else if (method == 'put') {
        return put(url, data, config)
    } else {
        console.error('未知的method:' + method)
        return false
    }
}

/**
 * @method axios同时发送多个请求
 * @param {Array} params 请求的函数，数组形式(里面是函数) [get(url, data, config),post(url, data, config)]
 * @returns {AxiosPromise<any>}
 * @example
 * http_all([func1(),func2(val)])
 */
const http_all = (params) => {
    // console.log(params);
    return axios.all(params).then(axios.spread(function (...resList) {
        // console.log(resList)
        return resList
    }))

    // return service.all(params).then(service.spread(function (...resList) {
    //     console.log(resList)
    //     return resList
    // }))
}

export { post, get, del, put, http, http_all }
// export default http

