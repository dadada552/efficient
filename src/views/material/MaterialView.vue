<template>
	<div>
		<!-- 上部操作栏 -->
		<div class="top">
			材料名称：<el-input
				v-model="materialVal"
				placeholder="请输入材料名称"
				style="width: 200px"
			></el-input>
			<div class="btn-box">
				<el-button icon="el-icon-search">查询</el-button>
				<el-button icon="el-icon-refresh-right">重置</el-button>
				<el-button
					icon="el-icon-circle-plus-outline"
					@click="dialogFormVisible = true"
					>新增材料</el-button
				>
			</div>
		</div>
		<!-- 上部操作栏结束 -->

		<!-- 表格开始 -->
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" label="ID" width="50"> </el-table-column>
			<el-table-column prop="name" label="材料名称"> </el-table-column>
			<el-table-column prop="address" label="材料地址"> </el-table-column>
			<el-table-column label="操作">
				<template v-slot="scope">
					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
						>下载</el-button
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
		<!-- 表格结束 -->

		<!-- 弹出框开始 -->
		<el-dialog title="收货地址" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="活动名称" label-width="120px">
					<el-input
						v-model="form.name"
						style="width: 300px"
						autocomplete="off"
					></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false"
					>确 定</el-button
				>
			</div>
		</el-dialog>
		<!-- 弹出框结束 -->
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			materialVal: "",
			dialogFormVisible: false,
			form: {
				name: ""
			},
			tableData: [
				{
					name: "111",
					address: "999"
				}
			]
		}
	},
	created() {},
	mounted() {},
	methods: {}
}
</script>

<style scoped lang="scss">
.top {
	display: flex;
	.btn-box {
		.el-button {
			margin: 0 10px;
		}
	}
}
</style>
