import Vue from 'vue'
import Vuex from 'vuex'
import actions from './modules/actions'
import mutations from './modules/mutations'
import state from './modules/state'
import getters from './modules/getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})