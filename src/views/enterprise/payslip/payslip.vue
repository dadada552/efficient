<template>
	<div>
		<el-form :inline="true" :model="formInline" class="demo-form-inline">
			<el-form-item label="姓名">
				<el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
			</el-form-item>
			<el-form-item label="账号">
				<el-input
					v-model="formInline.number"
					placeholder="请输入账号"
				></el-input>
			</el-form-item>
			<el-form-item label="手机号">
				<el-input
					v-model="formInline.tel"
					placeholder="请输入手机号"
				></el-input>
			</el-form-item>
		</el-form>
		<div class="btn-box">
			<el-button type="default" icon="el-icon-search">查询</el-button>
			<el-button type="default" icon="el-icon-refresh-right">重置</el-button>
			<el-button type="default" style="background-color: #a4adb3; color: #fff"
				>下载工资条模板</el-button
			>
			<el-button type="default" icon="el-icon-search">上传</el-button>
			<el-button
				type="default"
				icon="el-icon-circle-plus-outline"
				style="background-color: #c2c2fb; color: #fff; float: right"
				>新增工资条</el-button
			>
		</div>
		<div class="table-box">
			<el-table :data="tableDate" stripe style="width: 100%">
				<el-table-column prop="id" label="id" width="80"> </el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
				</el-table-column>
				<el-table-column prop="address" label="出勤" width="120">
				</el-table-column>
				<el-table-column prop="address" label="旷工" width="120">
				</el-table-column>
				<el-table-column prop="address" label="请假" width="120">
				</el-table-column>
				<el-table-column prop="address" label="基本工资" width="120">
				</el-table-column>
				<el-table-column prop="address" label="岗位工资" width="120">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="primary"
							@click="handleEdit(scope.$index, scope.row)"
						>
							<i class="el-icon-edit"></i> 修改</el-button
						>
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)"
						>
							<i class="el-icon-delete"></i> 删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<div class="page-box">
			<myPage
				:data="tableDate.length"
				:currentPage="currentPage"
				:pageSize="pageSize"
				@handleSizeChange="handleSizeChange"
				@handleCurrentChange="handleCurrentChange"
			></myPage>
		</div>
	</div>
</template>

<script>
import myPage from "@/components/myPagination.vue"
export default {
	name: "",
	components: { myPage },
	data() {
		return {
			tableDate: [],
			currentPage: 1,
			pageSize: 5,
			formInline: {
				user: "",
				region: "",
				flag: ""
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		}
	}
}
</script>
<style scoped lang="scss">
.btn-box {
	padding: 0 20px;
}
.table-box {
	margin-top: 20px;
}
.page-box {
	width: 80%;
	margin-top: 20px;
	.page {
		float: right;
		font-size: 12px;
		button,
		p {
			display: inline-block;
			margin: 0 10px;
			background-color: #fff;
			border: 1px solid #eee;
			font-size: 12px;
			width: 50px;
			height: 30px;
		}
		p {
			border: none;
		}
	}
}
</style>
