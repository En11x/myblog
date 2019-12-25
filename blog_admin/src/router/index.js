import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";
Vue.use(Router);

import Home from "@/views/blog/home/Home";
import About from "@/views/blog/about/About";
import Category from "@/views/blog/categories/Category";
import ArticleList from "@/views/blog/categories/ArticleList";
import Archives from "@/views/blog/archives/Archives";
import Search from "@/views/blog/search/Search";

import Login from "@/views/admin/auth/Login";
import adminHome from "@/views/admin/adminHome/adminHome";
import articleList from "@/views/admin/article/articleList";
import articleDeleted from "@/views/admin/article/articleDeleted";
import articleDraft from "@/views/admin/article/articleDraft";
import adminCategory from "@/views/admin/category/categoryTag";
import adminArticleList from "@/views/admin/category/articleList";
import adminComment from "@/views/admin/comment/Comment";

let router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/categories",
      name: "categories",
      component: Category
    },
    {
      path: "/list",
      name: "list",
      component: ArticleList
    },
    {
      path: "/archives",
      name: "archives",
      component: Archives
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },

    //后台管理页面路由
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/admin",
      name: "adminHome",
      component: adminHome,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/admin/article/list",
      name: "articleList",
      meta: {
        requireAuth: true
      },
      component: articleList
    },
    {
      path: "/admin/article/deleted",
      name: "articleDeleted",
      meta: {
        requireAuth: true
      },
      component: articleDeleted
    },
    {
      path: "/admin/article/draft",
      name: "articleDraft",
      meta: {
        requireAuth: true
      },
      component: articleDraft
    },
    {
      path: "/admin/category",
      name: "adminCategory",
      meta: {
        requireAuth: true
      },
      component: adminCategory
    },
    {
      path: "/admin/articlelist",
      name: "adminArticleList",
      meta: {
        requireAuth: true
      },
      component: adminArticleList
    },
    {
      path: "/admin/comment",
      name: "adminComment",
      meta: {
        requireAuth: true
      },
      component: adminComment
    }
  ]
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
      next()
    }
  } else {
    next();
  }
});

export default router;
