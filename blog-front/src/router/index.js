import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import Home from '@/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    }
  ]
})
