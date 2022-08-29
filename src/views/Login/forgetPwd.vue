<template>
	<el-dialog
		title="修改密码"
		:visible.sync="dialogFormVisible"
		:before-close="close"
	>
		<el-form
			:model="ruleForm"
			:rules="rules"
			ref="ruleForm"
			label-width="100px"
			class="demo-ruleForm"
		>
			<el-form-item label="用户名" prop="name">
				<el-input
					v-model.trim="ruleForm.name"
					placeholder="请输入用户名"
				></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="pwd">
				<el-input
					v-model.trim="ruleForm.pwd"
					show-password
					placeholder="请输入密码"
				></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="confirmPwd">
				<el-input
					v-model.trim="ruleForm.confirmPwd"
					show-password
					placeholder="请再次输入密码"
				></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="cancel()">取 消</el-button>
			<el-button type="primary" @click="sure()">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
export default {
	props: ["dialogFormVisible"],
	components: {},
	data() {
		return {
			ruleForm: {
				name: "",
				confirmPwd: "",
				pwd: ""
			},
			rules: {
				name: [
					{ required: true, message: "请输入用户名", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				pwd: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				confirmPwd: [
					{ required: true, message: "请再次输入密码", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				]
			},
			formLabelWidth: "120px"
		}
	},
	created() {},
	mounted() {},
	methods: {
		//点击取消关闭 对话框
		cancel() {
			this.$emit("update:dialogFormVisible", false)
		},
		//点击确定 关闭对话框并且 请求数据
		sure() {
			this.$emit("update:dialogFormVisible", false)
			console.log(1)
		},
		//关闭时候的回调函数
		close() {
			this.$emit("update:dialogFormVisible", false)
		}
	}
}
</script>

<style scoped lang="scss"></style>
