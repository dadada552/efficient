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
				<el-menu
					:default-active="$route.path"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					:collapse="isCollapse"
					background-color="#468bf3"
					text-color="#fff"
					active-text-color="#fff"
					router
				>
					<template v-for="item in menuList">
						<el-menu-item v-if="!item.isDir" :index="item.path" :key="item.id">
							<i :class="item.icon" style="color: #fff"></i>
							<span slot="title">{{ item.name }}</span>
						</el-menu-item>
						<el-submenu v-else :index="item.path" :key="item.id">
							<template v-slot:title>
								<i :class="item.icon" style="color: #fff"></i>
								<span slot="title">{{ item.name }}</span>
							</template>
							<el-menu-item
								v-for="child in item.children"
								:key="child.id"
								:index="child.path"
								>{{ child.name }}</el-menu-item
							>
						</el-submenu>
					</template>
				</el-menu>
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
import axios from "axios"
export default {
	components: {},
	data() {
		return {
			is_full: false,
			isCollapse: false,
			menuList: []
		}
	},
	created() {
		axios.get("/effect/home/menus/").then((res) => {
			console.log(res.data.data)
			this.menuList = res.data.data
		})
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
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		}
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
.el-menu-item.is-active {
	background-color: orange !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
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
