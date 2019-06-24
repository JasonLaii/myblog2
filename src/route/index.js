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
    //主页
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
          path: "/posts/:articleId",
          name: "article-detail",
          component: () => import("../views/article-detail.vue")
        },
        {
          path: "/posts",
          name: "upload-article",
          component: () => import("../components/upload-article.vue")
        },
        {
          path: "/myinfo",
          name: "myinfo",
          component: () => import("../views/myinfo.vue")
        },
        {
          path: "signup",
          name: "sub-signup",
          component: () => import("../components/signup.vue")
        },
        {
          path: "signin",
          name: "sub-signin",
          component: () => import("../components/signin.vue")
        }
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
