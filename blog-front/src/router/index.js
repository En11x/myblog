import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage";
import Home from "@/pages/Home.vue";
import About from "@/pages/AboutMe";
import Archive from "@/pages/Archive";
import CommentPage from '@/pages/CommentPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/welcome",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path:"/archive",
      name:'Archive',
      component:Archive
    },
    {
      path:"/liuyan",
      name:'liuyan',
      component:CommentPage
    }
  ]
});
