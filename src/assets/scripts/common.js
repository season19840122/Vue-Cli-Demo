/* eslint-disable */
// import apiList from 'scripts/axios/interface.js'

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
  checkNull(str) {
    if (!/\s*$/.test(str)) {
      return '值不能为空，请重填';
    }
  },
  checkPhone(phone) {
    if (!/^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[0-9])[0-9]{8}$/.test(phone)) {
      return '手机号码有误，请重填';
    }
  },
  checkQQ(QQ) {
    if (!/^[1-9]\d{4,9}$/.test(phone)) {
      return 'QQ 有误，请重填';
    }
  },
  checkEmail(email) {
    if (!/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(phone)) {
      return 'E-Mail 有误，请重填';
    }
  },
  // 将浮点数点左边的数每三位添加一个逗号
  commafy(num){
  	return num && num
  		.toString()
  		.replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2){
  			return $2 + ',';
      });
    // or 这项黑科技
    return num && num.toLocaleString('en-US');
  },
  // 60 秒倒计时
  countDown(time) {
    var flag = setInterval(function(time){
      time--
      if(time === 0) {
        clearInterval(flag)
        return '获取验证码'
      }
      return time
    }, 1000)
  },
  // 判断一个数是另一个数的整数倍
  isMultiple(value, multiple) {
    if(value % multiple !== 0) {
      return `请输入 ${multiple} 的整数倍`
    } else {
      return null
    }
  }
  // ajax: apiList
};

var config = {
  GAMEID: 112561 // DNF gameId
};

export default { business, utils, config };
