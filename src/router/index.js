import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
		redirect: "/index",
		children: [
			{
				//首页
				path: "/index",
				name: "index",
				component: () => import("../views/index/indexView.vue")
			},
			{
				//用户管理
				path: "/user",
				name: "user",
				component: () => import("../views/basis/UserView.vue")
			},
			{
				//材料管理
				path: "/material-ment",
				name: "material-ment",
				component: () => import("../views/material/MaterialView.vue")
			},
			//审批流程
			{
				path: "/approval",
				name: "approval",
				component: () => import("../views/workflow/ApprovalView.vue")
			},
			//审批类型
			{
				path: "/approval-types",
				name: "approval-types",
				component: () => import("../views/workflow/ApprovalTypes.vue")
			},
			//角色管理
			{
				path: "/roles",
				name: "roles",
				component: () => import("../views/basis/RolesView.vue")
			},
			//菜单管理
			{
				path: "/menus",
				name: "menus",
				component: () => import("../views/basis/MenusView.vue")
			},
			//职级管理
			{
				path: "/rank",
				name: "rank",
				component: () => import("../views/basis/RankView.vue")
			},
			//岗位管理
			{
				path: "/job",
				name: "job",
				component: () => import("../views/basis/JobView.vue")
			},
			//操作日志
			{
				path: "/oper",
				name: "oper",
				component: () => import("../views/basis/OperView.vue")
			},
			//登录日志
			{
				path: "/login-oper",
				name: "login-oper",
				component: () => import("../views/basis/Login-operView.vue")
			},
			//部门管理
			{
				path: "/divisional",
				name: "divisional",
				component: () => import("../views/basis/DivisionalView.vue")
			},
			//我发起的
			{
				path: "/started",
				name: "started",
				component: () => import("../views/examination/mySend.vue")
			},
			//代办
			{
				path: "/backlog",
				name: "backlog",
				component: () => import("../views/examination/todo.vue")
			},
			//已办
			{
				path: "/finished",
				name: "finished",
				component: () => import("../views/examination/done")
			},
			//企业通信
			{
				path: "/firm-comm",
				name: "firm-comm",
				component: () => import("../views/enterprise/email.vue")
			},
			//工资条
			{
				path: "/lary-sheet",
				name: "lary-sheet",
				component: () => import("../views/enterprise/payslip.vue")
			},
			//新增材料
			{
				path: "/new-material",
				name: "new-material",
				component: () => import("../views/material/NewMaterial.vue")
			}
		]
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/Login/LoginView.vue")
	}
]

const router = new VueRouter({
	routes
})

export default router
