<template>
  <div class="guide-wrap">
    <div class="guide">
      <div class="tab-wrap">
        <div class="wrap">
          <div class="tabbars">
            <a :href="'#' + item.id"
              class="tab"
              :class="{active: index == tabIndex}"
              v-for="(item, index) of tabs"
              :key="index"
              :index="index"
              @click="handleClick(index, item.id, $event)">
              {{ item.txt }}
              <i class="i-bd"></i>
            </a>
          </div>
          <div class="price-wrap">
            <span class="price">
              总计获得：<strong class="big">21.01</strong>元
            </span>
            <button class="btn-sale">立即出售</button>
          </div>
        </div>
      </div>
      <div class="content-wrap">
        <ul>
          <li>
            <div id="step1" class="content-list">
              <h3 class="caption"><i class="i-crumbs"></i>如何出售金币</h3>
              <div class="content">
                <p class="info"><span class="big">第一步：</span>手机短信快捷登录后，选择对应的区服，填写需要出货的金额后，点击“立即出售”</p>
                <img class="img" src="~images/step1-1.jpg" alt="">
                <p class="info"><span class="big">第二步：</span>进入个人信息确认页，填写进行金币出售的游戏角色、联系手机、联系QQ后，确认到账支付宝账号及姓名是否正确，确认无误后点击“确认回收”</p>
                <img class="img" src="~images/step1-2.jpg" alt="">
                <p class="info"><span class="big">第三步：</span>登录游戏后，等待收货商游戏角色上线，这需要几分钟，请稍等。然后打开拍卖行，找到收获商提供的对应装备进行交易。</p>
                <img class="img" src="~images/step1-3.jpg" alt="">
                <p class="info"><span class="big">第四步：</span>出售完成后，将自动提现至您的支付宝账户中。</p>
              </div>
            </div>
          </li>
          <li>
            <div id="step2" class="content-list">
              <h3 class="caption"><i class="i-crumbs"></i>如何核对拍卖行商品</h3>
              <div class="content">
                <p class="info"><span class="big">第一步：</span>点击查看收货商提供的“装备截图”和“交易密码”</p>
                <img class="img" src="~images/step2-1.jpg" alt="">
                <p class="info"><span class="big">第二步：</span>在拍卖行搜索对应物品名称</p>
                <img class="img" src="~images/step2-2.jpg" alt="">
                <p class="info"><span class="big">第三步：</span>在拍卖行搜索对应物品名称</p>
                <img class="img" src="~images/step2-3.jpg" alt="">
                <p class="info"><span class="big">第四步：</span>可使用屏幕录制软件，录制购买拍卖行商品操作，以保留证据</p>
              </div>
            </div>
          </li>
          <li>
            <div id="step3" class="content-list">
              <h3 class="caption"><i class="i-crumbs"></i>如何提现</h3>
              <div class="content-a">
                <p class="info">金币出售成功后，将在1-3个工作日内，将出售所得金额，提现至您设置好的支付宝账户中，提现手续费将由您来承担。</p>
                <p class="info">如填写的支付宝账号及姓名不匹配，将导致提现失败，请仔细确认提现信息。</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'guide',
  data () {
    return {
      tabIndex: 0,
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
    handleClick (index, id, $event) {
      this.tabIndex = index
      this.getAnchor(id)
    },
    getFix () {
      var top = $('.guide-wrap').offset().top
      $(window).on('scroll', function () {
        if ($(window).scrollTop() > top) {
          $('.tab-wrap').addClass('fixed')
          $('.content-wrap').addClass('mt')
        } else {
          $('.tab-wrap').removeClass('fixed')
          $('.content-wrap').removeClass('mt')
        }
      })
    },
    getAnchor (id) {
      // eslint-disable-next-line
      $('html, body').stop().animate({scrollTop: ($('#' + id).offset().top - 100)}, 1000)
    },
    init () {
      this.getFix()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
  .guide-wrap {
    background: #ffffff;
    .guide {
      @include center;
      padding: 20px 30px;
      position: relative;
      .tab-wrap {
        background: #fff;
        &.fixed {
          position: fixed;
          width: 100%;
          height: 60px;
          left: 0;
          top: 0;
          z-index: 300;
          @include bs(1px);
          .wrap {
            .tabbars {
              padding: 20px 30px;
              height: 60px;
            }
            .price-wrap {
              display: block;
            }
          }
        }
        .wrap {
          width: 1200px;
          margin: 0 auto;
          position: relative;
          .tabbars {
            width: 1200px;
            // padding: 0 30px;
            margin: 0 auto;
            height: 40px;
            .tab {
              font-size: 16px;
              color: $c;
              margin-right: 55px;
              height: 40px;
              line-height: 30px;
              display: inline-block;
              position: relative;
              &.active {
                .i-bd {
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  width: 100%;
                  height: 4px;
                  background: #ffd200;
                  @include br(1px);
                }
              }
            }
          }
          .price-wrap {
            position: absolute;
            right: 0;
            top: 4px;
            display: none;
            .price {
              font-size: 14px;
              margin-right: 10px;
              .big {
                font-size: 24px;
                color: #ff5436;
              }
            }
            .btn-sale {
              width: 260px;
              height: 50px;
              line-height: 50px;
              @include br(1px);
              font-size: 16px;
              font-weight: bold;
              background: #ffd200;
              color: #212537;
            }
          }
        }
      }
      .content-wrap {
        margin-top: 20px;
        &.mt {
          margin-top: 60px;
        }
        ul {
          li {
            margin-bottom: 40px;
            overflow: hidden;
            .content-list {
              .caption {
                font-size: 20px;
                font-weight: bold;
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
                background: #f2f3f5;
                padding: 0 20px;
                .info {
                  font-size: 16px;
                  line-height: 60px;
                  height: 60px;
                  .big {
                    font-weight: bold;
                  }
                }
                .img {
                  display: block;
                }
              }
              .content-a {
                border-top: 1px solid #f2f3f5;
                padding: 18px 20px;
                .info {
                  font-size: 16px;
                  line-height: 40px;
                  height: 40px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
