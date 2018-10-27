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
  },
  methods: {
    getLogin () {
      // 本地模拟
      this.$store.commit('handleLogin', {
        isLogin: true,
        nickname: '火荣',
        tel: '18888888888'
      })

      // 线上
      /* let obj = this.$route.query
      if (obj.nickName) {
        this.$store.commit('handleLogin', {
          isLogin: true,
          nickname: obj.nickName,
          tel: obj.phone
        })
        this.$store.commit('handleModal', null)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/')
        this.$router.push({
          path: redirect
        })
      } */
    },
    init () {
      this.getLogin()
    }
  },
  mounted () {
    this.init()
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
[v-cloak] {
  display: none;
}
</style>
