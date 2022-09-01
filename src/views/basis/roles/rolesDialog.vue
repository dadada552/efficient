<template>
	<div>
		<el-dialog
			:title="flag ? '新增角色' : '修改角色'"
			:visible.sync="dialogFormVisible"
		>
			<el-form :model="form">
				<el-form-item label="角色名称">
					<el-input
						v-model="form.name"
						autocomplete="off"
						style="width: 200px"
						placeholder="请输入用户名称"
					></el-input>
				</el-form-item>
				<!-- 上级菜单 -->
				<el-form-item label="角色关联" label-width="70px">
					<el-tree
						:data="data"
						:props="defaultProps"
						@node-click="handleNodeClick"
					></el-tree>
				</el-form-item>
				<!-- 结束 -->
				<el-form-item label="备注">
					<textarea
						cols="30"
						rows="10"
						v-model="form.desc"
						placeholder="拥有所有权限"
					></textarea>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button class="pur" @click="add">新增</el-button>
				<el-button @click="qx">取 消</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			dialogFormVisible: false,
			defaultProps: {
				children: "children",
				label: "label"
			},
			flag: true,
			form: {
				name: "",
				desc: ""
			},

			data: [
				{
					label: "亚洲",
					children: [
						{
							label: "中国",
							children: [
								{
									label: "北京",
									label: "上海"
								}
							]
						}
					]
				},
				{
					label: "北美洲",
					children: [
						{
							label: "美国"
						}
					]
				}
			]
		}
	},
	created() {},
	mounted() {},
	methods: {
		handleNodeClick() {},
		edit(row) {
			this.form = row
		},
		add() {
			this.dialogFormVisible = false
		},
		qx() {
			this.$emit("add")
		}
	}
}
</script>

<style scoped lang="scss"></style>
