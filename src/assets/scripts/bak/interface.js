import config from './config'
import axios from './axios'

/** 将所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */
// 环境的切换
var common = {
  env: ''
}

var checkEnv = (function () {
  if (config.baseURL.match('swjoy')) {
    common.env = 'prod'
  }
}())

function getAxios (option) {
  return axios({
    url: common.env === 'prod' ? option.prod : option.url,
    method: option.method || 'get',
    data: option.data || {}
  })
}

// 单独导出
export const query = (option) => {
  return getAxios({
    url: `/index.json`,
    prod: `/index`
  })
}

export const list = (id) => {
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
}

// 默认全部导出
export default {
  query,
  list,
  upload
}
