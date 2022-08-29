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
				path: "/index",
				name: "index",
				component: () => import("../views/index/indexView.vue")
			},
			{
				path: "/user",
				name: "user",
				component: () => import("../views/basis/UserView.vue")
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
