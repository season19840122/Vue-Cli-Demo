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
      filename: '填单页1.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '金币回收填单页1',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    order1: {
        // order1 的入口
        entry: 'src/order1.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: '填单页2.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: '金币回收填单页2',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'order1']
    }
  },
  configureWebpack: {
    // plugins: [
    //   new MyAwesomeWebpackPlugin()
    // ]
  }
}