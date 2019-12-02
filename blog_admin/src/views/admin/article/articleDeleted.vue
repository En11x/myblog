//已删除的文章
<template>
	<div class="article-deleted">
		<p>回收站（共删除 12篇文章）</p>
		<div class="article-table-wrap">
			<div class="table">
				<el-table :data="tableData" border stripe style="width: 100%" size="mini">
					<el-table-column label="标题" show-overflow-tooltip min-width="200">
						<template slot-scope="scope">
							<div class="article-title">
								<span>文章标题文章标题文章标题文章标题文章标题文章标题文章标题</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column label="分类" align="center" show-overflow-tooltip>
						<template slot-scope="scope">java</template>
					</el-table-column>
					<el-table-column label="标签" align="center">
						<template slot-scope="scope">
							<el-tag :type="true ? 'primary' : 'success'" size="mini" disable-transitions>已使用</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="阅读量" align="center">
						<template slot-scope="scope">1000</template>
					</el-table-column>
					<el-table-column label="加密" align="center">
						<template slot-scope="scope">是</template>
					</el-table-column>
					<el-table-column prop="createTime" label="创建时间">2018-6-45 11:25:00</el-table-column>
					<el-table-column prop="createTime" label="发布时间">2018-6-45 11:25:00</el-table-column>
					<el-table-column prop="createTime" label="删除时间">2018-6-45 11:25:00</el-table-column>
					<el-table-column label="状态">
						<template slot-scope="scope">
							<el-tag :type="true ? 'primary' : 'success'" size="mini" disable-transitions>已使用</el-tag>
						</template>
					</el-table-column>
					<el-table-column label="操作" width="200" align="center">
						<template slot-scope="scope">
							<el-button size="mini" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button
								size="mini"
								icon="el-icon-delete"
								type="danger"
								@click="handleDelete(scope.$index, scope.row)"
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
export default {
	name: 'articleDeleted',
	data() {
		return {
			pageSize: 10, //每页显示9条数据
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				},
				{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				}
			]
		}
	},
	components: {}
}
</script>

<style lang='stylus' scoped>
.article-deleted
	padding: 0 20px
	background-color: #fff
	width: 100%
	height: 100%

	> p
		width: 100%
		padding: 10px
		font-size: 16px
		font-weight: bold
		margin-bottom 10px
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
