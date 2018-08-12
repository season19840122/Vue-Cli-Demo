module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ?
    '/' :
    '/',
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
    // ,
    // account: {
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
  configureWebpack: {
    // plugins: [
    //   new MyAwesomeWebpackPlugin()
    // ]
  }
}