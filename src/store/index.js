import { createStore } from 'vuex'

export default createStore({
  state :{
      difficult:'easy'
  },
  getters: {
  },
  mutations: {
    gameType(state, value){
      state.difficult=value
    }
  },
  actions: {
  },
  modules: {
  }
})
