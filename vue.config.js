const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	devServer: {
		port: 8899,
		proxy: {
			[process.env.VUE_APP_BASE_API]: {
				changeOrigin: true,
				target:
					process.env.VUE_APP_MOCK_ENABLE === "true"
						? "http://localhost:8089"
						: process.env.VUE_APP_CONSOLE_URL,
				pathRewrite: {
					["^" + process.env.VUE_APP_BASE_API]: ""
				}
			}
		}
	}
})
