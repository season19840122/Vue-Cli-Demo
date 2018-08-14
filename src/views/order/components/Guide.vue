<template>
  <div class="guide-wrap">
    <div class="guide">
      <div class="tab-wrap">
        <a :href="'#' + item.id" class="tab" v-for="(item, index) of tabs" :key="index" :index="index" @click="handleClick"> {{ item.txt }}</a>
      </div>
      <div class="content-wrap">
        <ul>
          <li>
            <div class="content-list">
              <h3 class="caption"><i class="i-crumbs"></i>如何出售金币</h3>
              <div class="content">
                <p class="info"><span class="big">第一步：</span>手机短信快捷登录后，选择对应的区服，填写需要出货的金额后，点击“立即出售”</p>
                <img src="~images/step1-1.jpg" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'guide',
  data () {
    return {
      tabs: [
        {
          txt: '如何出售金币',
          id: 'step1'
        },
        {
          txt: '如何核对拍卖行商品',
          id: 'step2'
        },
        {
          txt: '如何提现',
          id: 'step3'
        }
      ]
    }
  },
  methods: {
    handleClick () {
      console.log(1)
    }
  }
}
</script>

<style scope lang="scss">
  .guide-wrap {
    background: #ffffff;
    .guide {
      @include center;
      padding: 20px 30px;
      .tab-wrap {
        .tab {
          font-size: 16px;
          color: $c;
        }
      }
      .content-wrap {
        ul {
          li {
            .content-wrap {

            }
          }
        }
      }
    }
  }
</style>
