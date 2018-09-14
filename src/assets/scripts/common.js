/* eslint-disable */
// import apiList from './interface'

// 常用业务方法
var business = {
  show: function() {
    // alert(1)
  },
  hide: function($obj) {
    // $obj.fadeOut(200);
    // $('.masklayer').fadeOut(200);
    $obj.hide();
    $(".masklayer").hide();
  },
  isLogin(fail, success) {
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
    success();
  },
  // 检查登录
  checkLogin(){
    // return 
  },
  getAccount() {
    // var loginGame = ClientAPI.getLoginGame(13216);
    // if (loginGame) {
    // 	return loginGame.account;
    // }
    // test
    return "13714073";
  },
  getSelect(data, flag) {
    var arr = [];
    if (flag === "qq") {
      data.forEach((element, index) => {
        var obj = {
          text: element.account,
          value: element.account
        };
        arr.push(obj);
      });
    } else {
      data.forEach((element, index) => {
        var obj = {
          text: element,
          value: element
        };
        arr.push(obj);
      });
    }
    return arr;
  }
};

// 常用 API
var utils = {
  getUrlParam: function(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; // 返回参数值
  },
  checkPhone(phone) {
    if (!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(phone)) {
      return '手机号码有误，请重填"';
    }
  },
  checkQQ(QQ) {
    if (!/^[1-9]\d{4,9}$/.test(phone)) {
      return 'QQ 有误，请重填"';
    }
  },
  checkEmail(email) {
    if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(phone)) {
      return 'E-Mail 有误，请重填"';
    }
  },
  ajax() {
    // apiList.query()
    //   .then(function (res) {
    //     console.log(res.data)
    //   })
  }
};

var config = {
  GAMEID: 112561 // DNF gameId
};

export default { business, utils, config };
