import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'DNF 金币回收',
    loginInfo: {
      // isLogin: null,
      // nickname: null
    },
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
    },
    handleExit (state) {
      state.loginInfo = {}
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
