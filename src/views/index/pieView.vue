<template>
	<div id="main"></div>
</template>

<script>
import * as echarts from "echarts"
export default {
	components: {},
	data() {
		return {}
	},
	created() {},
	mounted() {
		var chartDom = document.getElementById("main")
		var myChart = echarts.init(chartDom)
		var option
		option = {
			title: {
				left: "center"
			},
			tooltip: {
				trigger: "item"
			},
			legend: {
				orient: "vertical",
				left: "right"
			},
			series: [
				{
					name: "Access From",
					type: "pie",
					radius: "50%",
					data: [
						{ value: 1048, name: "河南" },
						{ value: 735, name: "北京" },
						{ value: 580, name: "广州" },
						{ value: 484, name: "广西" },
						{ value: 300, name: "深圳" }
					],
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: "rgba(0, 0, 0, 0.5)"
						}
					}
				}
			]
		}
		option && myChart.setOption(option)
	},
	methods: {}
}
</script>

<style scoped lang="scss">
#main {
	height: 200px;
}
</style>
