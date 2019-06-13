import Vue from 'vue'
import Vuex from 'vuex'
import action from './modules/action'
import mutation from './modules/mutation'
import state from './modules/state'
import getter from './modules/getter'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getter,
  mutation,
  action
})