module.exports = {
  lintOnSave: false,
  publicPath: '/',
  devServer: {
    open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/ 
		hotOnly: true, // 热更新
    proxy: {
        '/api': {
            // 目标 API 地址
            target: 'https://www.wanandroid.com/',
            // 将主机标头的原点更改为目标URL
            changeOrigin: true,
            // 如果要代理 websockets
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
  }
};
