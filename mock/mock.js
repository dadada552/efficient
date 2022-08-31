// 首先引入Mock
let Mock = require("mockjs")
let express = require("express")
let app = express()
let login = require("./common/login.json") //登录数据
let menu = require("./common/menu.json") //菜单栏数据
let mpdats = require("./common/mpdats.json")//员工数据
let birthdays = require('./common/birthdays.json')
//获取图片验证码
app.use("/user/imgcode/uuid", function (req, res) {
	res.json(
		Mock.mock({
			code: "200",
			msg: "获取成功"
		})
	)
})

//获取登录接口
app.use("/user/login/", function (req, res) {
	res.json(
		Mock.mock({
			code: "200",
			msg: "登录成功",
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
//忘记密码
app.use("/user/forgotpwd/", function (req, res) {
	res.json(
		Mock.mock({
			code: "200",
			msg: "修改成功"
		})
	)
})
//员工数据
app.use("/user/empdats/", function (req, res) {
	res.json(Mock.mock(mpdats))
})
//员工生日
app.use("/home/birthdays/", function (req, res) {
	res.json(Mock.mock(birthdays))
})
app.listen("8089", () => {
	console.log("监听端口,8089")
})
