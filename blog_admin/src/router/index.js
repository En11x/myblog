import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";

import blog from "./modules/blog";
import admin from "./modules/admin";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.inc(0.2);
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });

Vue.use(Router);

const routes = [...admin, ...blog];

let router = new Router({
  mode: "history",
  routes
});

// 配置路由权限
router.beforeEach((to, from, next) => {
  if (to.fullPath.indexOf("admin") !== -1) {
    store.commit("IS_ADMIN_WRAP", true);
  } else {
    store.commit("IS_ADMIN_WRAP", false);
  }
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限

    if (sessionStorage.getItem("token")) {
      // 判断本地是否存在access_token
      next();
    } else {
      // 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
      //   next("/login");
      next();
    }
    NProgress.start();
  } else {
    NProgress.start();
    next();
  }
});
router.afterEach((to, from) => {
  NProgress.done();
});
export default router;
