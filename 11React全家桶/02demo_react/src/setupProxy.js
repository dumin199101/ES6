//新版配置代码
const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {'^/api1': ''}
        })
    ),
	app.use(
		createProxyMiddleware('/api2', {
			target: 'http://localhost:5001',
			changeOrigin: true,
			pathRewrite: {'^/api2': ''}
		})
	)

}