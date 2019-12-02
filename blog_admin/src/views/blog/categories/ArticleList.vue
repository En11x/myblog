//点击分类和标签之后，显示的文章列表页面
<template>
 <div class='articles'>
     <div class='title'>
         <h1>JS
             <small>分类</small>
         </h1>
     </div>
     <div class='articles-wrap'>
         <ArticleCard2 />
         <ArticleCard2 />
         <ArticleCard2 />
         <ArticleCard2 />
         <ArticleCard2 />
     </div>
 </div>
</template>

<script>
import ArticleCard2 from '@/components/articleCard/ArticleCard2'
 export default {
     name:'ArticleList',
   data () {
     return {

     }
   },
   components: {
       ArticleCard2
   }
 }
</script>

<style lang='stylus' scoped>
.articles
    position relative
    &:after
        content ''
        position absolute
        top 20px
        left 0
        margin-left -2px
        width 4px
        height 100%
        background-color #f5f5f5
        z-index -1
    .title
        position relative
        margin 60px 0
        &:before
            content ''
            position absolute 
            left 0
            top 50%
            margin-left -4px
            margin-top -4px
            width 8px
            height 8px
            background-color #bbb
            border-radius 50%
        h1
            margin 20px 0 10px 20px
            font-size 24px
            line-height 1.5
            small 
                color #bbb
                font-size 70%
 
</style>
