import 'styles/base.scss'
import 'styles/common.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import promise from 'es6-promise'

// Auto polyfill
// promise.polyfill()
require('es6-promise').polyfill()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
