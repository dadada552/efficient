<template>
	<div>
		<el-dialog
			:title="flag ? '修改用户' : '新增用户'"
			:visible.sync="userShow"
			:before-close="close"
		>
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				label-width="100px"
				class="demo-ruleForm"
			>
				<!-- 用户名 -->
				<el-form-item label="用户名" prop="uname">
					<el-input
						v-model.trim="ruleForm.uname"
						placeholder="请输入用户名"
					></el-input>
				</el-form-item>
				<!-- 账号 -->
				<el-form-item label="账号" prop="username">
					<el-input
						v-model.trim="ruleForm.username"
						placeholder="请输入账号"
					></el-input>
				</el-form-item>
				<!-- 手机号 -->
				<el-form-item label="手机号" prop="password">
					<el-input
						v-model.trim="ruleForm.password"
						placeholder="请输入手机号"
						type="tel"
					></el-input>
				</el-form-item>
				<!-- 角色名称 -->
				<el-form-item label="角色名称" prop="rolename">
					<el-select v-model="ruleForm.rolename" placeholder="请选择角色名称">
						<el-option label="管理员角色" value="管理员角色"></el-option>
						<el-option label="普通用户" value="普通用户"></el-option>
						<el-option label="部门管理员" value="部门管理员"></el-option>
					</el-select>
				</el-form-item>
				<!-- 所属岗位 -->
				<el-form-item label="所属岗位" prop="position">
					<el-select v-model="ruleForm.position" placeholder="请选择所属岗位">
						<el-option label="销售岗" value="销售岗"></el-option>
						<el-option label="技术岗" value="技术岗"></el-option>
					</el-select>
				</el-form-item>
				<!-- 所属职级 -->
				<el-form-item label="所属职级" prop="grade">
					<el-select v-model="ruleForm.grade" placeholder="请选择所属职级">
						<el-option label="1" value="1"></el-option>
						<el-option label="2" value="2"></el-option>
						<el-option label="3" value="3"></el-option>
					</el-select>
				</el-form-item>
				<!-- 所属部门 -->
				<el-form-item label="所属岗位" prop="department">
					<el-select v-model="ruleForm.department" placeholder="请选择所属岗位">
						<el-option label="1" value="1"></el-option>
						<el-option label="2" value="2"></el-option>
						<el-option label="3" value="3"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="cancel">取 消</el-button>
				<el-button type="primary" @click="addNewUser('ruleForm')"
					>确 定</el-button
				>
			</div>
		</el-dialog>
	</div>
</template>

<script>
import { addSystemusers } from "@/utils/api"
export default {
	props: ["userShow"],
	components: {},
	data() {
		/**手机号正则的校验 */
		var telReg = (rule, value, callback) => {
			let telReg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/
			if (!telReg.test(value)) {
				callback(new Error("请输入正确的手机号"))
			} else {
				callback()
			}
		}
		return {
			flag: false,
			ruleForm: {
				uname: "", //名字
				username: "", //账号
				password: "", //电话
				rolename: "管理员角色", //角色
				position: "", //岗位
				grade: "", //职级
				department: "" //部门
			},

			rules: {
				uname: [
					{ required: true, message: "请输入用户名称", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 1到 5 个字符", trigger: "blur" }
				],
				username: [
					{ required: true, message: "请输入账号", trigger: "blur" },
					{ min: 3, max: 6, message: "长度在 3到 6 个字符", trigger: "blur" }
				],
				password: [
					{ required: true, message: "请输入手机号", trigger: "blur" },
					{
						message: "请输入正确的手机号",
						trigger: "blur",
						type: "number",
						validator: telReg
					}
				],
				rolename: [
					{ required: true, message: "请选择角色名称", trigger: "change" }
				],
				position: [
					{ required: true, message: "请选择所属岗位", trigger: "change" }
				],
				grade: [
					{ required: true, message: "请选择所属职级", trigger: "change" }
				],
				department: [
					{ required: true, message: "请选择所属岗位", trigger: "change" }
				]
			}
		}
	},
	created() {},
	mounted() {},
	methods: {
		/**关闭的回调函数 */
		close() {
			this.$emit("update:userShow", false)
			this.ruleForm.uname = ""
			this.ruleForm.username = ""
			this.ruleForm.password = ""
			this.ruleForm.rolename = ""
			this.ruleForm.position = ""
			this.ruleForm.department = ""
		},
		/**取消的事件 */
		cancel() {
			this.$emit("update:userShow", false)
		},
		/**确定的事件 */
		addNewUser(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					addSystemusers(this.ruleForm).then((res) => {
						console.log(res)
						this.$emit("update:userShow", false)
					})
				}
			})
		},
		/**修改回显 */
		changeEdit(row) {
			this.ruleForm.uname = row.account
			this.ruleForm.username = row.account
			this.ruleForm.password = row.mobile
			this.ruleForm.rolename = row.role
			this.ruleForm.position = row.rank
			this.ruleForm.department = row.department
		}
	}
}
</script>

<style scoped lang="scss">
.el-input {
	width: 200px;
}
</style>
