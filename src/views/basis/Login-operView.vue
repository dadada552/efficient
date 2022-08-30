// 结构
<template>
	<div class="roles-box">
		<div class="header">
			<div class="header-ipt">
				账号名称:<el-input
					placeholder="请输入姓名"
					style="width: 20%"
				></el-input>
				<div class="date-box">
					时间:
					<el-time-picker
						is-range
						range-separator="至"
						start-placeholder="开始时间"
						end-placeholder="结束时间"
						placeholder="选择时间范围"
					>
					</el-time-picker>
				</div>
			</div>
			<div class="header-btn">
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
			</div>
		</div>
		<!-- 表格页面 -->
		<div class="table-box">
			<el-table :data="tableData" stripe style="width: 100%" border>
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="ip" label="登录ip"> </el-table-column>
				<el-table-column prop="name" label="账号名称"> </el-table-column>
				<el-table-column prop="facility" label="登录设备" width="500">
				</el-table-column>
				<el-table-column prop="address" label="登录地点"> </el-table-column>
				<el-table-column prop="create_date" label="登录时间"> </el-table-column>
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
	</div>
</template>

// 行为
<script>
import myPagination from "../../components/myPagination.vue"
export default {
	components: {
		myPagination
	},
	data() {
		return {
			tableData: [
				{
					id: 1,
					name: "登录",
					staff_id: 1,
					path: "post /api/staff/login/",
					ip: "127.0.0.1",
					address: "本机地址  CZ88.NET",
					facility: "ApiPOST Runtime +https://www.apipost.cn",
					create_date: "2022-08-29T16:24:32.261019"
				}
			],
			currentPage: 1,
			pageSize: 5
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
		// 查询
		search() {},
		// 重置
		remake() {}
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
	.header-ipt {
		margin: 20px 0;
		display: flex;
		align-items: center;
		font-size: 18px;
		.date-box {
			margin-left: 120px;
		}
	}
}
</style>
