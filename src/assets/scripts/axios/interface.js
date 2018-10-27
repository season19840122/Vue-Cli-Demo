import axios from './axios'

/**
 * 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */

// 图形验证码
const signcodeCommon = data => {
  return axios({
    method: 'post',
    url: '/signcodeCommon/get',
    params: data
  })
}

// 登录
const phoneLogin = data => {
  return axios({
    // url: `/api/phoneLogin.json?${data}`,
    method: 'post',
    // url: `/api/phoneLogin.json`,
    url: `/api/phoneLogin`,
    params: data
  })
}

// 下发短信验证码
const sendPhoneCode = data => {
  return axios({
    method: 'post',
    url: `/sendPhoneCode`,
    params: data
  })
}

// 获取第三方区服
const getServers = () => {
  return axios({
    method: 'get',
    url: `/mock/getServers.json`
  })
}

// 获取单价
const qryUnitPrice = data => {
  return axios({
    method: 'post',
    url: `/goldOrder/qryUnitPrice`,
    params: data
  })
}

// 订单管理
const orderManager = data => {
  return axios({
    method: 'post',
    url: `/goldOrder/orderManager`,
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
