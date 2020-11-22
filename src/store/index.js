import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    isMock: false,
    configKey: 'prod',
    config: {},
    receiverNick: '',
    receiverPhone: 0
  },
  mutations: {
    // setConfig (state, payload) {
    //   state.isMock = payload
    //   state.configKey = payload ? 'mock' : 'prod'
    // },
    setConfig (state, payload) {
      state.isMock = payload.isMock
      state.configKey = payload.isMock ? 'mock' : 'prod'
      state.receiverNick = payload.receiverNick
      state.receiverPhone = payload.receiverPhone
    }
  }
})

export default store
