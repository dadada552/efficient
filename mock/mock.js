// 首先引入Mock
let Mock = require("mockjs")
let express = require("express")
let app = express()
let login = require("./common/login.json") //登录数据
let menu = require("./common/menu.json") //菜单栏数据
//获取图片验证码
app.use("/user/imgcode/", function (req, res) {
	res.json(
		Mock.mock({
			code: "200",
			msg: "获取成功",
			img: Mock.Random.dataImage("50x20", Mock.mock({ regexp: /\w{4}/ }).regexp)
		})
	)
})

//获取登录接口
app.use("/user/login/", function (req, res) {
	res.json(
		Mock.mock({
			code: "200",
			msg: "获取成功",
			data: login
		})
	)
})
//获取菜单栏数据
app.use("/home/menus/", function (req, res) {
	res.json(
		Mock.mock({
			code: "200",
			msg: "获取成功",
			data: menu
		})
	)
})

app.listen("8089", () => {
	console.log("监听端口,8089")
})
