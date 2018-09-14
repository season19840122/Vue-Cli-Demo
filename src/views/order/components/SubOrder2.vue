<template>
  <div class="suborder2">
    <h2 class="caption">确认订单</h2>
    <div class="detail-wrap">
      <div class="form-wrap">
        <div class="formitem">
          <label for="" class="lbl">游戏区服</label>
          <p class="p1">地下城与勇士/广东/广东1</p>
          <router-link to="/" class="link">返回修改&gt;&gt;</router-link>
        </div>
        <div class="formitem">
          <label for="" class="lbl">回收数量</label>
          <p class="p1"><span class="c1">15000</span>万金币</p>
        </div>
        <div class="formitem">
          <label for="ipt-num" class="lbl">交易类型</label>
          <p class="p1">拍卖交易</p>
        </div>
        <div class="formitem">
          <label for="ipt-num" class="lbl">预计获得</label>
          <p class="p1"><span class="c1">293.18</span>元</p>
        </div>
      </div>
    </div>
    <h2 class="caption">填写信息</h2>
    <div class="check-wrap">
      <div class="form-wrap">
        <div class="black">
          <div class="formitem">
            <label for="ipt-role" class="lbl">游戏角色名</label>
            <input type="text" class="ipt-text" id="ipt-role">
          </div>
          <div class="formitem">
            <label for="ipt-level" class="lbl">角色等级</label>
            <input type="text" class="ipt-text" id="ipt-level">
            <p class="p1">35-90级</p>
          </div>
          <div class="formitem">
            <label for="ipt-tel" class="lbl">联系手机</label>
            <input type="text" class="ipt-text" id="ipt-tel">
          </div>
          <div class="formitem">
            <label for="ipt-qq" class="lbl">联系QQ</label>
            <input type="text" class="ipt-text" id="ipt-qq">
          </div>
        </div>
        <div class="formitem">
          <label for="" class="lbl">到账方式</label>
          <p class="p1">支付宝到账</p>
          <a href="###" @click.prevent="handleSet" class="link">设置</a>
        </div>
        <div class="formitem">
          <label for="" class="lbl">支付宝账号</label>
          <p class="p1">158******73</p>
        </div>
        <div class="formitem">
          <label for="" class="lbl">支付宝姓名</label>
          <p class="p1">**雅</p>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <p class="p2">实际到账金额<span class="c2"><strong>293.18</strong>元</span></p>
      <p class="p3">其中提现手续费为8.00元</p>
      <button @click="handleClick" class="btn-confirm">确认回收</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suborder2',
  methods: {
    handleClick () {
      this.$router.push({ path: 'deal' })
    },
    handleSet () {
      this.$store.commit('handleModal', 'set')
    }
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
