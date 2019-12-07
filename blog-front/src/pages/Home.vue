<template>
	<div class="container">
		<div class="container-box">
			<div class="header flex-between">
				<div class="header-avatar">
					<img src="/static/images/avatarBlog.jpg" alt srcset width="200px" height="200px" />
				</div>
				<div class="header-nav flex-between">
					<a href="/">首页</a>
					<a href="/">归档</a>
					<a href="/">关于</a>
					<a href="/">留言板</a>
					<span style="cursor:pointer;" @click="showSearchBox = !showSearchBox">搜索</span>
					<div class="search-box"  :class="{'isShow':showSearchBox}">
						<input type="text" placeholder="输入关键字搜索" name="seachText" id />
						<img src="static/images/search.png" width="20px" height="20px" alt srcset />
					</div>
				</div>
			</div>

			<div class="article-main">
				<div class="article-box">
					<ArticlePreBox></ArticlePreBox>
					<ArticlePreBox></ArticlePreBox>
					<ArticlePreBox></ArticlePreBox>
					<ArticlePreBox></ArticlePreBox>
				</div>
				<div class="right-select">
					<div class="article-tag">
						<h4>标签</h4>
						<ul class="article-list">
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活123213asdas</a>
							</li>
						</ul>
					</div>
					<div class="article-tag">
						<h4>标签</h4>
						<ul class="article-list">
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活123213asdas</a>
							</li>
						</ul>
					</div>
					<div class="article-tag">
						<h4>标签</h4>
						<ul class="article-list">
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活</a>
							</li>
							<li>
								<a href="#">生活123213asdas</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<Page />
            <Comment />
            <CommentList />
		</div>
	</div>
</template>

<script>
import ArticlePreBox from '../components/ArticlePreBox.vue'
import Page from '../components/Page.vue'
import Comment from '../components/Comment.vue'
import CommentList from '../components/CommentList.vue'
export default {
	name: 'Home',
	data() {
		return {
			showSearchBox: false
		}
	},
	components: {
		ArticlePreBox,
        Page,
        Comment,
        CommentList
	}
}
</script>

<style lang='less' scoped>
.container {
	.container-box {
		background: #fff;
		padding: 60px 120px;
		.header {
			.header-nav {
				position: relative;
				width: 30%;
				margin-right: 20%;
			}
			.search-box {
				position: absolute;
				display: flex;
				align-items: center;
				width: 0px;
				overflow: hidden;
				transition: all 1s;
				top: 0;
				right: -190px;
				&.isShow {
                    width: 180px;
					input {
						&::-ms-input-placeholder {
							text-align: center;
						}
						&::-webkit-input-placeholder {
                            text-align: center;
                            opacity: 1;
						}
                    }
                    img{
                        animation: opacity .5s 1s;
                        animation-fill-mode:forwards;
                    }
                }
                img{opacity: 0;}
				input {
					border: none;
					background: none;
					outline: none;
					border-bottom: 1px solid #000;
                    line-height: 1.8em;
                    text-align: center;
					&::-ms-input-placeholder {
						text-align: center;
					}
					&::-webkit-input-placeholder {
                        text-align: center;
                        opacity: 0;
                        transition:all .5s;
                        transition-delay: 1s;
					}
				}
			}
		}
		.article-main {
			display: flex;
			.right-select {
				height: 100%;
				margin-left: 2%;
				.article-tag {
					h4 {
						margin: 1em 0;
					}
				}
				.article-list {
					width: 100%;
					height: 100%;
					overflow: hidden;
					li {
						float: left;
						display: inline-block;
						margin: 0 5px 5px 0;
						line-height: 1.6;
						color: #666;
					}
				}
			}
		}
	}
}
</style>
