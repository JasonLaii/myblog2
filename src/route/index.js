import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  linkActiveClass: "active",
  mode: "history",
  routes: [
    {
      path: "/",
      name: "cover",
      component: () => import("../views/cover.vue")
    },
    {
      path: "/index",
      name: "index",
      component: () => import("../views/index.vue"),
      children: [
        {
          path: "/main-part",
          name: "main-part",
          component: () => import("../components/main-part.vue")
        },
        {
          //文章详情
          path: "/article-detail",
          name: "article-detail",
          component: () => import("../views/article-detail.vue")
        },{
          path: "/upload-article",
          name: "upload-article",
          component: ()=> import('../components/upload-article.vue')
        },{
          path: "/myinfo",
          name: "myinfo",
          component: () => import("../views/myinfo.vue")
        },
      ]
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
      path: "/index-box",
      name: "index-box",
      component: () => import("../components/index-box.vue")
    }
  ]
});
