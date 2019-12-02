//搜索页面
<template>
	<div class="search">
		<div class="search-input-wrap">
			<input type="search" placeholder="输入关键字搜索..." class="search-input">
		</div>
		<div class="search-article-wrap"></div>
		<!-- 分页 -->
		<div class="pagination"></div>
		<noData text="没有找到文章~"/>
	</div>
</template>

<script>
import noData from '@/components/noData/noData'
export default {
	name: 'Search',
	data() {
		return {}
	},
	components: {
		noData
	}
}
</script>

<style lang='stylus' scoped>
.search
	padding: 0 10px
	display: flex
	flex-direction: column
	align-items: center
	animation show 0.8s 
	.search-input-wrap
		width 100%
		height 30px
		border-radius 5px
		border 1px solid #eee
		.search-input
			width 100%
			height 28px
			padding 5px 10px
			border-radius 5px
			border none
			background-color #fff
			&::placeholder
				color #b0b0ae
</style>
