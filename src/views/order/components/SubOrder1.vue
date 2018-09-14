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
            <div class="picker"></div>
          </div>
          <div class="formitem">
            <label for="ipt-way" class="lbl">交易方式</label>
            <input type="radio" name="" id="ipt-way" class="ipt-radio">
            <p class="p2">拍卖行交易</p>
          </div>
          <div class="grey">
            <div class="formitem">
              <label for="ipt-account" class="lbl">单&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价</label>
              <p class="p2"><span class="c1">0.0540</span>元/万金币</p>
            </div>
            <div class="formitem">
              <label for="ipt-num" class="lbl">回收数量</label>
              <input type="text" name="" id="ipt-num" class="ipt-text s">
              <p class="p2">万金币<span class="c2">(必须是1000的整数倍)</span></p>
            </div>
            <div class="formitem">
              <label for="ipt-num" class="lbl">回收范围</label>
              <p class="p2">5000-30000万金币</p>
            </div>
          </div>
          <div class="formitem">
            <label for="" class="lbl">总计获得</label>
            <p class="p2"><span class="c3">21.01</span>元</p>
          </div>
          <div class="formitem">
            <button @click="handleClick" class="btn-verify">立即出售</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'suborder1',
  methods: {
    handleClick () {
      // if (login) {
      //   this.$store.commit('handleModal', 'set')
      // } else {
      this.$router.push({ path: 'order' })
      // }
    }
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
