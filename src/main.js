import Vue from 'vue'
import App from './App.vue'
import router from './route'
import store from './store'
import axios from 'axios'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router);

// router.beforeEach((to,from,next)=>{

//   if(to.meta.requireAuth){
//     if(localStorage.getItem('user-token')){
//       next()
//     }else{
//       next({
//         path: '/index/signin',
//         query: { redirect: to.fullPath }
//       })
//     }
//   }else{
//     next()
//   }
// })

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
