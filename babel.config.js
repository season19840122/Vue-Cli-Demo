module.exports = {
  presets: [
    ['@vue/app', {
      'useBuiltIns': 'entry' // 每个文件中使用 polyfill 时，仅在入口文件中加载相同的 polyfill 一次。
    }]
  ]
}
