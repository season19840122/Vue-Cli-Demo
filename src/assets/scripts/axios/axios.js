import axios from 'axios'
import config from './config'
// import qs from "qs";
// import Cookies from "js-cookie";
import router from '@/router'
// 使用 vuex 做全局 loading 时使用
import store from '@/store'

export default function $axios (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
      headers: {},
      transformResponse: [function (data) {
        return data
      }]
    })

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        /* let token = Cookies.get("markToken");
        // 1. 请求开始的时候可以结合 vuex 开启全屏 loading 动画
        // console.log(store.state.loading)
        // console.log('准备发送请求...')
        // 2. 带上token
        if (token) {
          config.headers.accessToken = token;
        } else {
          // 重定向到登录页面
          router.push("/login");
        }
        // 3. 根据请求方法，序列化传来的参数，根据后端需求是否序列化
        if (config.method === "post") {
          if (
            config.data.__proto__ === FormData.prototype ||
            config.url.endsWith("path") ||
            config.url.endsWith("mark") ||
            config.url.endsWith("patchs")
          ) {
          } else {
            config.data = qs.stringify(config.data);
          }
        } */
        config.headers = {
          // 'Content-Type': 'application/x-www-form-urlencoded',
          // 'X-Requested-With': 'XMLHttpRequest',
          // 'Content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
        // 判断 token
        if (store.state.token) {
          config.headers.Authorization = `${store.state.token}`
        }
        return config
      },

      error => {
        // 请求错误时
        console.log('request:', error)
        // 1. 判断请求超时
        if (
          error.code === 'ECONNABORTED' &&
          error.message.indexOf('timeout') !== -1
        ) {
          console.log('timeout 请求超时')
          // return service.request(originalRequest);//再重复请求一次
        }
        // 2. 需要重定向到错误页面
        const errorInfo = error.response
        console.log(errorInfo)
        if (errorInfo) {
          // error = errorInfo.data  //页面那边 catch 的时候就能拿到详细的错误信息,看最下边的 Promise.reject
          const errorStatus = errorInfo.status // 404 403 500 ...
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error) // 在调用的那边可以拿到( catch )你想返回的错误信息
      }
    )

    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data
        /**
         * 返回是 JSON 对象时按 JSON 格式去解析
         * 否则，直接返回 data 值
         * 有个小问题，当是 '123', '{}', 'true', 'foo', '[1, 5, "false"]', 'null'。JSON.parse 还是不报错
         *  */
        try {
          // IE9 时 response.data 是 undefined，因此需要使用 response.request.responseText( Stringify 后的字符串)
          if (response.data === undefined) {
            data = JSON.parse(response.request.responseText)
          } else {
            data = JSON.parse(response.data)
          }
        } catch (e) {
          return response.data
        }

        // 根据返回的 code 值来做不同的处理
        switch (data.rc) {
          case 1:
            console.log(data.desc)
            break
          // case 0:
          //   // store.commit("changeState");
          // // console.log('登录成功')
          // default:
        }
        // 若不是正确的返回 code，且已经登录，就抛出错误
        // const err = new Error(data.desc)
        // err.data = data
        // err.response = response
        // throw err

        return data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              /*
                返回 401 表示前端的 token 已失效
                当然，你也可以和后端也定其他的方式来表示 token 失效
                需要前端清除 Vuex 中的 token，页面跳转到登陆页
              */
              // store.commit(types.LOGOUT)
              router.replace({
                path: '/',
                query: {
                  redirect: router.currentRoute.fullPath
                }
              })
              err.message = '未授权，请登录'
              break
            case 403:
              err.message = '拒绝访问'
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              err.message = '服务器内部错误'
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP 版本不受支持'
              break
            default:
          }
        }
        console.error(err)
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options)
      .then(res => {
        resolve(res)
        return false
      })
      .catch(error => {
        reject(error)
      })
  })
}
