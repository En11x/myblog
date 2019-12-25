//草稿箱
<template>
	<div class="article-draft">
		<p>草稿箱（共{{total}}篇文章）</p>
		<div class="article-table-wrap">
			<div class="table">
				<el-table :data="articleList" border stripe style="width: 100%" size="mini">
					<el-table-column label="标题" show-overflow-tooltip min-width="200">
						<template slot-scope="scope">
							<div class="article-title">
								<span @click="details(scope.row)">{{ scope.row.title || '未填写标题'}}</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column label="封面图" width="61">
						<template slot-scope="scope">
							<img
								v-if="scope.row.cover"
								:src="scope.row.cover"
								style="width:100%;height:40px;cursor:pointer;"
								alt
								@click="previewImg"
							/>
						</template>
					</el-table-column>
					<el-table-column label="加密" align="center">
						<template slot-scope="scope">{{ scope.row.isEncrypt === '0' ? '否' : '是' }}</template>
					</el-table-column>
					<el-table-column prop="createTime" label="创建时间" width="128" :formatter="formatTime"></el-table-column>
					<el-table-column prop="createTime" label="更新时间" width="128" :formatter="formatTime"></el-table-column>
					<el-table-column label="状态" align="center">
						<template slot-scope="scope">
							<el-tag
								:type="scope.row.status == '2' ? 'primary' : 'success'"
								size="mini"
								disable-transitions
							>{{ formatStatus(scope.row.status) }}</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="操作" width="200" align="center">
						<template slot-scope="scope">
							<el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.row)">编辑</el-button>
							<el-button
								size="mini"
								icon="el-icon-delete"
								type="danger"
								@click="handleDelete(scope.row)"
							>删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<!-- 分页 -->
				<div class="pagination">
					<el-pagination
						:page-sizes="[100, 200, 300, 400]"
						:page-size="100"
						layout="prev, pager, next"
						:total="400"
					></el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from 'moment'
export default {
	name: 'articleDraft',
	data() {
		return {
			pageSize: 10, //每页显示9条数据
			total: 10, //文章总数
			articleList: [
				{
					id: 1,
					title: '标题啊',
					cover: require('@/assets/images/user.jpg'),
					categoryName: '生活',
					pageview: '23',
					isEncrypt: '0',
					createTime: '2016-05-02',
					publishTime: '2016-05-02',
					updateTime: '2016-05-02',
					status: '2'
				}
			]
		}
	},
	components: {},
	methods: {
		//查看文章详情
		details(article) {
			this.$router.push({
				name: 'articlePreview',
				query: {
					id: article.id
				}
			})
		},
		// 封面图预览
		previewImg(e) {
			this.$photoPreview.open(0, [
				{ src: e.target.src, w: 40, h: 20, target: e.target }
			])
		},
		// 时间格式化
		formatTime(row, column, cellValue, index) {
			return cellValue
				? moment(parseInt(cellValue) * 1000).format('YYYY-MM-DD HH:mm')
				: '-'
        },
		formatStatus(value) {
			return value == '2' ? '待发布' : '-'
		},
		//编辑文章
		handleEdit(article) {
			this.$router.push({
				name: 'editArticle',
				query: {
					id: article.id
				}
			})
		},
		//删除文章
		handleDelete(article) {
			this.showDialog(
				'此操作将彻底删除该文章，不可恢复, 是否继续?',
				() => {
					// this.deleteArticle(article.id)
					// 	.then(data => {
					// 		this.$toast('已删除')
					// 		this.page = 0
					// 		this.getList()
					// 	})
					// 	.catch(err => {
					// 		this.$toast(err.msg, 'error')
					// 	})
				}
			)
		}
	}
}
</script>

<style lang='stylus' scoped>
.article-draft
	padding: 0 20px
	background-color: #fff
	width: 100%
	height: 100%

	> p
		width: 100%
		padding: 10px
		font-size: 16px
		font-weight: bold
		margin-bottom: 10px
		border-bottom: 1px solid rgba(38, 42, 48, 0.1)

	.article-table-wrap
		width: 100%
		animation: show 0.8s
		position: relative
		height: 100%

		.table
			width: 100%
			position: absolute

		.pagination
			position: absolute
			bottom: -40px
			right: 0

.article-title
	> span
		cursor: pointer

		&:hover
			color: #29b6f6
</style>
