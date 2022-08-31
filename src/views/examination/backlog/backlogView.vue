<template>
	<div class="my-send">
		<div class="top"><topForm></topForm></div>
		<div class="table-box">
			<el-table :data="tableData" stripe style="width: 100%">
				<el-table-column prop="id" label="id" width="80"> </el-table-column>
				<el-table-column prop="name" label="申请人" width="120">
				</el-table-column>
				<el-table-column prop="address" label="审批类型" width="120">
				</el-table-column>
				<el-table-column prop="address" label="申请时间" width="120">
				</el-table-column>
				<el-table-column prop="address" label="当前审批人" width="120">
				</el-table-column>
				<el-table-column prop="address" label="审批状态" width="120">
				</el-table-column>
				<el-table-column prop="address" label="所属部门" width="120">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="warning"
							@click="handleEdit(scope.$index, scope.row)"
						>
							<i class="el-icon-chat-dot-square"></i> 详情</el-button
						>
						<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)"
						>
							<i class="el-icon-refresh-right"></i> 撤回</el-button
						>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<div class="page-box">
			<myPage
				:data="tableData.length"
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
import topForm from "@/components/topForm.vue"
export default {
	name: "",
	components: { myPage, topForm },
	data() {
		return {
			tableData: [],
			currentPage: 1,
			pageSize: 5
		}
	},
	created() {},
	mounted() {},
	methods: {
		// 撤回
		handleDelete(i, row) {},
		// 详情
		handleEdit(i, row) {},
		//分页
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
.my-send {
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	.table-box {
		width: 100vw;
		margin: 0 auto;
		text-align: center;
	}
	.page-box {
		width: 100vw;
		margin-top: 30px;
		float: right;
	}
}
</style>
