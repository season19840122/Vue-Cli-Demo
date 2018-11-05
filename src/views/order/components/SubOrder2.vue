<template>
  <div class="suborder2">
    <h2 class="caption">确认订单</h2>
    <div class="detail-wrap">
      <div class="form-wrap">
        <div class="formitem">
          <label for="" class="lbl">游戏区服</label>
          <p class="p1">{{ orders.servers.join('/') }}</p>
          <router-link to="/" class="link">返回修改&gt;&gt;</router-link>
        </div>
        <div class="formitem">
          <label for="" class="lbl">回收数量</label>
          <p class="p1"><span class="c1">{{ orders.count }}</span>万金币</p>
        </div>
        <div class="formitem">
          <label for="ipt-num" class="lbl">交易类型</label>
          <p class="p1">{{ orders.tranType }}</p>
        </div>
        <div class="formitem">
          <label for="ipt-num" class="lbl">预计获得</label>
          <p class="p1"><span class="c1">{{ orders.total }}</span>元</p>
        </div>
      </div>
    </div>
    <h2 class="caption">填写信息</h2>
    <div class="check-wrap">
      <div class="form-wrap">
        <div class="black">
          <div class="formitem">
            <label for="ipt-role" class="lbl">游戏角色名</label>
            <input type="text" class="ipt-text" id="ipt-role" v-model="role">
            <span class="c2" v-show="!role">请输入角色名！</span>
          </div>
          <div class="formitem">
            <label for="ipt-level" class="lbl">角色等级</label>
            <input type="text" class="ipt-text" id="ipt-level" v-model="level">
            <p class="p1">35-90级</p>
            <span class="c2" v-show="verifyLevel">请输入35-90的数字！</span>
          </div>
          <div class="formitem">
            <label for="ipt-tel" class="lbl">联系手机</label>
            <input type="text" class="ipt-text" id="ipt-tel" :value="tel|num" @keyup="handleTelChange" @blur="handleBlur">
            <span class="c2" v-show="verifyTel">请输入正确的手机号！</span>
          </div>
          <div class="formitem">
            <label for="ipt-qq" class="lbl">联系QQ</label>
            <input type="text" class="ipt-text" id="ipt-qq" v-model="qq">
            <span class="c2" v-show="verifyQQ">请输入正确的QQ号！</span>
          </div>
          <div class="formitem">
            <label for="ipt-qq" class="lbl">验证码</label>
            <input name="" id="ipt-name" class="ipt-text s" v-model.trim="code" placeholder="请输入验证码">
            <img class="verify s" :src="verifyImg" alt="" @click="handleRefresh" style="background: #fff">
            <span class="c2" v-show="verifyCode">请输入验证码！</span>
          </div>
        </div>
        <div class="formitem">
          <label for="" class="lbl">到账方式</label>
          <p class="p1">支付宝到账</p>
          <a href="###" @click.prevent="handleSet" class="link">设置</a>
        </div>
        <div class="formitem">
          <label for="" class="lbl">支付宝账号</label>
          <p class="p1">{{ alipay.accountNum }}</p>
        </div>
        <div class="formitem">
          <label for="" class="lbl">支付宝姓名</label>
          <p class="p1">{{ alipay.accountName }}</p>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <p class="p2">实际到账金额<span class="c2"><strong>{{ money }}</strong>元</span></p>
      <p class="p3">其中提现手续费为{{ fee }}元</p>
      <button @click="handleRecyle" class="btn-confirm">确认回收</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suborder2',
  data () {
    return {
      error: null,
      role: null,
      level: null,
      qq: null,
      verifyImg: null,
      code: null,
      verifyTel: false,
      loginInfo: this.$store.state.loginInfo,
      tel: this.$store.state.loginInfo.tel
    }
  },
  computed: {
    money () {
      this.$store.commit('handleGetTotal', {
        bool: false,
        val: this.orders.total - this.fee
      })
      return this.orders.total - this.fee
    },
    fee () {
      let fee = this.orders.total * 0.01
      if (fee < 2) {
        fee = 2
      } else if (fee > 45) {
        fee = 45
      }
      return fee
    },
    orders () {
      return this.$store.state.orders
    },
    verifyLevel () {
      return !(this.level >= 35 && this.level <= 90)
    },
    verifyQQ () {
      return common.utils.checkQQ(this.qq)
    },
    verifyCode () {
      return common.utils.checkNull(this.code)
    },
    alipay () {
      return this.$store.state.alipay
    }
  },
  methods: {
    handleBlur () {
      var utils = common.utils
      if (!utils.checkPhone(this.tel)) {
        this.verifyTel = false
      } else {
        this.verifyTel = true
      }
    },
    // 手机号 keyup 事件
    handleTelChange (e) {
      this.tel = e.target.value
      this.$forceUpdate() // 这里必须有
    },
    doOrder () {
      axios.doOrder({
        serverName: this.orders.servers[1],
        areaName: this.orders.servers[0],
        tranType: this.orders.tranType,
        priceValues: this.orders.priceValues,
        goldOrderCnt: this.orders.goldOrderCnt,
        orderPrice: this.orders.total,
        gameName: '地下城与勇士',
        roleName: this.role,
        roleLevel: this.level,
        contactPhone: this.tel,
        qq: this.qq,
        accountType: '支付宝',
        accountName: this.alipay.accountNum,
        accountNum: this.alipay.accountName,
        arrivePrice: this.money,
        putForward: this.fee,
        code: this.code
      })
        .then(res => {
          if (res && res.success) {
            this.$router.push({ path: 'deal' })
          } else {
            this.$message.error(res.message)
          }
        })
    },
    handleRecyle () {
      if (this.role && !this.verifyLevel && !this.verifyTel && !this.verifyQQ && this.code) {
        this.doOrder()
      }
    },
    handleSet () {
      this.$store.commit('handleModal', 'set')
    },
    getSigncodeCommon () {
      this.verifyImg = `https://gamebox.swjoy.com/signcodeCommon/get?phone=${this.tel}&type=2&r=${Math.random()}`
    },
    handleRefresh () {
      var utils = common.utils
      if (!utils.checkPhone(this.tel)) {
        this.getSigncodeCommon()
      }
    },
    getAlipay () {
      this.$store.commit('handleAlipay')
    },
    saveAlipay () {
      this.$store.commit('handleAlipay', this.alipay)
    },
    /* getAlipay () {
      // 本地模拟
      if (this.loginInfo.tel) {
        axios.reflectAccount({
          accountNum: '18888888888'
        }).then(res => {
          if (res) {
            this.$store.commit('handleAlipay', res.data)
          }
        })
      }

      // 线上
      /* let obj = this.$route.query
      if(obj.phone) {
        axios.reflectAccount({
          accountNum: this.loginInfo.tel
        }).then(res => {
          if (res) {
            this.$store.commit('handleAlipay', res.data)
          }
        })
      }
    }, */
    init () {
      this.getAlipay()
    }
  },
  mounted () {
    this.init()
    this.getSigncodeCommon()
  }
}
</script>

<style scoped lang="scss">
  .suborder2 {
    @include center(1200px);
    background: #ffffff;
    height: 827px;
    @include bs;
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 10px 30px;
    position: relative;
    .caption {
      color: #212537;
      font-size: 18px;
      height: 60px;
      line-height: 58px;
      border-bottom: 1px solid #e8e9eb;
      margin-bottom: 20px;
    }
    .detail-wrap {
      padding-left: 133px;
      padding-top: 20px;
      margin-top: 20px;
      height: 170px;
      color: #8d8e99;
      background: #f7f8fa;
    }
    .check-wrap {
      color: #8d8e99;
      padding-left: 133px;
      .form-wrap {
        .black {
          .formitem {
            color: #5a5b66;
            margin-bottom: 15px;
          }
        }
      }
    }
    .p1, .p2 {
      display: inline-block;
      font-size: 14px;
      line-height: 34px;
      color: #8d8e99;
      .c1 {
        color: #ff5436;
        font-size: 16px;
        font-weight: bold;
      }
      .c2 {
        color: #ff5436;
        font-size: 14px;
        margin-left: 15px;
        strong {
          font-size: 24px;
        }
      }
    }
    .p2, .p3 {
      display: block;
      font-size: 14px;
      margin-right: 15px;
      color: #626266;
    }
    .p3 {
      margin-bottom: 12px;
      color: #ff5436;
    }
    .link {
      margin-left: 14px;
      height: 34px;
      line-height: 34px;
      color: #80a9df;
    }
    .form-wrap {
      .formitem {
        @include cf;
        overflow: hidden;
        .lbl {
          float: left;
          width: 75px;
          height: 34px;
          line-height: 34px;
          text-align: right;
          margin-right: 20px;
          pre {
            font-size: 14px;
          }
        }
        .ipt-text {
          width: 210px;
          height: 34px;
          line-height: 32px;
          padding: 10px;
          border: 1px solid #d9dade;
          @include br(1px);
          font-size: 14px;
          margin-right: 5px;
          color: #5a5b66;
          &.s {
            width: 120px;
            height: 34px;
            line-height: 32px;
          }
        }
        .c2 {
          color: #ff5436;
          font-size: 12px;
          margin-left: 5px;
        }
      }
    }
    .btn-wrap {
      position: absolute;
      right: 60px;
      bottom: 30px;
    }
    .btn-confirm {
      width: 210px;
      height: 50px;
      line-height: 50px;
      background: #ffd200;
      font-size: 16px;
      font-weight: bold;
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
  }
</style>
