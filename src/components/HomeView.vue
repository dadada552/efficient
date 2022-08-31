<template>
	<div>
		<el-container>
			<el-aside :width="isCollapse ? '64px' : '200px'">
				<div v-show="!isCollapse" class="aside-top">
					<img src="../assets/v2_rgsxtp.png" alt="" />
					<span>OA管理系统</span>
				</div>
				<div v-show="isCollapse" style="padding-left: 15px; padding-top: 10px">
					<img
						style="width: 36px; height: 36px"
						src="../assets/v2_rgsxtp.png"
						alt=""
					/>
				</div>
				<my-aside :isCollapse="isCollapse" ></my-aside>
			</el-aside>
			<el-container>
				<el-header>
					<div class="header-top">
						<div class="top-left">
							<i
								@click="showAside"
								v-show="!isCollapse"
								class="el-icon-s-fold"
							></i>
							<i
								@click="showAside"
								v-show="isCollapse"
								class="el-icon-s-unfold"
							></i>
						</div>
						<div class="top-right">
							<div>
								<i class="el-icon-s-flag"></i>
								<i class="el-icon-message-solid"></i>
								<i class="el-icon-message"></i>
								<i
									@click="fullScreen"
									:class="
										is_full
											? 'iconfont icon-suoxiao-xiaoping-04'
											: 'iconfont icon-24gl-fullScreenEnter2'
									"
								></i>
							</div>
							<div>
								<i class="el-icon-user-solid"></i>
								<span>超级管理员</span>
							</div>
						</div>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
import myAside from "@/components/myAside.vue"
export default {
	components: { myAside },
	data() {
		return {
			is_full: false,
			isCollapse: false,
		}
	},
	created() {
	},
	mounted() {},
	methods: {
		//全屏和退出全屏
		fullScreen() {
			if (this.is_full) {
				//退出全屏
				if (document.exitFullScreen) document.exitFullscreen()
				//兼容火狐
				if (document.mozCancelFullScreen) document.mozCancelFullScreen()
				//兼容谷歌等
				if (document.webkitExitFullscreen) document.webkitExitFullscreen()
				//兼容IE
				if (document.msExitFullscreen) document.msExitFullscreen()
			} else {
				//进入全屏
				if (document.documentElement.RequestFullScreen)
					document.documentElement.RequestFullScreen()
				//兼容火狐
				if (document.documentElement.mozRequestFullScreen)
					document.documentElement.mozRequestFullScreen()
				//兼容谷歌等可以webkitRequestFullScreen也可以webkitRequestFullscreen
				if (document.documentElement.webkitRequestFullScreen)
					document.documentElement.webkitRequestFullScreen()
				//兼容IE,只能写msRequestFullscreen
				if (document.documentElement.msRequestFullscreen)
					document.documentElement.msRequestFullscreen()
			}
			this.is_full = !this.is_full
		},
		showAside() {
			this.isCollapse = !this.isCollapse
		},

	}
}
</script>

<style scoped lang="scss">
@import url("../assets/icon/font_rkrb76mlfzq/iconfont");
@import url("../assets/icon/font_74qgbhqao29/iconfont");
.el-header {
	height: 60px;
	border-bottom: 2px solid #bbb;
	border-top: 2px solid #bbb;
}

::v-deep .el-icon-arrow-down {
	color: #fff;
	font-weight: 600;
}
.el-aside {
	height: 100vh;
	background-color: #468bf3;
	color: #fff;
	.aside-top {
		padding-left: 15px;
		padding-top: 10px;
		img {
			float: left;
			width: 36px;
			height: 36px;
		}
		span {
			vertical-align: middle;
			line-height: 40px;
			margin-left: 10px;
		}
	}
}
.el-main {
	height: calc(100vh - 60px);
}
.header-top {
	height: 60px;
	width: 100%;
	line-height: 60px;
	display: flex;
	justify-content: space-between;
	.top-left {
		font-size: 30px;
	}
	.top-right {
		font-size: 30px;
		line-height: 60px;
		display: flex;
		justify-content: flex-start;
		i {
			margin: 5px;
		}
		span {
			font-size: 16px;
			margin-top: 10px;
		}
	}
}
</style>
