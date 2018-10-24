<template>
  <div class="suborder1">
    <div class="img-wrap">
      <img src="~images/img01.jpg" alt="">
    </div>
    <div class="order-wrap">
      <h3 class="caption">地下城与勇士金币回收</h3>
      <div class="contents">
        <div class="form-wrap">
          <div class="formitem">
            <label for="ipt-tel" class="lbl">选择区服</label>
            <a-cascader :options="options" @change="onChange" placeholder="选择区服" />
          </div>
          <div class="formitem">
            <label for="ipt-way" class="lbl">交易方式</label>
            <input type="radio" name="" id="ipt-way" class="ipt-radio" checked>
            <p class="p2">{{ tranType }}</p>
          </div>
          <div class="grey">
            <div class="formitem">
              <label for="ipt-account" class="lbl">单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价</label>
              <p class="p2"><span class="c1">{{ unitPrice }}</span>元/万金币</p>
            </div>
            <div class="formitem">
              <label for="ipt-num" class="lbl">回收数量</label>
              <input type="text" name="" id="ipt-num" class="ipt-text s" v-model="count" @blur="handleBlur">
              <p class="p2">万金币
                <span class="c2">(必须是 1000 的整数倍)</span>
                <span class="c2" style="color: #ff5436">{{ error }}</span>
              </p>
            </div>
            <div class="formitem">
              <label for="ipt-num" class="lbl">回收范围</label>
              <p class="p2">{{ recyleMinCnt }}-{{ recyleMaxCnt }}万金币</p>
            </div>
          </div>
          <div class="formitem">
            <label for="" class="lbl">总计获得</label>
            <p class="p2"><span class="c3">{{ total }}</span>元</p>
          </div>
          <div class="formitem">
            <button @click="handleSale" class="btn-verify" :class="{disable: isDisable}">立即出售</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suborder1',
  data () {
    return {
      options: [],
      servers: null,
      count: null,
      type: 0,
      unitPrice: '-',
      recyleMinCnt: '',
      recyleMaxCnt: '',
      error: null
    }
  },
  computed: {
    tranType () {
      if (this.type === 0) {
        return '拍卖交易'
      }
    },
    total () {
      if (this.unitPrice > 0 && this.count > 0 && !this.error) {
        // 传入总计获得
        this.$store.commit('handleGetTotal', {
          bool: true,
          val: this.unitPrice * this.count
        })
        return this.unitPrice * this.count
      } else {
        return '-'
      }
    },
    isLogin () {
      return this.$store.state.loginInfo.isLogin
    },
    isDisable () {
      if (this.isLogin) {
        if (this.total > 0) {
          return false
        } else {
          return true
        }
      }
    }
  },
  methods: {
    initPage () {
      this.getServers()
    },
    getServers () {
      axios.getServers()
        .then(res => {
          // console.log(this)
          if (res) this.options = res
        })
    },
    getQryUnitPrice (value) {
      axios.qryUnitPrice({
        zoneNo: value[0],
        serverNo: value[1]
      })
        .then(res => {
          if (res.data) {
            let data = res.data
            if (data.unitPrice > 0) {
              this.unitPrice = data.unitPrice
            }
            if (data.recyleMinCnt >= 0 && data.recyleMaxCnt >= 0) {
              this.recyleMinCnt = data.recyleMinCnt
              this.recyleMaxCnt = data.recyleMaxCnt
            }
          }
        })
    },
    handleSale () {
      if (!this.$store.state.loginInfo.isLogin) {
        this.$store.commit('handleModal', 'login')
      } else {
        if (this.total > 0) {
          // 报错订单状态
          this.$store.commit('handleOrders', {
            servers: this.servers,
            count: this.count,
            tranType: this.tranType,
            total: this.total
          })
          this.$store.commit('handleCanJump', true)
          this.$router.push({ path: 'order' })
          // reset
          this.$store.commit('handleCanJump', false)
        } else {
          this.isDisable = true
        }
      }
    },
    onChange (value, selectedOptions) {
      // 获取区服
      var arr = selectedOptions.map(n => {
        return n.label
      })
      this.servers = arr
      this.getQryUnitPrice(value)
    },
    handleBlur () {
      if (this.count > 0) {
        let result = common.utils.isMultiple(this.count, 1000)
        if (result !== '') {
          this.error = result
        }
      } else {
        this.error = '请输入正确的回收数量'
      }
    }
  },
  mounted () {
    this.initPage()
  }
}
</script>

<style scoped lang="scss">
  .suborder1 {
    @include center(1200px);
    background: #ffffff;
    height: 451px;
    @include bs;
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 30px;
    .img-wrap {
      float: left;
      width: 555px;
      height: 390px;
    }
    .order-wrap {
      margin-left: 30px;
      float: left;
      color: #8d8e99;
      .caption {
        color: #1b1f33;
        font-size: 24px;
      }
      .contents {
        margin-top: 25px;
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
          line-height: 30px;
          font-size: 14px;
          color: #626266;
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
            font-size: 16px;
            font-weight: bold;
            margin-right: 5px;
          }
          .c2 {
            color: #8d8e99;
            font-size: 12px;
            margin-left: 5px;
          }
          .c3 {
            color: #ff5436;
            font-size: 24px;
            line-height: 30px;
            font-weight: bold;
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
            width: 550px;
            overflow: hidden;
            margin-bottom: 10px;
            .lbl {
              float: left;
              width: 75px;
              height: 30px;
              line-height: 30px;
              text-align: right;
              margin-right: 20px;
              pre {
                font-size: 14px;
              }
            }
            .ipt-text {
              width: 340px;
              height: 30px;
              line-height: 28px;
              padding: 10px;
              border: 1px solid #d9dade;
              @include br(1px);
              font-size: 14px;
              margin-right: 5px;
              color: #1b1f33;
              &.s {
                width: 120px;
                height: 34px;
                line-height: 32px;
              }
            }
            .ipt-radio {
              margin-right: 5px;
              vertical-align: -2px;
            }
          }
        }
        .grey {
          width: 100%;
          height: 140px;
          background: #f7f8fa;
          padding: 20px 0;
          margin-bottom: 10px;
          .formitem {
            margin-bottom: 5px;
          }
        }
      }
      .btn-verify, .btn-cancle, .btn-check {
        width: 260px;
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
