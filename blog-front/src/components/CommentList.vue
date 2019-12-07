<template>
	<div class="container">
		<div class="comment-box">
			<div class="comment-avatar">
				<img src="/static/images/avatarBlog.jpg" width="50px" height="50px" alt />
			</div>
			<div class="comment-meta">
				<span class="comment-author">作者名称</span>
				<span class="comment-time">发表于：2019-12-7 20:23:51</span>
				<span class="comment-reply">回复</span>
			</div>
			<div class="comment-content">
				<p>评论内容lllllll评论内容lllllll评论内容lllllll评论内容lllllll评论内容lllllll</p>
			</div>
			<div class="comment-chilren">
				<div class="comment-avatar">
					<img src="/static/images/avatarBlog.jpg" width="50px" height="50px" alt />
				</div>
				<div class="comment-meta">
					<span class="comment-author">作者名称</span>
					<span class="comment-time">发表于：2019-12-7 20:23:51</span>
					<span class="comment-reply">回复</span>
				</div>
				<div class="comment-content">
					<p>评论内容lllllll评论内容lllllll评论内容lllllll评论内容lllllll评论内容lllllll</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommentList',
	data() {
		return {}
	},
	components: {}
}
</script>

<style lang='less' scoped>
.comment-box {
	position: relative;
	padding-left: 60px;
	.comment-avatar {
		position: absolute;
		top: 0;
		left: 0;
	}
	.comment-meta {
		margin-bottom: 0.25em;
		span {
			margin-right: 0.8em;
		}
		.comment-reply {
			cursor: pointer;
			color: #888;
			&:hover {
				color: #000;
			}
		}
	}
	.comment-content {
		line-height: 1.8;
    }
    .comment-chilren{
        position: relative;
        padding-left: 60px;
        margin: 1.5em 0;
    }
}
</style>
