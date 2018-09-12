<template>
  <div class="sidebar">
    <div class="logo-wrap">
      <img class="logo" src="~images/head.png" alt="">
    </div>
    <p class="name eps">SJ_15888863973</p>
    <div class="menu-wrap">
      <ul>
        <li v-for="(item, index) of menu" :key="index" :class="{ active: index == thisIndex }">
          <div class="menu"
            :index="index"
            @click="handleClick(index)">
            <i :class="item.cls"></i>
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      menu: [
        {
          name: '订单管理',
          cls: 'i-manage'
        },
        {
          name: '个人资料',
          cls: 'i-info'
        }
      ],
      thisIndex: 0
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.judgeIndex()
    },
    judgeIndex () {
      this.$route.name === 'info' && (this.thisIndex = 1)
    },
    handleClick (index) {
      this.thisIndex = index
      if (index === 0) {
        this.$router.push({ path: '/account/manage' })
      } else {
        this.$router.push({ path: '/account/info' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    width: 200px;
    height: 700px;
    background: #ffffff;
    @include bs;
    float: left;
    font-size: 14px;
    .logo-wrap {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
      .logo {
        width: 68px;
        height: 68px;
        display: inline-block;
      }
    }
    .name {
      text-align: center;
      padding: 0 10px;
      margin-bottom: 30px;
    }
    .menu-wrap {
      ul {
        li {
          padding-left: 5px;
          &.active {
            background: #ffd200;
            .menu {
              background: #f5f5f5;
            }
          }
          .menu {
            cursor: pointer;
            height: 50px;
            line-height: 50px;
            text-indent: 46px;
            .i-manage, .i-info {
              background: url(~images/sprite-recycle.png) no-repeat 0 -38px;
              width: 16px;
              height: 16px;
              display: inline-block;
              vertical-align: -2px;
              margin-right: 13px;
            }
            .i-info {
              background-position: 0 -90px;
            }
          }
        }
      }
    }
  }
</style>
