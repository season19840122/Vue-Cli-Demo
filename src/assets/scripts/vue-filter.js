import Vue from 'vue'

(function () {
  var filters = {
    num (value) {
      return value.replace(/[^\d]/g, '')
    }
  }
  
  // 注册所有过滤函数
  Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key])
  })
  
})(Vue)
