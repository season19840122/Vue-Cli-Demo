<template>
  <div class="modal-wrap">
    <div class="masklayer" v-if="mask || currentModal"></div>
    <!-- 登录弹层 -->
    <div class="dialog-wrap" v-if="currentModal == 'login'">
      <i class="i-close" @click="closeModal"></i>
      <h3 class="caption">手机快捷登录</h3>
      <div class="contents">
        <div class="form-wrap">
          <div class="formitem">
            <input type="text" name="" id="ipt-tel" class="ipt-text" :value="tel|num" @keyup="handleTelChange" @blur="handleBlur" placeholder="请输入手机号">
          </div>
          <div class="formitem" v-if="show">
            <input name="" id="ipt-name" class="ipt-text s" v-model.trim="verifycode" placeholder="请输入验证码">
            <img class="verify s" :src="verifyImg" alt="" @click="handleRefresh" style="background: #fff">
          </div>
          <div class="formitem" style="margin-bottom: 0;">
            <input type="text" name="" id="ipt-name" class="ipt-text s" v-model.trim="sms" placeholder="请输入短信验证码">
            <button class="btn-verify s" :class="{ 'disable': !flag }" @click="flag && handleCountdown()">{{ countdown }}</button>
          </div>
          <div class="formitem" style="margin-bottom: 0; height: 40px;">
            <p class="p1 error" v-if="error"><i class="i-error"></i>{{ error }}</p>
          </div>
          <div class="formitem" style="margin-bottom: 0;">
            <button class="btn-verify" @click="handleSave">保存</button>
          </div>
          <div class="formitem">
            <p class="p1 tc">登录即视为同意<a href="https://passport.kedou.com/front/noLogin/agreeMent.jsp" target="_blank" class="protocol">《用户使用协议》</a></p>
          </div>
        </div>
      </div>
    </div>
    <!-- 提现设置 -->
    <div class="dialog-wrap set" v-if="currentModal == 'set'">
      <i class="i-close" @click="closeModal"></i>
      <h3 class="caption">设置提现账户</h3>
      <div class="contents">
        <div class="form-wrap">
          <div class="formitem">
            <label for="ipt-tel" class="lbl">提现方式</label>
            <p class="p2"><i class="i-alipay"></i>支付宝</p>
          </div>
          <div class="formitem">
            <label for="ipt-account" class="lbl">支付宝账户</label>
            <input type="text" name="" id="ipt-account" class="ipt-text m" placeholder="" v-model="alipay.accountNum">
          </div>
          <div class="formitem">
            <label for="ipt-name" class="lbl">支付宝姓名</label>
            <input type="text" name="" id="ipt-name" class="ipt-text m" placeholder="" v-model="alipay.accountName">
          </div>
          <div class="formitem">
            <button class="btn-verify m" @click="saveAlipay">保存</button>
            <button class="btn-cancle m" @click="closeModal">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 提现 -->
    <div class="dialog-wrap withdraw" v-if="currentModal == 'withdraw'">
      <i class="i-close" @click="closeModal"></i>
      <div class="contents">
        <div class="form-wrap">
          <div class="formitem">
            <label class="lbl">订单号</label>
            <p class="p2">{{ withdraw.orderNumber }}</p>
          </div>
          <div class="formitem">
            <label class="lbl">游戏区服</label>
            <p class="p2">{{ withdraw.gameName }}/{{ withdraw.areaName }}/{{ withdraw.serverName }}</p>
          </div>
          <div class="formitem">
            <label class="lbl">成交数量</label>
            <p class="p2"><span class="c1">{{ withdraw.goldRealCnt }}</span>万金币</p>
          </div>
          <div class="formitem">
            <label class="lbl">成交金额</label>
            <p class="p2">{{ withdraw.goldRealCnt }}元</p>
          </div>
          <div class="formitem">
            <label class="lbl">手续费</label>
            <p class="p2">{{ withdraw.commissionPrice }}元</p>
          </div>
          <div class="formitem">
            <label class="lbl">到账金额</label>
            <p class="p2"><span class="c1">{{ withdraw.arrivePrice }}</span>元</p>
          </div>
          <div class="formitem" style="margin-bottom: 10px;">
            <label class="lbl">提现方式</label>
            <p class="p2"><i class="i-alipay"></i>支付宝</p>
          </div>
          <div class="formitem" style="margin-bottom: 20px;">
            <label for="ipt-account" class="lbl">支付宝账户</label>
            <input type="text" name="" id="ipt-account" class="ipt-text m" placeholder="" v-model="withdraw.accountNum">
          </div>
          <div class="formitem" style="margin-bottom: 20px;">
            <label for="ipt-name" class="lbl">支付宝姓名</label>
            <input type="text" name="" id="ipt-name" class="ipt-text m" placeholder="" v-model="withdraw.accountName">
          </div>
          <div class="formitem">
            <button class="btn-verify m" @click="handleWithdraw(withdraw.orderNumber)">提现</button>
            <button class="btn-cancle m" @click="closeModal">取消</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 查看详情 -->
    <div class="dialog-wrap check" v-if="currentModal == 'check'">
      <i class="i-close" @click="closeModal"></i>
      <div class="contents">
        <p class="p3">订单交易已完成，请前往订单列表查看。</p>
      </div>
      <div class="btn-wrap">
        <button class="btn-check m" @click="handleManage">前往查看</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data () {
    return {
      mask: null,
      tel: '',
      verifyImg: null,
      show: false,
      verifycode: null,
      sms: null,
      countdown: '获取验证码',
      flag: true,
      error: null
    }
  },
  computed: {
    currentModal () {
      return this.$store.state.currentModal
    },
    withdraw () {
      return this.$store.state.withdraw
    },
    alipay () {
      return this.$store.state.alipay
    }
  },
  methods: {
    getSigncodeCommon () {
      this.verifyImg = `https://gamebox.swjoy.com/signcodeCommon/get?phone=${this.tel}&type=1&r=${Math.random()}`
    },
    getSendPhoneCode () {
      axios.sendPhoneCode({
        phone: this.tel,
        picCode: this.verifycode
      }).then(res => {
        // countdown
      }).catch(error => {
        console.log(error)
      })
    },
    getPhoneLogin () {
      axios.phoneLogin({
        phone: this.tel,
        numCode: this.sms,
        url: `https://gamebox.swjoy.com/web/recyle${this.$route.path}` // 正式
        // url: `http://localhost:8080//#/${this.$route.path}` // 本地
      })
        .then(res => {
          console.log(res)
          // 使用箭头函数可以绑定 this 到 vm 实例
          if (res && res.success) {
            // 正式
            let href = res.data
            // let href = `https://gamebox.swjoy.com/phoneLogin?phone=${this.tel}&numCode=${this.sms}&url=http://localhost:8080/#/${this.$route.path}`
            // 本地
            // let href = `http://localhost:8080/#/${this.$route.path}?nickName=火荣&phone=18888888888`
            // console.log(href)
            document.location.href = href
          } else {
            this.$message.error(res.message)
          }
        })
    },
    closeModal () {
      this.mask = false
      this.$store.commit('handleModal', null)
    },
    handleBlur () {
      var utils = common.utils
      if (!utils.checkPhone(this.tel)) {
        this.error = null
        this.show = true
        this.getSigncodeCommon()
      } else {
        this.error = utils.checkPhone(this.tel)
        this.show = false
        this.verifycode = null
      }
    },
    // 手机号 keyup 事件
    handleTelChange (e) {
      this.tel = e.target.value
      this.$forceUpdate() // 这里必须有
    },
    handleRefresh () {
      this.getSigncodeCommon()
    },
    handleCountdown () {
      if (this.tel && this.verifycode) {
        // 倒计时
        this.countdown = 60
        this.flag = false
        let t = setInterval(() => {
          this.countdown--
          if (this.countdown === 0) {
            clearInterval(t)
            this.countdown = '获取验证码'
            this.flag = true
          }
        }, 1000)
        this.getSendPhoneCode()
      } else {
        this.error = '值不能为空，请重填'
      }
    },
    handleSave () {
      var utils = common.utils
      if (this.tel && this.sms) {
        if (!utils.checkPhone(this.tel)) {
          this.error = null
          this.show = true
          if (this.verifycode) {
            // ajax
            this.getPhoneLogin()
          } else {
            this.error = '验证码不能为空，请重填'
          }
        } else {
          this.error = utils.checkPhone(this.tel)
        }
      } else {
        this.error = '值不能为空，请重填'
      }
    },
    saveAlipay () {
      this.$store.commit('handleAlipay', this.alipay)
      this.closeModal()
    },
    handleWithdraw (orderNumber) {
      axios.extractSmt({
        orderNumber: orderNumber
      }).then(res => {
        if (res) {
          if (res.success) {
            this.$message.success('提现成功')
            this.closeModal()
            this.saveAlipay()
          } else {
            this.$message.error(res.message)
          }
        }
      })
    },
    handleManage () {
      this.$router.push({ path: '/account/manage' })
      this.$store.commit('handleModal', null)
    }
  }
}
</script>

<style lang="scss">
.modal-wrap {
  // 弹层
  .masklayer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: #000;
    opacity: 0.5;
  }
  $w: 460px;
  $h: 470px;
  .dialog-wrap {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
    border-radius: 2px;
    width: $w;
    height: $h;
    background: #fff;
    @include br(2px);
    @include bs;
    &.set {
      height: 370px;
    }
    &.check {
      height: 261px;
    }
    &.withdraw {
      height: 563px;
      .contents {
        .form-wrap {
          .formitem {
            margin-bottom: 0;
          }
        }
      }
    }
    .i-close {
      background: url(~images/sprite-recycle.png) no-repeat 0 -504px;
      width: 14px;
      height: 14px;
      position: absolute;
      right: 19px;
      top: 20px;
      cursor: pointer;
    }
    .caption {
      margin-top: 50px;
      color: #212537;
      font-size: 24px;
      font-weight: normal;
      text-align: center;
    }
    .contents {
      padding: 35px 60px;
      color: #8d8e99;
      &.s {
        padding: 20px 17px;
      }
      .p1 {
        font-size: 12px;
        line-height: 40px;
        &.error {
          color: #ec5454;
        }
        .i-error {
          background: url(~images/sprite-recycle.png) no-repeat 0 -548px;
          width: 12px;
          height: 12px;
          display: inline-block;
          vertical-align: -1px;
          margin-right: 6px;
        }
        .protocol {
          color: #518bdb;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .p2 {
        display: inline-block;
        line-height: 34px;
        .i-alipay {
          width: 18px;
          height: 18px;
          display: inline-block;
          background: url(~images/sprite-recycle.png) no-repeat 0 -143px;
          vertical-align: -3px;
          margin-right: 5px;
        }
        .c1 {
          color: #ff5436;
        }
      }
      .p3 {
        font-size: 16px;
        text-align: center;
        margin-top: 50px;
      }
      .form-wrap {
        .formitem {
          @include cf;
          width: 340px;
          overflow: hidden;
          margin-bottom: 20px;
          .lbl {
            float: left;
            width: 96px;
            height: 34px;
            line-height: 34px;
            text-align: right;
            margin-right: 10px;
          }
          .ipt-text {
            width: 340px;
            height: 42px;
            line-height: 22px;
            padding: 10px;
            border: 1px solid #d9dade;
            @include br(2px);
            font-size: 14px;
            &.s {
              width: 220px;
            }
            &.m {
              width: 230px;
              height: 34px;
              line-height: 32px;
            }
          }
        }
      }
    }
    .verify, .btn-verify, .btn-cancle, .btn-check {
      cursor: pointer;
      float: right;
      width: 340px;
      height: 42px;
      line-height: 42px;
      background: #ffd200;
      font-size: 14px;
      color: #212537;
      @include br(2px);
      &.s {
        width: 100px;
      }
      &.m {
        float: left;
        width: 160px;
      }
      &.disable {
        color: #b3b3ba;
        background: #eeeeee;
      }
    }
    .btn-cancle {
      margin-left: 16px;
      background: none;
      color: #212537;
      border: 1px solid #cecfd9;
      line-height: 40px;
    }
    .btn-check {
      &.m {
        float: none;
      }
    }
    .btn-wrap {
      text-align: center;
    }
  }
}
</style>
