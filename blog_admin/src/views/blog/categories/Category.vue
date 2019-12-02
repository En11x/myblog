// 分类 标签页面
<template>
 <div class='categories'>
     <p class='title'>分类</p>
     <div class='category-wrap'>
         <div class='category-item'>
             游戏开发
             <span>3篇</span>
         </div>
         <div class='category-item'>
             Vue开发
             <span>4篇</span>
         </div>
         <div class='category-item'>
             ios开发
             <span>2篇</span>
         </div>
         <div class='category-item'>
             默认分类
             <span>5篇</span>
         </div>
     </div>
	 <p class='title'>标签</p>
	 <div class='tag-wrap'>
		  <span class='tag-item'>HTTP</span>
		 <span class='tag-item' style="font-size: 30px; color: #111">JS</span>
		 <span class='tag-item'>ajax</span>
		 <span class='tag-item'>node</span>
		<span class='tag-item' style="font-size: 19.2px; color: #818181">CSS</span>

		 <span class='tag-item' style="font-size: 26.4px; color: #363636">vue</span>
		 <span class='tag-item'>JS</span>
		 <span class='tag-item'>element-ui</span>
		 <span class='tag-item' style="font-size: 15.6px; color: #a7a7a7">mongodb</span>
		 <span class='tag-item'>promise</span>
		 <span class='tag-item'>算法</span>
		 <span class='tag-item' style="font-size: 22.8px; color: #5c5c5c">vue</span>
		 <span class='tag-item'>JS</span>
		 <span class='tag-item'>element-ui</span>
		 <span class='tag-item' style="font-size: 15.6px; color: #a7a7a7">mongodb</span>
		 <span class='tag-item'>promise</span>
		 <span class='tag-item'>算法</span>
		 <span class='tag-item' style="font-size: 19.2px; color: #818181">react</span>
		 <span class='tag-item' style="font-size: 26.4px; color: #363636">设计模式</span>
	 </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang='stylus' scoped>
.categories
    position relative
    padding 0px 10px
    animation show 0.8s
    .title
        font-size 22px
        text-align center
        margin-bottom 20px
	.category-wrap
		display flex
		flex-wrap wrap
		align-items center
		justify-content center
		margin-bottom 60px
		.category-item
			padding 5px 10px
			margin 5px
			border 1px solid #eee
			border-radius 5px
			cursor pointer
			color #262a30
			transition all .3s
			> span 
				font-size 12px
				color #999
			&:hover
				background-color #eee
	.tag-wrap
		margin-bottom 20px
		span 
			font-size 13px
			color #ccc
			display inline-block
			margin 10px
			border-bottom 1px solid #999
			line-height 2
			text-align center
			cursor pointer
			transition all 0.4s
			&:hover
				border-bottom-color #262a30
				color #262a30 !important

 
</style>
