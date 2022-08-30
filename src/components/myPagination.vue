<template>
	<div>
		<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-sizes="[5, 10, 15, 20]"
			:page-size="pageSize"
			layout="total, sizes, prev, pager, next, jumper"
			:total="data"
		>
		</el-pagination>
	</div>
</template>

<script>
export default {
	props: ["data", "currentPage", "pageSize"],
	components: {},
	data() {
		return {}
	},
	created() {},
	mounted() {},
	methods: {
		handleSizeChange(val) {
			console.log(val)
			this.$emit("handleSizeChange", val)
		},
		handleCurrentChange(val) {
			console.log(val)
			this.$emit("handleCurrentChange", val)
		}
	}
}
</script>

<style scoped lang="scss"></style>
