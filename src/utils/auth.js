import Cookies from "js-cookie"

let token = "token"
//获取token
function getToken() {
	return Cookies.get(token)
}
//设置token
function setToken(value) {
	Cookies.set(token, value)
}
//删除token
function removeToken() {
	Cookies.remove(token)
}

export { getToken, setToken, removeToken }
