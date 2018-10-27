<template>
  <div class="info">
    <div class="content-wrap">
      <h3 class="caption"><i class="i-crumbs"></i>如何提现？</h3>
      <p class="content">金币出售成功后，将在1-3个工作日内，将出售所得金额，提现至您设置好的支付宝账户中，提现手续费将由您来承担。</p>
      <p class="content">如填写的支付宝账号及姓名不匹配，将导致提现失败，请仔细确认提现信息。</p>
    </div>
    <div class="extract-wrap">
      <h3 class="caption">修改提现账户</h3>
      <div class="form-wrap">
        <div class="formitem">
          <label for="" class="lbl">提现方式</label>
          <div class="btn-wrap fl" :class="{ active: isActive }" @click="handleClick">
            <button class="btn-way"><i class="i-alipay"></i>支付宝支付</button>
            <i class="i-angle"></i>
          </div>
        </div>
        <div class="formitem">
          <label for="ipt-account" class="lbl">支付宝账户</label>
          <input type="text" name="" id="ipt-account" class="ipt-text" v-model="alipay.accountNum">
        </div>
        <div class="formitem">
          <label for="ipt-name" class="lbl">支付宝姓名</label>
          <input type="text" name="" id="ipt-name" class="ipt-text" v-model="alipay.accountName">
        </div>
        <div class="formitem">
          <label for="" class="lbl"></label>
          <button class="btn-save" @click="saveAlipay">保存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      isActive: true,
      loginInfo: this.$store.state.loginInfo
    }
  },
  computed: {
    alipay () {
      return this.$store.state.alipay
    }
  },
  methods: {
    handleClick () {
      this.isActive = !this.isActive
    },
    getAlipay () {
      this.$store.commit('handleAlipay')
    },
    saveAlipay () {
      this.$store.commit('handleAlipay', this.alipay)
    },
    init () {
      this.getAlipay()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
  .info {
    width: 980px;
    height: 700px;
    background: #ffffff;
    @include bs;
    float: right;
    font-size: 14px;
    padding: 50px 58px;
    .content-wrap {
      overflow: hidden;
      padding-bottom: 30px;
      border-bottom: 1px solid #f2f3f5;
      margin-bottom: 40px;
      .caption {
        font-size: 16px;
        font-weight: normal;
        padding-left: 20px;
        margin-bottom: 20px;
        height: 22px;
        line-height: 22px;
        position: relative;
        .i-crumbs {
          position: absolute;
          left: 0;
          top: 0;
          width: 5px;
          height: 22px;
          background: #ffd200;
          @include br(1px);
        }
      }
      .content {
        font-size: 14px;
        line-height: 30px;
      }
    }
    .extract-wrap {
      .caption {
        margin-bottom: 30px;
        font-size: 16px;
        font-weight: normal;
      }
      .btn-wrap {
        width: 160px;
        height: 34px;
        position: relative;
        &.active {
          .btn-way {
            border: 2px solid #ffd50f;
            line-height: 30px;
            .i-alipay {
              vertical-align: -3px;
            }
          }
          .i-angle {
            cursor: pointer;
            position: absolute;
            right: 2px;
            bottom: 2px;
            width: 15px;
            height: 14px;
            background: url(~images/sprite-recycle.png) no-repeat 0 -196px;
          }
        }
        .btn-way {
          background: #ffffff;
          text-align: center;
          width: 100%;
          height: 34px;
          line-height: 32px;
          border: 1px solid #dcdcdc;
          .i-alipay {
            width: 18px;
            height: 18px;
            display: inline-block;
            background: url(~images/sprite-recycle.png) no-repeat 0 -143px;
            vertical-align: -2px;
            margin-right: 5px;
          }
        }
      }
      .form-wrap {
        .formitem {
          @include cf;
          height: 34px;
          margin-bottom: 16px;
          .lbl {
            float: left;
            width: 96px;
            height: 34px;
            line-height: 34px;
            text-align: right;
            margin-right: 10px;
          }
          .ipt-text {
            width: 210px;
            height: 34px;
            line-height: 34px;
            padding: 10px;
            border: 1px solid #dcdcdc;
          }
          .btn-save {
            width: 92px;
            height: 34px;
            line-height: 34px;
            background: #ffd200;
            font-size: 16px;
            @include br(1px);
          }
        }
      }
    }
  }
</style>
