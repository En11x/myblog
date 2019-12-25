//显示所有文章列表组件
<template>
	<div class="article-list">
		<p>文章列表（共12篇文章）</p>
		<div class="article-table-wrap">
			<div class="table">
				<el-table :data="tableData" border stripe style="width: 100%" size="mini">
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
					<el-table-column
						label="分类"
						prop="categoryName"
						width="120"
						align="center"
						show-overflow-tooltip
					></el-table-column>
					<el-table-column label="阅读量" prop="pageview" align="center"></el-table-column>
					<el-table-column label="加密" align="center">
						<template slot-scope="scope">{{scope.row.isEncrypt === '0' ? '否' : '是'}}</template>
					</el-table-column>
					<el-table-column prop="createTime" label="创建时间" :formatter="forrmatTime"></el-table-column>
					<el-table-column prop="createTime" label="发布时间" :formatter="forrmatTime"></el-table-column>
					<el-table-column prop="createTime" label="更新时间" :formatter="forrmatTime"></el-table-column>
					<el-table-column label="状态">
						<template slot-scope="scope">
							<el-tag
								:type="scope.row.status == '0' ? 'success' : 'danger'"
								size="mini"
								disable-transitions
							>{{ formatStatus(scope.row.status) }}</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" circle icon="el-icon-edit" type="primary" @click="edit(scope.row)"></el-button>
							<el-button
								size="mini"
								type="danger"
								icon="el-icon-delete"
								circle
								@click="handleDelete(scope.row)"
							></el-button>
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
	name: 'articleList',
	data() {
		return {
			pageSize: 10, //每页显示9条数据
			tableData: [
				{
                    id:1,
                    title:'标题啊',
                    cover:require('@/assets/images/user.jpg'),
                    categoryName:'生活',
                    pageview:'23',
                    isEncrypt:'0',
					createTime: '2016-05-02',
					publishTime: '2016-05-02',
                    updateTime: '2016-05-02',
                    status:'0'
				},
				
			]
		}
    },
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
		forrmatTime(row, column, cellValue, index) {
			return cellValue
				? moment(parseInt(cellValue) * 1000).format('YYYY-MM-DD HH:mm')
				: '-'
		},
		//转换状态
		formatStatus(val) {
			return val === '0' ? '已发布' : '-'
		},
		//编辑文章
		edit(article) {
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
				'此操作会将该文章标记为删除，不再显示, 是否继续?',
				() => {
                    this.$toast('已删除')
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
	},
	components: {}
}
</script>

<style lang='stylus' scoped>
.article-list
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
