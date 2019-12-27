<template>
	<!-- 上传文章封面 -->
	<div class="cover-upload-wrap" ref="coverOutWrap">
		<el-upload
			ref='upload'
			class='cover-upload'
			action=''
			:data='token'
			:show-file-list='false'
			:auto-upload='false'
			:on-success='handleSuccess'
			:before-upload='beforeUpload'
			:on-change='onFileChange'
			:on-progress='onUploadProgress'
		>
			<div class='img-wrap'>
				<img :src="imgUrl" class='cover' v-if="imgUrl" alt="">
				<div class='img-mask-default' :class="{'img-mask':imgUrl}">
					<i class='el-icon-upload'></i>
					<div>{{tip}}</div>
				</div>
			</div>
		</el-upload>
	</div>
</template>

<script>
export default {
	name: 'up-cover',
	props: {
		defaultImg:String,
		width:Number,
		height:Number,
		maxWidth:String,
		maxHeight:String,
		tip:{
			default:'上传图片'
		}
	},
	data() {
		return {
			token:{},  //上传附件额外参数
			calcHeight: 0
		}
	},
	components: {},
	computed: {
		imgUrl(){
			return this.defaultImg
		}	
	},
	methods: {
		//上传成功
		handleSuccess(response,file){

		},
		//上传之前
		beforeUpload(file){

		},
		//文件状态改变
		onFileChange(file,fileList){},
		//文件上传时
		onUploadProgress(event,file,fileList){}
	}
}
</script>

<style lang='stylus'>
@import '~STYLUS/color.styl'

.cover-upload-wrap
	position: relative
	width 100%
	max-width 300px
	height 150px
	border-radius 5px
	.cover-upload
		width 100%
		height 100%
		.el-upload
			width 100%
			height 100%
			overflow hidden
			border-radius 5px
			cursor pointer
			border 1px solid #ddd
			.img-wrap
				position relative
				width 100%
				height 100%
				&:hover
					.img-mask-default
						opacity 1
						background-color rgba(0,0,0,.5)
						color $color-white
				.cover
					position relative
					width 100%
					height 100%
					border-radius 5px
				.img-mask-default
					position absolute
					left 0
					top 0
					width 100%
					height 100%
					padding-left 10px
					padding-right 10px
					background-color $color-white
					color #555
					display flex
					flex-direction column
					justify-content center
					font-size 12px
					transition all .2s linear
					.el-icon-upload
						font-size 18px
				.img-mask
					opacity 0
</style>
