import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Home from '@/views/blog/home/Home'
import About from '@/views/blog/about/About'
import Category from '@/views/blog/categories/Category'
import ArticleList from '@/views/blog/categories/ArticleList'
import Archives from '@/views/blog/archives/Archives'
import Search from '@/views/blog/search/Search'

import Login from '@/views/admin/auth/Login'
import adminHome from '@/views/admin/adminHome/adminHome'
import articleList from '@/views/admin/article/articleList'
import articleDeleted from '@/views/admin/article/articleDeleted'
import articleDraft from '@/views/admin/article/articleDraft'
import adminCategory from '@/views/admin/category/categoryTag'
import adminArticleList from '@/views/admin/category/articleList'
import adminComment from '@/views/admin/comment/Comment'

export default new Router({
  routes: [
    {
        path: '*',
        redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/categories',
		name: 'categories',
		component: Category
    },
    {
		path: '/list',
		name: 'list',
		component: ArticleList
    },
    {
		path: '/archives',
		name: 'archives',
		component: Archives
    },
    {
        path:'/search',
        name:'search',
        component:Search
    },





    {
        path:'/login',
        name:'login',
        component:Login
    },
    {
        path:'/admin',
        name:'adminHome',
        component:adminHome
    },
    {
        path:'/admin/article/list',
        name:'articleList',
        component:articleList
    },
    {
        path:'/admin/article/deleted',
        name:'articleDeleted',
        component:articleDeleted
    },
    {
        path:'/admin/article/draft',
        name:'articleDraft',
        component:articleDraft
    },
    {
        path:'/admin/category',
        name:'adminCategory',
        component:adminCategory
    },
    {
        path:'/admin/articlelist',
        name:'adminArticleList',
        component:adminArticleList
    },
    {
        path:'/admin/comment',
        name:'adminComment',
        component:adminComment
    }
  ]
})
