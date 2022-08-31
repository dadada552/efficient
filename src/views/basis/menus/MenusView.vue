// 结构
<template>
	<div class="roles-box">
		<div class="header">
			菜单管理:<el-input
				placeholder="请输入菜单管理"
				style="width: 20%"
			></el-input>
			<el-button icon="el-icon-search" style="margin-left: 25px"
				>查询</el-button
			>
			<el-button icon="el-icon-refresh-right">重置</el-button>
			<el-button
				type="primary"
				icon="el-icon-circle-plus-outline"
				@click="addMenu"
				>新增菜单</el-button
			>
		</div>
		<!-- 表格页面 -->
		<div class="table-box">
			<el-table
				:data="tableData"
				style="width: 100%; margin-bottom: 20px"
				row-key="id"
				border
				default-expand-all
				:tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
			>
				<el-table-column prop="date" label="日期" sortable width="180">
				</el-table-column>
				<el-table-column prop="name" label="姓名" sortable width="180">
				</el-table-column>
				<el-table-column prop="address" label="地址"> </el-table-column>
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
		<menu-dialog ref="menuDialog" v-if="menuFlag"></menu-dialog>
	</div>
</template>

// 行为
<script>
import myPagination from "@/components/myPagination.vue"
import menuDialog from "./menucom.vue"
export default {
	components: {
		myPagination,
		menuDialog
	},
	data() {
		return {
			tableData: [
				{
					id: 3,
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄",
					children: [
						{
							id: 31,
							date: "2016-05-01",
							name: "王小虎",
							address: "上海市普陀区金沙江路 1519 弄"
						},
						{
							id: 32,
							date: "2016-05-01",
							name: "王小虎",
							address: "上海市普陀区金沙江路 1519 弄"
						}
					]
				}
			],
			currentPage: 1,
			pageSize: 5,
			menuFlag: false
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
		/**添加菜单栏 */
		addMenu() {
			this.menuFlag = true
			this.$nextTick(() => {
				this.$refs.menuDialog.dialogFormVisible = true
			})
		},
		// 编辑
		handleEdit(index, row) {
			console.log(index, row)
		},
		// 删除
		handleDelete(index, row) {
			console.log(index, row)
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
.demo-table-expand {
	font-size: 0;
}
.demo-table-expand label {
	width: 90px;
	color: #99a9bf;
}
.demo-table-expand .el-form-item {
	margin-right: 0;
	margin-bottom: 0;
	width: 50%;
}
</style>
