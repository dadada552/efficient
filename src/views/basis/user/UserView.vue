<template>
	<div>
		<div class="top">
			<div>
				姓名：<el-input
					v-model="name"
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
					v-model="mobile"
					style="width: 200px"
					placeholder="请输入手机号"
				></el-input>
			</div>
		</div>
		<div class="btn-box">
			<div>
				<el-button icon="el-icon-search" @click="search">搜索</el-button>
				<el-button icon="el-icon-refresh-right" @click="reset">重置</el-button>
			</div>
			<div>
				<el-button
					type="primary"
					icon="el-icon-circle-plus-outline"
					@click="userShow = true"
					>新增用户</el-button
				>
			</div>
		</div>
		<el-table :data="tableData" stripe style="width: 100%">
			<el-table-column type="index" prop="id" width="50" label="id">
			</el-table-column>
			<el-table-column prop="name" label="用户名称"> </el-table-column>
			<el-table-column prop="account" label="账号"> </el-table-column>
			<el-table-column prop="mobile" label="手机号"> </el-table-column>
			<el-table-column prop="role" label="所属角色"> </el-table-column>
			<el-table-column prop="rank" label="所属职级"> </el-table-column>
			<el-table-column prop="department" label="所属部门"> </el-table-column>
			<el-table-column label="操作">
				<template v-slot="scope">
					<el-button size="mini" @click="changeUser(scope.row)">修改</el-button>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<my-page
			:data="tableData.length"
			:currentPage="currentPage"
			:pageSize="pageSize"
			@handleSizeChange="handleSizeChange"
			@handleCurrentChange="handleCurrentChange"
		></my-page>
		<myDialog :userShow.sync="userShow" ref="mydialog"></myDialog>
	</div>
</template>

<script>
import myPage from "@/components/myPagination.vue"
import { getSystemusers, searchUser } from "@/utils/api"
import myDialog from "./userDialog.vue"
export default {
	components: { myPage, myDialog },
	data() {
		return {
			tableData: [],
			currentPage: 1,
			pageSize: 10,
			name: "",
			mobile: "",
			department: "",
			userShow: false,
			row: null
		}
	},
	created() {
		getSystemusers().then((res) => {
			console.log(res)
			this.tableData = res.data.data
		})
	},
	mounted() {},
	methods: {
		handleSizeChange(val) {
			this.pageSize = val
		},
		handleCurrentChange(val) {
			this.currentPage = val
		},
		/**重置 */
		reset() {
			;(this.name = ""), (this.mobile = ""), (this.department = "")
		},
		/**搜索 */
		search() {
			searchUser({
				name: this.name,
				mobile: this.mobile,
				department: this.department
			}).then((res) => {
				console.log(res)
			})
		},
		/**修改用户信息 */
		changeUser(row) {
			this.$refs.mydialog.changeEdit(row)
			this.userShow = true
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
