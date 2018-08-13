<template>
  <div class="header-wrap">
    <div class="header">
      <div class="logo"></div>
      <div class="account">
        <div class="not">
          <i class="i-account"></i>立即登录
        </div>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
          .i-account {

          }
        }
      }
    }
  }
</style>
