import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'DNF 金币回收',
    isLogin: null,
    thisModal: null
  },
  mutations: {
    handleModal (state, name) {
      state.thisModal = name
    }
  },
  actions: {

  }
})
