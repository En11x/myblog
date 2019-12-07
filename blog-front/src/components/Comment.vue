<template>
	<div class="container">
		<div class="title">
			<p>添加评论</p>
		</div>
		<div class="content">
			<textarea name="comment"></textarea>
		</div>
		<div class="comment-info">
			<div class="comment-item">
				<label>称呼</label>
				<input type="text" />
			</div>
			<div class="comment-item">
				<label>邮箱</label>
				<input type="text" />
			</div>
			<div class="comment-item">
				<label>网站</label>
				<input type="text" />
			</div>
			<div class="comment-item">
				<button class="sub-btn">提交评论</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Comment',
	data() {
		return {}
	},
	components: {}
}
</script>

<style lang='less' scoped>
.container {
	width: 80%;
	margin: 0 auto;
}
.title {
	line-height: 2.7;
	color: #6e7173;
	border-bottom: 1px solid #ddd;
}
.content {
	padding: 10px 0;
	display: flex;
	textarea {
		width: 100%;
		padding: 5px 8px 5px;
		height: 174px;
		overflow: auto;
		margin: 0;
		line-height: 1.8;
		font-size: 14px;
		min-width: 50%;
		min-height: 50px;
		background: #fdfdfd !important;
		color: #555;
	}
}
.comment-info {
	width: 40%;
	max-width: 400px;
}
.comment-item {
	width: 100%;
	position: relative;
	margin: 10px 0;
	label {
		position: absolute;
		color: #888;
		margin: 7px 8px;
		font-size: 13px;
		display: block;
	}
	input {
		width: 100%;
		padding: 8px 6px;
		border: solid 1px #d4d4d4;
		background: #fdfdfd;
		padding-left: 45px;
		color: #555;
		max-width: 100%;
		box-sizing: border-box;
	}
}
.sub-btn {
	border: 1px solid #272727;
	display: block;
	line-height: 32px;
	width: 100%;
	max-width: 400px;
	outline: none;
	color: #fff;
	background: #272727;
	height: 38px;
	transition: all 0.3s;
	&:hover {
		background: #505050;
		border-color: #505050;
	}
}
</style>
