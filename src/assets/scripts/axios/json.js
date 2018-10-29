import axios from './axios'

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

// 登录，页面跳直接转，无需 AJAX
// const phoneLogin = data => {
//   return axios({
//     // url: `/mock/phoneLogin.json?${data}`,
//     method: 'get',
//     // url: `/mock/phoneLogin.json`,
//     url: `https://gamebox.swjoy.com/phoneLogin`,
//     params: data
//   })
// }

// 下发短信验证码
const sendPhoneCode = data => {
  return axios({
    method: 'get',
    url: `/mock/sendPhoneCode.json`,
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

// 下发短信验证码
const qryUnitPrice = data => {
  return axios({
    method: 'get',
    url: `/mock/qryUnitPrice.json`,
    params: data
  })
}

// 订单管理
const orderManager = data => {
  return axios({
    method: 'get',
    url: `/mock/orderManager.json`,
    params: data
  })
}

// 获取修改支付宝信息
const reflectAccount = data => {
  return axios({
    method: 'get',
    url: `/mock/reflectAccount.json`,
    params: data
  })
}

// 提交提现
const extractSmt = data => {
  return axios({
    method: 'get',
    url: `/mock/extractSmt.json`,
    params: data
  })
}

// 提交提现
const doOrder = data => {
  return axios({
    method: 'get',
    url: `/mock/doOrder.json`,
    params: data
  })
}

// 默认全部导出
export default {
  signcodeCommon,
  sendPhoneCode,
  getServers,
  qryUnitPrice,
  orderManager,
  reflectAccount,
  extractSmt,
  doOrder
}
