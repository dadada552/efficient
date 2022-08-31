import http from "./http"
/**获取侧边栏数据 */
const getMenu = () => {
	let data = http.get("/home/menus")
	return data
}
/**获取图片验证码 */
const getImg = () => {
	let data = http.get("/user/imgcode/uuid/")
	return data
}
/**登录 */
const login = (msg) => {
	let data = http.get("/user/login/", msg)
	return data
}
/**忘记密码 */
const forgetPwd = (msg) => {
	let data = http.post("/user/forgotpwd/", msg)
	return data
}
/**获取员工数据 */
const geteMpdats = () => {
	let data = http.get("/user/empdats/")
	return data
}
/**获取员工生日 */
const geteBirthdays = () => {
	let data = http.get("/home/birthdays/")
	return data
}
/**获取用户列表信息 */
const getSystemusers = () => {
	let data = http.get("/home/systemusers/")
	return data
}
/**添加用户 */
const addSystemusers = (msg) => {
	console.log(msg)
	let data = http.post("/home/systemusers/", msg)
	return data
}
/**搜索 */
const searchUser = (msg) => {
	let data = http.post("/home/search/", msg)
	return data
}
export {
	getMenu,
	getImg,
	login,
	forgetPwd,
	geteMpdats,
	geteBirthdays,
	getSystemusers,
	addSystemusers,
	searchUser
}
