<template>
  <div class="deal">
    <div class="ifr-wrap">
      <iframe class="ifr"
        src="http://zhifu.17uoo.com/Customer/SellGoldOrderV3.html"
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
  },
  methods: {
    init () {
      function receiveMessageFromIframePage (event) {
        // console.log(event.data);
        if (event.origin !== 'http://zhifu.17uoo.com') return
        if (event.data === 'success') {
          alert('Success')
        } else {
          console.log(event.data)
        }
      }

      window.addEventListener('message', receiveMessageFromIframePage, false)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped lang="scss">
  .deal {
    .ifr-wrap {
      @include center;
      padding: 30px 0;
      background: #fff;
      height: 530px;
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
