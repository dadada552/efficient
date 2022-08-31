<template>
	<div id="birthday"></div>
</template>

<script>
import { geteBirthdays } from "../../utils/api"
import * as echarts from "echarts"
export default {
	components: {},
	data() {
		return {
			birthdaysKeys: [],
			birthdaysValue: []
		}
	},
	created() {
		geteBirthdays().then((res) => {
			this.birthdaysKeys = Object.keys(res.data.data)
			this.birthdaysValue = Object.values(res.data.data)
			let chartDom = document.getElementById("birthday")
			let myChart = echarts.init(chartDom)
			let option
			option = {
				xAxis: {
					type: "category",
					data: this.birthdaysKeys
				},
				yAxis: {
					type: "value"
				},
				series: [
					{
						data: this.birthdaysValue,
						type: "bar",
						showBackground: true,
						backgroundStyle: {
							color: "rgba(180, 180, 180, 0.2)"
						}
					}
				]
			}
			option && myChart.setOption(option)
		})
	},
	mounted() {},
	methods: {}
}
</script>

<style scoped lang="scss">
#birthday {
	height: 300px;
}
</style>
