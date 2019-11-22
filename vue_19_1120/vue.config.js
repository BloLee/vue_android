module.exports = {
  publicPath: '/',
  //是否使用 ESLint 
  lintOnSave: false,   
  // 打包之后生成的文件目录名称
  outputDir: "build",  
  // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir:'assets',  
  //默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,  
  css:{
    loaderOptions:{
      postcss:{
        plugins:[
          // require("postcss-plugin-px2rem")({
          //   rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
          //   // unitPrecision: 5, //允许REM单位增长到的十进制数字。
          //   //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
          //   // propBlackList: [], //黑名单
          //   exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          //   // selectorBlackList: [], //要忽略并保留为px的选择器
          //   // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
          //   // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
          //   mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
          //   minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0 
          // })
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 375,
            unitPrecision: 3,
            propList: ["*"],
            viewportUnit: "vw",       //指定需要转换成的视窗单位，默认vw
            fontViewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['.hib'],    // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1,         // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
            mediaQuery: false,
            replace: true,    //替换包含vw的规则
            exclude: /(\/|\\)(node_modules)(\/|\\)/,   //（数组或正则表达式）忽略某些文件
          })
        ]
      }
    }
  },
  //调整 webpack 配置
  // configureWebpack: config => {
  //   assetsPublicPath:"./",
  // },
  //代理地址配置
  devServer: {
    //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/ 
    open: true, 
		hotOnly: true, // 热更新
    proxy: {
        '/v2': {
            // 目标 API 地址
            target: 'https://douban.uieee.com/v2/',
            // 将主机标头的原点更改为目标URL
            changeOrigin: true,
            // 如果要代理 websockets
            ws: true,
            pathRewrite: {
              '^/v2': ''
            }
        }
    }
  },
};
