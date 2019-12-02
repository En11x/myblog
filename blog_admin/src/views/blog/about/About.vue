//关于我的组件
<template>
 <div class='about container'>
     <div class='about-content'>
         <div class='content-header'>
             <h1 class='title'>关于我</h1>
             <div class='desc'>
                 <p>前端 —— 我一直在路上</p>
             </div>
         </div>
         <div class='content-body'>
             <p> 为什么学前端——如果能靠兴趣挣钱，我为什么不做的更好！</p>
         </div>
     </div>
     <div class='about-comments'>
         <Comments />
     </div>
 </div>
</template>

<script>
import Comments from '@/components/comments/Comments'
 export default {
   data () {
     return {

     }
   },
   components: {
       Comments
   }
 }
</script>

<style lang='stylus' scoped>
.about
    animation show 0.8s 
    .content-header
        .title
            text-align center
            font-size 26px
            font-weight 400
            margin-bottom 10px
        .desc
            margin-bottom 60px
            text-align center
            margin-top 5px
            color #999
            font-size 12px
</style>
