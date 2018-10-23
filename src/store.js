import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'DNF 金币回收',
    token: stores.get('user') || null,
    loginInfo: stores.get('user') || {},
    currentModal: null,
    total: '-',
    money: null,
    canJump: false
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
    }
  },
  actions: {

  }
})
