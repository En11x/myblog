//图标组件
<template>
 <div class='icon-card' :style='{backgroundColor:backgroundColor}'>
    <span class='icon'>
        <i class='iconfont' :class='icon'></i>
    </span>
    <span class='content'>
        {{topMessage}}
        <p>{{middleMessage}}</p>
        {{bottomMessage}}
    </span>
 </div>
</template>

<script>
 export default {
     name:'iconCard',
     props: ['backgroundColor','icon','topMessage','middleMessage','bottomMessage'],
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='stylus' scoped>

 .icon-card
    position relative
    width calc(20% - 10px)
    height 120px
    border-radius 5px
    margin 5px
    display flex
    justify-content space-between
    align-items center
    cursor pointer
    transition all 0.3s
    &:hover
        box-shadow 0px 0px 5px 3px rgba(38,42,48,.3)
    .icon
        display table
        background-color rgba(255,255,255,.2)
        border-radius 50%
        text-align center
        width 60px
        height 60px
        color #fff
        margin 0 20px
        .iconfont
            display table-cell
            font-size 30px
            line-height 1
            vertical-align middle
    .content
        margin 0 20px
        display flex
        flex-direction column
        color #f9f9f9
        font-size 16px
        text-align right
        > p
            font-size 24px
            line-height 1.2
            color #fff
</style>
