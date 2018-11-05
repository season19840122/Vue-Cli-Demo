const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://static.huoma.cn/gamebox_web/dnfhs/' : '/',
  // assetsDir: 'assets',
  devServer: {
    // port: 8001
    historyApiFallback: true,
    proxy: 'https://gamebox.swjoy.com/' // 线上
    // proxy: 'http://127.0.0.1:8080/' // 线上
    // proxy: { // 本地，设置这个参数可以避免跨域
    //   '/api': { // 这个表示 target 下的路径，如果后端路径没有叫这个建议直接设置 proxy: 'https://gamebox.swjoy.com'
    //     target: 'http://127.0.0.1:8080',
    //     pathRewrite: {
    //       '^/api': '/mock' // rewrite path
    //     }
    //     // ,ws: true,
    //     // changeOrigin: true
    //   }
    // }
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
      // title: '金币回收填单页',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // ,account: {
    //   // account 的入口
    //   entry: 'src/account.js',
    //   // 模板来源
    //   template: 'public/index.html',
    //   // 在 dist/index.html 的输出
    //   filename: '个人中心.html',
    //   // 当使用 title 选项时，
    //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //   title: '个人中心',
    //   // 在这个页面中包含的块，默认情况下会包含
    //   // 提取出来的通用 chunk 和 vendor chunk。
    //   chunks: ['chunk-vendors', 'chunk-common', 'account']
    // }
  },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     'patterns': [
  //       path.resolve(__dirname, 'src/assets/styles/*.scss')
  //     ]
  //   }
  // },
  productionSourceMap: false,
  filenameHashing: false,
  // 每个组件都载入 mixin
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  css: { // 配置高于 chainWebpack 中关于 css loader 的配置
    // modules: true, // 是否开启支持 ‘foo.module.css’ 样式
    // extract: true, // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    sourceMap: false, // 是否在构建样式地图，false 将提高构建速度
    loaderOptions: { // css 预设器配置项
      css: {
        localIdentName: '[name]',
        camelCase: 'only'
      },
      stylus: {}
    }
  },
  // 配置 webpack
  configureWebpack: {
    resolve: {
      alias: {
        // '@': '/Users/Season/FindEndorphin/Study/VueJS/Vue-Cli-Demo/src',
        '@': 'D:\\Project\\火马电竞\\2018\\前端 Project\\金币回收\\src',
        vue$: 'vue/dist/vue.runtime.esm.js',
        'styles': '@/assets/styles',
        'images': '@/assets/images',
        'scripts': '@/assets/scripts'
      }
    }
  }
}

// 引用公共的 sccs 文件
function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/mixin.scss'),
        path.resolve(__dirname, './src/assets/styles/variable.scss')
      ]
    })
}
