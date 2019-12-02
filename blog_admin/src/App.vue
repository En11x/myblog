<template>
	<div id="app">
		<!-- 博客页面 -->
		<div class="content-wrap" v-if="!isAdminWrap">
			<!-- 头部 -->
			<m-header/>
			<!-- 内容部分 -->
			<div class="view-wrap container">
				<router-view></router-view>
			</div>
			<!-- 底部 -->
			<m-footer/>
		</div>
		<right-nav v-if="!isAdminWrap"/>
		<!-- 博客页面结束 -->

		<!-- 博客后台管理页面 -->
		<div class="admin-wrap" v-if="isAdminWrap">
			<!-- 左边菜单栏 -->
			<leftMenu/>
			<div class="view-wrap">
				<router-view></router-view>
			</div>
		</div>
		<!-- 博客后台管理页面结束 -->
		<!-- 返回顶部 -->
		<transition name="slide-bottom">
			<div class="to-top" @click="scrollToTarget(0)" v-show="showScrollToTop">
				<span
					class="to-top-line"
					v-for="(line,index) in lineData"
					:key="index"
					:style="{height:line.height,left:line.left,transform:line.transform}"
				></span>
			</div>
		</transition>
		<!-- 返回顶部结束 -->
	</div>
</template>

<script>
import mHeader from '@/components/header/mHeader'
import mFooter from '@/components/footer/mFooter'
import RightNav from '@/components/rightNav/RightNav'
import leftMenu from '@/views/admin/leftMenu/leftMenu'
import scroll from '@/mixins/scroll'
export default {
	name: 'App',
	mixins: [scroll],
	data() {
		return {
			showScrollToTop: false,
			isAdminWrap: true, //显示博客后台管理页面
			lineData: [
				{
					height: '50%',
					left: '3px',
					transform: 'rotateZ(45deg)'
				},
				{
					height: '100%',
					top: '0px',
					transform: 'rotateZ(0deg)'
				},
				{
					height: '50%',
					left: '-3px',
					transform: 'rotateZ(-45deg)'
				}
			]
		}
	},
	mounted() {
		document.title = '我的博客'
		//监听页面scroll事件，就是滚动事件
		window.addEventListener('scroll', this.scrollListener)
	},
	methods: {
		scrollListener() {
			//获取滚动的高度
			let scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop
			//获取页面内容的高度
			scrollTop >= 60
				? (this.showScrollToTop = true)
				: (this.showScrollToTop = false)
		}
	},
	components: {
		mHeader,
		mFooter,
		RightNav,
		leftMenu
	}
}
</script>

<style lang='stylus' src='@/stylus/main.styl'></style>

<style lang='stylus' scoped>
#app
	width: 100%
	min-width: 320px
	min-height: 100%
	display: flex
	position: absolute
	overflow: hidden

	.admin-wrap
		width: 100%
		display: flex
		position: relative

		.view-wrap
			flex: 1
			min-height: 311px
			height: calc(100vh)
			background-color: #f0f2f5
			padding 14px

	.content-wrap
		position: relative
		min-height: 100%
		flex: 1

		.view-wrap
			padding-top: 80px
			min-height: calc(100vh - 100px)

	.to-top
		position: fixed
		width: 24px
		height: 24px
		background-color: #262a30
		right: 40px
		bottom: 15px
		padding: 5px
		z-index: 1000
		cursor: pointer
		line-height: 0
		display: flex
		align-items: flex-start

		.to-top-line
			position: relative
			width: 2px
			height: 100%
			margin-left: 5px
			background-color: #fff

			&:first-child
				margin-left: 0

.slide-bottom-enter-active, .slide-bottom-leave-active
	transition: all 0.3s ease

.slide-bottom-enter, .slide-bottom-leave-to
	opacity: 0
	transform: translateY(20px)
</style>
