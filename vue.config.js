module.exports = {
    // configureWebpack: config => {
    // 在vue-cli3.0中 
    // 1.npm run serve 时，process.env.NODE_ENV设置为'development'
    // 1.npm run build 时，process.env.NODE_ENV设置为'production'
    // 应用被部署在一个子路径上，你就需要用这个选项指定这个子路径 被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
    // 或者使用相对路劲 './' 这样打出来的包可以被部署在任意路径 (当路径为 html5 history模式时)
    publicPath: process.env.NODE_ENV === 'production' ? '/act/fintech-application-act-egg/' : '/',
    // npm run build 时，生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源的（js、css、img、fonts）的（相当于outputDir的） 目录
    assetsDir: '',
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
    devServer: {
        // proxy: 'http://10.100.153.170:9090' // 是一个指向开发环境 API 服务器的字符串 开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000
        // 如果需要增加更多的代理控制行为
        proxy: {
            // 只有碰到 /api 的才会执行代理
            '/api': {
                target: 'http://common.dm.com', // 要访问的跨域的域名
                ws: true, // 是否启用websockets
                changeOrigin: true // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
            }
            // 需要请求：http://common.dm.com/api/loginPost 实际请求是：http://localhost:3000/mock/loginPost
            // '/mock': {
            //     target: 'http://common.dm.com',
            //     ws: true,
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/mock': '/api'
            //     }
            // }
        }
    },
    pages: {
        index: {
          // page 的入口
          entry: 'src/main.js',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: '活动页面',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    productionSourceMap: false, // 生产环境不生成map文件，map文件的作用是准确的输出哪一行那一列的错误
    // chainWebpack: config => { // 打包资源分析
    //     config
    //         .plugin('webpack-bundle-analyzer')
    //         .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({ // 把px单位换算成rem单位
                        rootValue: 37.5, // 换算的基数(设计图750的根字体为75) 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
                        // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        // selectorBlackList: [".van"],// 要忽略的选择器并保留为px。
    	                propList: ["*"], //可以从px更改为rem的属性。
    	                // minPixelValue: 2 // 设置要替换的最小像素值。
                    })
                ]
            }
        }
    },
}