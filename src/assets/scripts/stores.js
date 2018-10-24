import store from 'store'

export default {
  set: function (key, val, exp) {
    // 以天为单位，默认 7 天
    store.set(key, { val: val, exp: exp || 7, time: new Date().getTime() })
  },
  get: function (key) {
    var info = store.get(key)
    if (!info) { return null }
    if (new Date().getTime() - info.time > info.exp * 1000 * 60 * 60 * 24) { return null }
    return info.val
  }
}
