<template>
  <div class="deal">
    <div class="ifr-wrap">
      <iframe class="ifr"
        src="http://shou.1771.com/soa/tradePageChu.action?sign=6QZN8EzpG6lFm1aH45uGfzCNEgIAfpt0iveCViGamzL%2FZw%2FerBs3Xs1K3uQrnnXPsyvtIEffbas%3D"
        marginwidth="0"
        marginheight="0"
        frameborder="0"
        allowtransparency="true">
      </iframe>
    </div>
    <Guide />
  </div>
</template>

<script>
import Guide from './components/Guide'
export default {
  name: 'deal',
  components: {
    Guide
  }
}
</script>

<style scoped lang="scss">
  .deal {
    .ifr-wrap {
      @include center;
      padding: 30px 0;
      background: #fff;
      height: 518px;
      margin-top: 30px;
      margin-bottom: 40px;
      @include br(2px);
      box-shadow: 0 0 7px rgba(0, 0, 0, 0.07);
      .ifr {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
