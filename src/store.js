import Vue from 'vue'
import Vuex from 'vuex'
import stores from 'scripts/stores'

Vue.use(Vuex)
var app = new Vue({})

export default new Vuex.Store({
  state: {
    title: 'DNF 金币回收',
    token: stores.get('user') || null,
    loginInfo: stores.get('user') || {},
    currentModal: null,
    total: '-',
    money: null,
    canJump: false,
    orders: stores.get('orders') || {},
    withdraw: stores.get('withdraw') || {},
    alipay: stores.get('alipay') || {},
    details: [],
    page: {}
  },
  mutations: {
    handleModal (state, name) {
      state.currentModal = name
    },
    handleLogin (state, loginInfo) {
      state.loginInfo = loginInfo
      state.token = loginInfo
      try {
        stores.set('user', loginInfo)
        stores.set('token', loginInfo)
      } catch (error) {
        console.log(error)
      }
    },
    handleExit (state) {
      state.loginInfo = {}
      state.token = null
      try {
        stores.set('user', {})
        stores.set('token', null)
      } catch (error) {
        console.log(error)
      }
    },
    handleGetTotal (state, obj) {
      if (obj.bool) {
        state.total = obj.val
      } else {
        state.money = obj.val
      }
    },
    handleCanJump (state, bool) {
      state.canJump = bool
    },
    handleOrders (state, objOrders) {
      state.orders = objOrders
      try {
        stores.set('orders', objOrders)
      } catch (error) {
        console.log(error)
      }
    },
    handleWithdraw (state, withdraw) {
      state.withdraw = withdraw
      try {
        stores.set('withdraw', withdraw)
      } catch (error) {
        console.log(error)
      }
    },
    handleAlipay (state, alipay) {
      let obj = {}, promiss
      if (alipay) { // 设置
        obj = {
          accountNum: alipay.accountNum,
          accountName: alipay.accountName,
          accountType: '支付宝'
        }
        promiss = axios.reflectAccount(obj)
          .then(res => {
            if (res && res.success) {
              state.alipay = alipay
              app.$message.success('保存成功')
            } else {
              app.$message.error(res.message)
            }
          })
      } else { // 查询
        obj = {
          accountNum: state.loginInfo.tel
        }
        promiss = axios.reflectAccount(obj)
          .then(res => {
            if (res && res.success) {
              state.alipay = res.data
            }
          })
      }

      promiss.then(() => {
        try {
          stores.set('alipay', state.alipay)
        } catch (error) {
          console.log(error)
        }
      })
    },
    handlePage (state, page) {
      state.page = page
    },
    handleDetails (state, details) {
      state.details = details
    }
  },
  actions: {

  }
})
