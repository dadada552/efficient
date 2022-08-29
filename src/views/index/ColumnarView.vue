<template>
	<div id="birthday"></div>
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
		let chartDom = document.getElementById("birthday")
		let myChart = echarts.init(chartDom)
		let option

		option = {
			xAxis: {
				type: "category",
				data: [
					"1月",
					"2月",
					"3月",
					"4月",
					"5月",
					"6月",
					"7月",
					"8月",
					"9月",
					"10月",
					"11月",
					"12月"
				]
			},
			yAxis: {
				type: "value"
			},
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130, 0, 0, 15, 200, 300],
					type: "bar",
					showBackground: true,
					backgroundStyle: {
						color: "rgba(180, 180, 180, 0.2)"
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
#birthday {
	height: 300px;
}
</style>
