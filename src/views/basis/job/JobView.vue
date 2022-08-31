// 结构
<template>
	<div class="roles-box">
		<div class="header">
			岗位名称:<el-input
				placeholder="请输入岗位名称"
				style="width: 20%"
			></el-input>
			<el-button icon="el-icon-search" style="margin-left: 25px"
				>查询</el-button
			>
			<el-button icon="el-icon-refresh-right">重置</el-button>
			<el-button
				type="primary"
				icon="el-icon-circle-plus-outline"
				@click="addJob"
				>新增职级</el-button
			>
		</div>
		<!-- 表格页面 -->
		<div class="table-box">
			<el-table :data="tableData" stripe style="width: 100%" border>
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="name" label="岗位名称"> </el-table-column>
				<el-table-column prop="id" label="备注"> </el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
							>编辑</el-button
						>
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<!-- 分页 -->
		<div class="page-box">
			<myPagination
				:data="tableData.length"
				:currentPage="currentPage"
				:pageSize="pageSize"
				@handleSizeChange="handleSizeChange"
				@handleCurrentChange="handleCurrentChange"
			></myPagination>
		</div>
		<job-dialog ref="jobDialog" v-if="jobFlag"></job-dialog>
	</div>
</template>

// 行为
<script>
import myPagination from "@/components/myPagination.vue"
import jobDialog from "./postcom.vue"
export default {
	components: {
		myPagination,
		jobDialog
	},
	data() {
		return {
			tableData: [
				{
					id: 1,
					name: "实习生",
					rank_id: 4,
					department_id: 1,
					create_date: "2022-08-23T12:00:00"
				}
			],
			currentPage: 1,
			pageSize: 5,
			jobFlag: false
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 分页
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		},
		// 编辑
		handleEdit(index, row) {
			console.log(index, row)
		},
		// 删除
		handleDelete(index, row) {
			console.log(index, row)
		},
		/**新增职级 */
		addJob() {
			this.jobFlag = true
			this.$nextTick(() => {
				this.$refs.jobDialog.dialogFormVisible = true
			})
		}
	}
}
</script>

// 样式
<style scoped lang="scss">
.table-box {
	width: 100%;
	margin: 20px 0;
}
::v-deep .el-input__inner {
	margin-left: 10px;
}
.header {
	width: 100%;
	display: flex;
	align-items: center;
	font-size: 18px;
}
</style>
