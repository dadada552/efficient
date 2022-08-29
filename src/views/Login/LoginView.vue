<template>
	<div class="login">
		<!-- 登录 -->
		<div class="login-box">
			<div class="login-head">OA登录系统</div>
			<!-- 登录表单 -->
			<div class="login-form">
				<!-- 用户名 -->
				<el-form
					:model="ruleForm"
					:rules="rules"
					ref="ruleForm"
					class="demo-ruleForm"
				>
					<el-form-item prop="name">
						<el-input
							v-model.trim="ruleForm.name"
							prefix-icon="el-icon-s-custom"
							placeholder="请输入用户名"
						></el-input>
					</el-form-item>
					<!-- 密码 -->
					<el-form-item prop="password" class="password">
						<el-input
							v-model.trim="ruleForm.password"
							show-password
							prefix-icon="el-icon-lock"
							placeholder="请输入密码"
						></el-input>
						<div class="forgetPwd" @click="showForgetPwdD = true">
							忘记密码？
						</div>
					</el-form-item>
					<!-- 验证码 -->
					<el-form-item prop="testing">
						<div class="testing-box">
							<el-input
								v-model.trim="ruleForm.testing"
								style="width: 60%"
								placeholder="验证码"
							></el-input>
							<img
								class="testing-img"
								:src="imgUrl"
								title="点击切换下一张"
								@click="changeCode"
							/>
						</div>
					</el-form-item>
					<el-form-item style="text-align: center">
						<el-button
							type="primary"
							style="width: 80%"
							@click="submitForm('ruleForm')"
							>登录</el-button
						>
					</el-form-item>
				</el-form>
			</div>
		</div>
		<div class="foot-copyright">
			©2022美团版权所有京ICP证070791号北京公网安备11010502025545号
		</div>
		<forget-pwd :dialogFormVisible.sync="showForgetPwdD"></forget-pwd>
	</div>
</template>

<script>
import forgetPwd from "./forgetPwd.vue"
import axios from "axios"
export default {
	components: { forgetPwd },
	data() {
		return {
			// 登录表单
			ruleForm: {
				name: "",
				password: "",
				testing: ""
			},
			showForgetPwdD: false,
			//图片路径
			imgUrl: "",
			// 验证规则
			rules: {
				name: [
					{ required: true, message: "请输入用户名", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				password: [
					{ required: true, message: "请输入密码", trigger: "blur" },
					{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
				],
				testing: [{ required: true, message: "请输入验证码", trigger: "blur" }]
			}
		}
	},
	created() {
		axios.get("/user/imgcode/").then((res) => {
			this.imgUrl = res.data.img
		})
	},
	mounted() {},
	methods: {
		// 提交
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					//登录的接口
					axios
						.post("/user/login/", {
							params: {
								name: this.ruleForm.name,
								password: this.ruleForm.password,
								code: this.ruleForm.testing
							}
						})
						.then((res) => {
							console.log(res.data.token)
							if (res.data.code == "200") {
								localStorage.setItem("token", res.data.token)
								this.$message.success(res.data.msg)
								this.$router.push("/")
							} else {
								this.$message.error(res.data.msg)
							}
						})
				}
			})
		},
		//改变图片验证码
		changeCode() {
			axios.get("/user/imgcode/").then((res) => {
				this.imgUrl = res.data.img
			})
		}
	}
}
</script>

// 样式
<style scoped lang="scss">
.login {
	width: 100%;
	height: 100vh;
	background: url("../../assets/loginBg.png");
	background-size: 100% 100%;
	position: relative;
	.login-box {
		position: absolute;
		width: 550px;
		background-color: #fff;
		height: 490px;
		border-radius: 20px;
		padding: 20px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.password {
			position: relative;
			.forgetPwd {
				position: absolute;
				right: 0;
				top: 38px;
				color: #f4c438;
				font-size: 16px;
				cursor: pointer;
			}
		}
		.login-form {
			width: 80%;
			margin: 10px auto;
			.testing-box {
				margin-top: 16px;
				display: flex;
				.testing-img {
					width: 120px;
					height: 46px;
					margin-left: 22px;
					border-radius: 16px;
					cursor: pointer;
				}
			}
		}
		.login-head {
			width: 100%;
			text-align: center;
			font-size: 26px;
			margin: 30px 0;
		}
	}
	.foot-copyright {
		position: absolute;
		width: 100%;
		text-align: center;
		bottom: 20px;
		font-size: 14px;
		color: #9a9a9a;
	}
	::v-deep .el-input__inner {
		border-radius: 16px;
		height: 46px;
	}
}
</style>
