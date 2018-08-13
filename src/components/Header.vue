<template>
  <div class="header-wrap">
    <div class="header">
      <div class="logo"></div>
      <div class="account">
        <a href="###" class="not">
          <i class="i-account"></i>立即登录
        </a>
        <div class="login"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .header-wrap {
    height: 80px;
    background: $bg;
    .header {
      @include center;
      position: relative;
      .logo {
        position: absolute;
        left: 0;
        top: 0;
        width: 209px;
        height: 80px;
        background: url(~images/logo.png);
      }
      .account {
        position: absolute;
        right: 0;
        top: 0;
        line-height: 80px;
        .not {
          color: $c;
          .i-account {
            width: 13px;
            height: 13px;
            display: inline-block;
            background: url(~images/sprite-recycle.png) no-repeat;
            margin-right: 10px;
            vertical-align: -2px;
          }
        }
      }
    }
  }
</style>
