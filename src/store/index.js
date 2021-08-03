import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberOne:10
  },
  mutations: {
    setNumberOne(state,num){
      state.numberOne = num;
    }
  },
  getters:{
    getNumberOne(state){
      return state.numberOne;
    }
  },
  actions: {
  },
  modules: {
  }
})
