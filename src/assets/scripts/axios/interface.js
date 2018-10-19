import axios from './api'

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 单独导出
/* export const list = id => {
  return axios({
    url: `/list${id}`,
    method: 'get'
  })
}

export const upload = data => {
  return axios({
    url: '/upload',
    method: 'post',
    data
  })
} */

// 图形验证码
const signcodeCommon = data => {
  return axios({
    method: 'get',
    url: 'https://gamebox.swjoy.com/signcodeCommon/get',
    params: data
  })
}

// 登录
const phoneLogin = data => {
  return axios({
    // url: `/api/phoneLogin.json?${data}`,
    method: 'get',
    url: `/api/phoneLogin.json`,
    params: data
  })
}

// 下发短信验证码
const sendPhoneCode = data => {
  return axios({
    method: 'get',
    url: `/api/sendPhoneCode.json`,
    params: data
  })
}

// 获取第三方区服
const getServers = () => {
  return axios({
    method: 'get',
    url: `/api/getServers.json`
  })
}

// 下发短信验证码
const qryUnitPrice = data => {
  return axios({
    method: 'get',
    url: `/api/qryUnitPrice.json`,
    params: data
  })
}

// 下发短信验证码
const orderManager = data => {
  return axios({
    method: 'get',
    url: `/api/orderManager.json`,
    params: data
  })
}

// 默认全部导出
export default {
  signcodeCommon,
  phoneLogin,
  sendPhoneCode,
  getServers,
  qryUnitPrice,
  orderManager
}
