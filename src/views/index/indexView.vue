<template>
	<div>
		<!-- 待办事项 -->
		<div class="top">
			<div class="top-left">
				<div class="top-left-title">
					<div class="title">待办事项</div>
					<div class="lookmore">查看更多</div>
				</div>
				<div class="top-left-content">
					<div class="title">
						[待办事项] 您申请的报销还未审批,请及时查看,防止过期
					</div>
					<div class="date">2022年8月20日</div>
				</div>
				<div class="top-left-nonecontent">
					<div class="title">暂无代办</div>
				</div>
			</div>
			<div class="top-right">
				<el-calendar v-model="date"> </el-calendar>
			</div>
		</div>
		<!-- 员工数据 -->
		<div class="employees">
			<div class="employees-left">
				<div class="title">员工数据</div>
				<ul class="content">
					<li>
						<p>员工总人数</p>
						<p>{{ empdats.count }}人</p>
					</li>
					<li>
						<p>正式员工</p>
						<p>{{ empdats.formal }}人</p>
					</li>
					<li>
						<p>实习生</p>
						<p>{{ empdats.exercitation }}人</p>
					</li>
					<li>
						<p>本月待入职</p>
						<p>{{ empdats.awaitrding }}人</p>
					</li>
					<li>
						<p>本月待离职</p>
						<p>{{ empdats.awaitdimission }}人</p>
					</li>
					<li>
						<p>本月待转正</p>
						<p>{{ empdats.awaitpositive }}人</p>
					</li>
				</ul>
			</div>
			<div class="employees-right">
				<div class="title">员工分布</div>
				<div><pie></pie></div>
			</div>
		</div>
		<!-- 员工生日 -->
		<div class="employees-birthday">
			<div class="title">员工生日</div>
			<div>
				<columnar></columnar>
			</div>
		</div>
	</div>
</template>

<script>
import pie from "./pieView.vue"
import columnar from "./ColumnarView.vue"
import { geteMpdats, geteBirthdays } from "@/utils/api"
export default {
	components: { pie, columnar },
	data() {
		return {
			date: new Date(),
			empdats: {},
			birthdaysKeys: [],
			birthdaysValue: [],
			flag: false
		}
	},
	created() {
		//获取员工数据
		geteMpdats().then((res) => {
			this.empdats = res.data.data
		})
		//员工分布
	},
	mounted() {},
	methods: {}
}
</script>

<style scoped lang="scss">
::v-deep .el-calendar__body {
	padding: 0;
}
::v-deep .el-calendar-table .el-calendar-day {
	height: 30px;
}
.top {
	margin-top: 20px;
	height: 300px;
	display: flex;
	justify-content: space-between;
	.top-left {
		width: 65%;
		height: 100%;
		border: 1px solid #000;
		.top-left-title {
			display: flex;
			justify-content: space-between;
			height: 50px;
			padding: 0 24px;
			border-bottom: 1px solid #000;
			.lookmore {
				color: #36f;
				line-height: 50px;
				cursor: pointer;
			}
			.title {
				line-height: 50px;
			}
		}
		.top-left-content {
			display: flex;
			justify-content: space-between;
			height: 50px;
			padding: 0 24px;
			border-bottom: 1px solid #000;
			font-size: 14px;
			line-height: 50px;
		}
		.top-left-nonecontent {
			text-align: center;
		}
		.title,
		.date {
			font-size: 14px;
		}
	}
	.top-right {
		width: 30%;
		height: 100%;
		// margin-left: 50px;
	}
}
.employees {
	display: flex;
	justify-content: space-between;
	height: 240px;
	width: 100%;
	margin-top: 80px;
	padding-right: 50px;
	.employees-left {
		border: 1px solid #000;
		height: 100%;
		width: 49%;
		.content {
			display: flex;
			flex-wrap: wrap;
			li {
				width: 33%;
				padding: 0 17px;
				border-right: 1px solid #333;
				margin-top: 30px;
				text-align: center;
			}
			li:nth-child(3n + 3) {
				border-right: 0;
			}
		}
	}
	.employees-right {
		height: 100%;
		width: 49%;
		border: 1px solid #000;
	}
}
.employees-birthday {
	// height: 300px;
	border: 1px solid #000;
	margin-top: 25px;
}
.title {
	height: 50px;
	line-height: 50px;
	font-size: 18px;
	padding-left: 10px;
	border-bottom: 1px solid #000;
}
:deep .el-calendar__button-group {
	display: none !important;
}
</style>
