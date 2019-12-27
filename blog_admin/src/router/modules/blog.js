const Home = r=>require.ensure([],()=>r(require('@/views/blog/home/Home')),'Home')
const About = r=>require.ensure([],()=>r(require('@/views/blog/about/About')),'About')
const Category = r=>require.ensure([],()=>r(require('@/views/blog/categories/Category')),'Category')
const ArticleList = r=>require.ensure([],()=>r(require('@/views/blog/categories/ArticleList')),'ArticleList')
const Archives = r=>require.ensure([],()=>r(require('@/views/blog/archives/Archives')),'Archives')
const Search = r=>require.ensure([],()=>r(require('@/views/blog/search/Search')),'Search')

export default [
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
]