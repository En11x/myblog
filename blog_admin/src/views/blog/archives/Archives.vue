//归档页面组件
<template>
	<div class="archives">
		<div class="archives-wrap">
			<div class="time-line"></div>
			<div class="list-content">
				<p class="article-counts">目前共计25篇文章</p>
				<div class="small-node year">
					<p>2019</p>
					<ArticleCard2/>
					<ArticleCard2/>
					<ArticleCard2/>
				</div>
				<div class="small-node year">
					<p>2018</p>
					<ArticleCard2/>
					<ArticleCard2/>
					<ArticleCard2/>
				</div>
			</div>
		</div>
		<!-- 分页 -->
		<div class="pagination">
			<Page/>
		</div>
	</div>
</template>

<script>
import ArticleCard2 from '@/components/articleCard/ArticleCard2'
import Page from '@/components/page/Page'
export default {
	name: 'Archives',
	data() {
		return {}
	},
	components: {
		ArticleCard2,
		Page
	}
}
</script>

<style lang='stylus' scoped>
.archives
	position: relative
	padding: 0 10px

	.pagination
		width: 100%
		padding: 10px 0
		margin-top 30px

	.archives-wrap
		position: relative
		width: 100%
		padding: 10px 30px
		animation: show 0.8s

		.time-line
			position: absolute
			left: 30px
			top: 15px
			bottom: 0
			width: 2px
			background-color: #eee

		.list-content
			.article-counts
				position: relative
				color: #555
				padding: 0 15px
				font-size: 16px
				margin-bottom: 20px

				&:before
					position: absolute
					content: ''
					top: 5px
					left: -4px
					width: 10px
					height: 10px
					border-radius: 10px
					background-color: #999
			.small-node
				position relative
				font-size 24px
				padding 0 15px
				margin 60px 0
				&:before
					content ''
					position absolute
					left -3px
					top 10px
					width 8px
					height 8px
					border-radius 10px
					background-color #999

</style>
