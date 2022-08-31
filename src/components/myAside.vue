<template>
	<div>
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
			unique-opened
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
	</div>
</template>

<script>
import { getMenu } from "../utils/api"
export default {
	props: ["isCollapse"],
	components: {},
	data() {
		return { menuList: [] }
	},
	created() {
		getMenu().then((res) => {
			// console.log(res.data.data)
			this.menuList = res.data.data
		})
	},
	mounted() {},
	methods: {
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
.el-menu-item.is-active {
	background-color: orange !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
	min-height: 400px;
}
</style>
