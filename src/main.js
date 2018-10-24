import 'ant-design-vue/dist/antd.css'
import 'styles/base.scss'
import 'styles/common.scss'
// 为了支持 ES7 的 async/await
import '@babel/polyfill'
import $ from 'jquery'
import Vue from 'vue'
import 'es6-promise/auto'
import Antd from 'ant-design-vue'
import Paginate from 'vuejs-paginate'
import App from './App.vue'
import router from './router'
import store from './store'
// 独立成一个文件，或者放在 common 里
import axios from 'scripts/axios/interface'
import common from 'scripts/common'
import 'scripts/vue-filter'

Vue.config.productionTip = false
Vue.use(Antd)

// Auto polyfill，按照 vuex 的说法只需要引入即可 import 'es6-promise/auto'
// 官方没有 ES6 的写法，只有 require('es6-promise').polyfill()
// promise.polyfill()
Vue.config.productionTip = false
// 初始化分页组件
Vue.component('paginate', Paginate)

// 全局挂载
window.$ = $
window.axios = axios
window.common = common
// console.log(common)

// 方法二：将 axios 挂载到 prototype 上，在组件中可以直接使用 this.axios 访问
// Vue.prototype.axios = apiList;

new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
