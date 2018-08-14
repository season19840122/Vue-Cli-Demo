const path = require('path')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  devServer: {
    // port: 8001
  },
  productionSourceMap: false,
  filenameHashing: false,
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
      title: '金币回收填单页',
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
  // 每个组件都载入 mixin
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
  // 配置 webpack
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/Users/Season/FindEndorphin/Study/VueJS/Vue-Cli-Demo/src',
        // '@': 'D:\\Project\\火马电竞\\2018\\前端 Project\\金币回收\\src',
        vue$: 'vue/dist/vue.runtime.esm.js',
        'styles': '@/assets/styles',
        'images': '@/assets/images'
      }
    }
  }
}

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