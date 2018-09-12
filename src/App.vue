<template>
  <div id="app" v-cloak>
    <Header />
    <router-view />
    <Footer />
    <Modal :thisModal="'set1'" />
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
  }
}
</script>

<style lang="scss">
</style>
