//后台首页
<template>
	<div class="admin-home">
		<p>首页</p>
		<div class="card-wrap">
			<iconCard
				v-for="(item,index) in messageCards"
				:key="index"
				:backgroundColor="item.backgroundColor"
				:icon="item.icon"
				:topMessage="item.topMessage"
				:middleMessage="item.middleMessage"
				:bottomMessage="item.bottomMessage"
			/>
		</div>
		<div class="content-wrap">
			<messageCard title="最新文章">
				<div slot="content">
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>

					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<div class="content-item">
						<span class="article-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
						<span class="time">
							<i class="iconfont icon-calendar"></i>2019-6-9
						</span>
					</div>
					<p class="more">更多</p>
				</div>
			</messageCard>
			<messageCard title="系统日志">
				<div slot="content">
					<div class="content-item">
						<p>ip地址: 196.128.1.1</p>2018.9.52
					</div>
					<p class="more-log">
						<span>上一页</span>
						<span>下一页</span>
					</p>
				</div>
			</messageCard>
		</div>
	</div>
</template>

<script>
import iconCard from '@/views/admin/adminHome/iconCard'
import messageCard from '@/views/admin/adminHome/messageCard'
export default {
	name: 'adminHome',
	data() {
		return {
			messageCards: [
				{
					backgroundColor: '#29b6f6',
					icon: 'icon-article',
					topMessage: '共发表了',
					middleMessage: '0',
					bottomMessage: '篇文章'
				},
				{
					backgroundColor: '#7e57c2',
					icon: 'icon-drafts',
					topMessage: '草稿箱共有',
					middleMessage: '0',
					bottomMessage: '篇文章',
					to: 'articleDrafts'
				},
				{
					backgroundColor: '#33b86c',
					icon: 'icon-deleted',
					topMessage: '垃圾箱共有',
					middleMessage: '0',
					bottomMessage: '篇文章',
					to: 'articleDeleted'
				},
				{
					backgroundColor: '#6e8cd7',
					icon: 'icon-tag',
					topMessage: '共有',
					middleMessage: '0',
					bottomMessage: '个分类/标签',
					to: 'adminCategories'
				},
				{
					backgroundColor: '#E6A23C',
					icon: 'icon-comments',
					topMessage: '共有',
					middleMessage: '0',
					bottomMessage: '条评论',
					to: 'adminComments'
				}
			]
		}
	},
	components: {
		iconCard,
		messageCard
	}
}
</script>

<style lang='stylus' scoped>
.admin-home
	padding: 20px
	background-color: #fff
	height: 100%
	display: flex
	flex-direction: column

	> p
		width: 100%
		padding: 10px
		font-size: 16px
		border-bottom: 1px solid #ddd
		margin-bottom: 10px

	.card-wrap
		display: flex
		animation: show 0.5s
		flex-wrap: wrap
		align-items: flex-start

	.content-wrap
		padding-top: 10px
		animation: show 0.8s
		overflow: hidden
		display: flex
		justify-content: space-between

		.content-item
			padding: 10px
			border: 1px solid #eee
			position: relative
			border-top: 0px
			display: flex
			align-items: center
			justify-content: space-between

			.article-title
				cursor: pointer
				flex: 1
				transition: all 0.3s
				overflow: hidden
				white-space: nowrap
				text-overflow: ellipsis
				margin-right: 5px

				&:hover
					color: #29b6f6

			.time
				color: #999

				.iconfont
					margin-right: 3px

		.more
			padding: 10px
			background-color: #f9f9f9
			cursor: pointer
			transition: all 0.3s
			text-align: center

			&:hover
				background-color: #262a30
				color: #fff

		.more-log
			text-align: center
			display: flex
			align-items: center

			> span
				cursor: pointer
				padding: 10px
				background-color: #f9f9f9
				flex: 1
				transition: all 0.3s

				&:hover
					background-color: #262a30
					color: #fff
</style>