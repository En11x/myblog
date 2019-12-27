<template>
	<div id="edit-article">
		<div class="header-wrap">
			编辑文章
			<div class="action-btn-wrap">
				<span v-if="canPublish">发布</span>
				<span v-if="canModify">提交</span>
				<span v-if="canSave">保存</span>
			</div>
		</div>
		<div class="edit-wrap">
			<mavon-editor
				class="editor"
				v-model="article.content"
				ref="md"
				@imgAdd="$imgAdd"
				:boxShadow="false"
				
			></mavon-editor>
			<div class='input-wrap'>
				<div class='fix-input-wrap'>
					<UP class='upload-cover' />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import UP from '@/components/upload/upCover.vue'
export default {
	name: 'editArticle',
	data() {
		return {
			canPublish: true,
			canModify: true,
			canSave: true,
			article: {
				content: '' //文章内容
			}
		}
	},
	components: {
		mavonEditor,
		UP
	},
	methods: {
		//图片
		$imgAdd(pos, $file) {}
	}
}
</script>

<style lang='stylus' scoped>
@import '~STYLUS/color.styl'

#edit-article
	position: relative
	padding-top: 52px

	.header-wrap
		position: absolute
		width: 100%
		top: 0
		padding: 18px
		font-size: 16px
		font-weight: bold
		background-color: $color-white
		box-shadow: 1px 1px 10px 1px rgba(38, 42, 48, 0.1)
		z-index: 1000
		display: flex
		flex-direction: row
		justify-content: space-between
		align-items: center

		.action-btn-wrap
			>span
				padding: 5px 10px
				margin-right: 5px
				font-size: 14px
				cursor: pointer
				background-color: $color-main
				color: $color-white
				border-radius: 8px

				&:hover
					background-color: lighten($color-main, 10%)

				&:last-child
					margin-right: 0px

	.edit-wrap
		padding: 30px 10px
		padding-top: 10px
		animation: show 0.8s
		display flex
		flex-direction row
		@media (max-width 1324px)
			flex-direction column-reverse
		.input-wrap
			position relative
			width 300px
			margin-left 10px
			transition all .3s

@keyframes show
	from
		margin-top: -10px
		opacity: 0

	to
		margin-top: 0
		opacity: 1
</style>