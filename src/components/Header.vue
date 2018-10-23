<template>
  <div class="header-wrap">
    <div class="header">
      <router-link to="/" class="logo"></router-link>
      <div class="account">
        <a href="###" @click.prevent="handleLogin" class="not" v-if="!loginInfo.isLogin">
          <i class="i-account"></i>立即登录
        </a>
        <div class="login" v-else>
          <span class="user">HI,{{ loginInfo.nickname }}</span>
          <router-link to="/account/info" class="info">个人中心</router-link>
          <span class="line">|</span>
          <a href="###" class="exit" @click="handleExit">退出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
    }
  },
  computed: {
    loginInfo () {
      return this.$store.state.loginInfo
    }
  },
  methods: {
    handleLogin () {
      this.$store.commit('handleModal', 'login')
    },
    handleExit () {
      this.$store.commit('handleExit')
    }
  }
}
</script>

<style scoped lang="scss">
  .header-wrap {
    height: 80px;
    background: $bg;
    @include bs;
    .header {
      @include center;
      position: relative;
      .logo {
        position: absolute;
        left: 0;
        top: 0;
        width: 209px;
        height: 80px;
        background: url(~images/logo.png) no-repeat;
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
        .login {
          font-size: 14px;
          .user, .info {
            color: #212537;
            margin-right: 30px;
          }
          .info {
            margin-right: 0;
          }
          .line {
            color: #d9dadc;
            margin-left: 15px;
            margin-right: 15px;
          }
          .exit {
            color: #ffba66;
          }
        }
      }
    }
  }
</style>
