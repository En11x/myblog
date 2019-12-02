//评论组件
<template>
	<div class="comment">
		<p>评论(共计：456条)</p>
		<div class="comment-table-wrap">
			<div class="table">
				<el-table :data="tableData" border stripe style="width: 100%" size="mini">
					<el-table-column label="评论者" show-overflow-tooltip min-width="120">
						<template slot-scope="scope"></template>
					</el-table-column>
					<el-table-column label="评论内容" align="center" show-overflow-tooltip min-width="200">
						<template slot-scope="scope">评论内容评论内容评论内容评论内容</template>
					</el-table-column>
					<el-table-column label="文章" align="center" show-overflow-tooltip min-width="150">
						<template slot-scope="scope">
							<div class="article-title">
								<span>show-overflow-tooltip min-width="200"</span>
							</div>
						</template>
					</el-table-column>
					<el-table-column label="作者" align="center">
						<template slot-scope="scope">是</template>
					</el-table-column>
					<el-table-column label="ip" align="center">
						<template slot-scope="scope">ip地址</template>
					</el-table-column>
					<el-table-column prop="createTime" label="创建时间">2018-6-45 11:25:00</el-table-column>
					<el-table-column label="操作" width="200" align="center">
						<template slot-scope="scope">
							<el-button
								size="mini"
								icon="el-icon-edit-outline"
								@click="handleEdit(scope.$index, scope.row)"
							>编辑</el-button>
							<el-button
								size="mini"
								icon="el-icon-delete"
								type="danger"
								@click="handleDelete(scope.$index, scope.row)"
							>删除</el-button>
						</template>
					</el-table-column>
				</el-table>
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
		<el-dialog title="回复" class="edit-dialog" :visible.sync="dialogFormVisible">
			<el-input
				class="input-title"
				size="mini"
				:placeholder="请输入"
				type="textarea"
				:row="5"
				resize="none"
			></el-input>
			<div class="btn-wrap">
				<span class="emoji-btn" :class="{active:showEmoji}">表情</span>
			</div>
			<ul class="emoji-wrap">
				<li>
					<img src alt="表情">
				</li>
			</ul>
			<div slot="footer" class="dialog-footer">
				<el-button size="mini">取消</el-button>
				<el-button size="mini" type="primary">确定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'Comment',
	data() {
		return {
			dialogFormVisible: true,
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
.comment
	padding: 0 20px
	width: 100%
	height: 100%
	background-color: #fff

	> p
		padding: 10px
		font-size: 16px
		font-weight: bold
		margin-bottom: 10px
		border-bottom: 1px solid rgba(38, 42, 48, 0.1)

	.comment-table-wrap
		animation: show 0.8s
		width: 100%
		position: relative
		height: 100%

		.table
			position: absolute
			width: 100%

			.article-title
				cursor: pointer

				&:hover
					color: #29b6f6

			.pagination
				position: absolute
				bottom: -40px
				right: 0px

.content-emoji
	width: 14px
	height: 14px
	margin: 1px

.edit-dialog
	top: 15vh !important

	.input-title
		margin-bottom: 10px

	.el-dialog
		margin: 0 auto !important
		width: calc(100% - 30px)
		max-width: 400px
</style>


