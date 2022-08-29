<template>
	<div>
		<div class="top">
			<div>
				姓名：<el-input
					v-model="user"
					style="width: 200px"
					placeholder="请输入姓名"
				></el-input>
			</div>
			<div>
				所属部门：<el-input
					v-model="department"
					style="width: 200px"
					placeholder="请输入所属部门"
				></el-input>
			</div>
			<div>
				手机号：<el-input
					v-model="tel"
					style="width: 200px"
					placeholder="请输入手机号"
				></el-input>
			</div>
		</div>
		<div class="btn-box">
			<div>
				<el-button icon="el-icon-search">搜索</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
			</div>
			<div>
				<el-button type="primary" icon="el-icon-circle-plus-outline"
					>新增用户</el-button
				>
			</div>
		</div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column type="index" width="50" label="id"> </el-table-column>
			<el-table-column prop="date" label="用户名称"> </el-table-column>
			<el-table-column prop="name" label="账号"> </el-table-column>
			<el-table-column prop="address" label="手机号"> </el-table-column>
			<el-table-column prop="address" label="所属账号"> </el-table-column>
			<el-table-column prop="address" label="所属职级"> </el-table-column>
			<el-table-column prop="address" label="所属部门"> </el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini">修改</el-button>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<my-page
			:data="tableData"
			:currentPage="currentPage"
			:pageSize="pageSize"
			@handleSizeChange="handleSizeChange"
			@handleCurrentChange="handleCurrentChange"
		></my-page>
	</div>
</template>

<script>
import myPage from "../../components/myPagination.vue"
export default {
	components: { myPage },
	data() {
		return {
			tableData: [
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-02",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1518 弄"
				},
				{
					date: "2016-05-04",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1517 弄"
				},
				{
					date: "2016-05-01",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1519 弄"
				},
				{
					date: "2016-05-03",
					name: "王小虎",
					address: "上海市普陀区金沙江路 1516 弄"
				}
			],
			currentPage: 1,
			pageSize: 10,
			user: "",
			tel: "",
			department: ""
		}
	},
	created() {},
	mounted() {},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val
		},
		handleCurrentChange(val) {
			this.currentPage = val
		}
	}
}
</script>

<style scoped lang="scss">
.top {
	display: flex;
	justify-content: space-around;
}
.btn-box {
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
}
</style>
