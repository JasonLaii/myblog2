import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  linkActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "cover",
      component: () => import("../views/cover.vue")
    },{
      path: '/index',
      name: 'index',
      component: ()=> import('../views/index.vue')
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("../components/signin.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../components/signup.vue")
    },
    {
      path: "/myinfo",
      name: "myinfo",
      component: () => import("../views/myinfo.vue")
    },{
      path: "/article-detail",
      name: "article-detail",
      component: () => import("../views/article-detail.vue")
    },{
      path: '/index-box',
      name: 'index-box',
      component:()=> import('../components/index-box.vue')
    }
  ]
});