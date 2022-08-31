<template>
	<div>
		<div class="top">
			<el-button icon="el-icon-circle-plus-outline">添加类型</el-button>
		</div>
		<!-- 表格开始 -->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" label="id" width="55"> </el-table-column>
			<el-table-column prop="name" label="类型名称"> </el-table-column>
			<el-table-column prop="lastCheckName" label="最后修改人">
			</el-table-column>
			<el-table-column prop="lastCheckDate" label="最后修改日期">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini">编辑</el-button>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 表格结束 -->
		<mypage
			:data="tableData.length"
			:currentPage="currentPage"
			:pageSize="pageSize"
			@handleSizeChange="handleSizeChange"
			@handleCurrentChange="handleCurrentChange"
		></mypage>
	</div>
</template>

<script>
import mypage from "@/components/myPagination.vue"
export default {
	name: "",
	components: { mypage },
	data() {
		return {
			currentPage: 1,
			pageSize: 5,
			tableData: [
				{
					name: "请假流程",
					lastCheckName: "admin",
					lastCheckDate: "2022年8月20日14:01:28"
				},
				{
					name: "请假流程",
					lastCheckName: "admin",
					lastCheckDate: "2022年8月20日14:01:28"
				}
			]
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

<style scoped lang="scss"></style>
