import axios from "axios"
import { MessageBox } from "element-ui"
import { getToken } from "./auth"
const app = axios.create({
	baseURL: "http://localhost:8089",
	timeout: 3000,
	headers: {
		"Content-Type": "application/json:charset=utf-8"
	},
	withCredentials: true
})

app.interceptors.request.use(
	(config) => {
		config.headers.token = getToken()
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

app.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		let title = ""
		let msg = ""
		if (error && error.response) {
			msg = error.response.data.message
			switch (error.response.status) {
				case 400:
					title = "错误请求"
					break
				case 401:
					title = "资源未授权"
					break
				case 403:
					title = "禁止访问"
					break
				case 404:
					title = "未找到所请求的资源"
					break
				case 405:
					title = "不允许使用该方法"
					break
				case 408:
					title = "请求超时"
					break
				case 500:
					title = "内部服务器错误"
					break
				case 501:
					title = "未实现"
					break
				case 502:
					title = "网关错误"
					break
				case 503:
					title = "服务不可用"
					break
				case 504:
					title = "网关超时"
					break
				case 505:
					title = "HTTP版本不受支持"
					break
				default:
					title = error.response.status
			}
			return MessageBox.alert(message, title, {
				type: "warning"
			})
		} else {
			return MessageBox.alert("请联系系统管理或者稍后重试！", "未知错误", {
				type: "error"
			})
		}
	}
)
console.log(http, "112")
export default http
