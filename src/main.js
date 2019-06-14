import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import axios from 'axios'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router);

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
