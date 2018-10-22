<template>
  <div id="app" v-cloak>
      <Header />
      <keep-alive :include="['home', 'order']">
        <router-view />
      </keep-alive>
      <Footer />
    <Modal :currentModal="currentModal" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Modal
  },
  data () {
    return {
    }
  },
  computed: {
    currentModal () {
	    return this.$store.state.currentModal
    }
  }
}

// 百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement('script')
  hm.src = 'https://hm.baidu.com/hm.js?56f4042e545897636028d90833ddedb0'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(hm, s)
})()

</script>

<style lang="scss">
</style>
