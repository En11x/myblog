// 首页
<template>
	<div id="home">
		<AricleCard/>
		<AricleCard/>

		<!-- 分页 -->
		<div class="pagination container">
			<Page/>
		</div>
	</div>
</template>

<script>
import AricleCard from '@/components/articleCard/ArticleCard'
import Page from '@/components/page/Page'
export default {
	name: 'Home',
	data() {
		return {}
	},
	components: {
		AricleCard,
		Page
	}
}
</script>

<style lang='stylus' scoped>
#home
	min-height: 100px
	animation: show 0.8s

	.pagination
		background-color: #fff
</style>
