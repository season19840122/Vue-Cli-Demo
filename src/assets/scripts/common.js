/* eslint-disable */
// import apiList from './interface'

// 常用业务方法
var commonObj = {
  show: function () {
    // alert(1)
  },
  hide: function ($obj) {
    // $obj.fadeOut(200);
    // $('.masklayer').fadeOut(200);
    $obj.hide()
    $('.masklayer').hide()
  },
  checkLogin (fail, success) {
    // var nebulaInfo = ClientAPI.getLoginXingYun();
    // var loginGame = ClientAPI.getLoginGame(13216);
    // if(!nebulaInfo || !nebulaInfo.userId){
    //     //未登录火马
    //     fail();
    //     return;
    // } else if(!loginGame){
    //     //未登录游戏
    //     fail();
    //     return;
    // }
    // 登录火马或登录游戏
    success()
  },
  getAccount () {
    // var loginGame = ClientAPI.getLoginGame(13216);
    // if (loginGame) {
    // 	return loginGame.account;
    // }
    // test
    return '13714073'
  },
  getSelect (data, flag) {
    var arr = []
    if (flag === 'qq') {
      data.forEach((element, index) => {
        var obj = {
          text: element.account,
          value: element.account
        }
        arr.push(obj)
      })
    } else {
      data.forEach((element, index) => {
        var obj = {
          text: element,
          value: element
        }
        arr.push(obj)
      })
    }
    return arr
  }
}

// 常用 API
var api = {
  getUrlParam: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) // 匹配目标参数
    if (r != null) return unescape(r[2])
    return null // 返回参数值
  },
  ajax() {
    // apiList.query()
    //   .then(function (res) {
    //     console.log(res.data)
    //   })
  }
}

export { commonObj, api }
