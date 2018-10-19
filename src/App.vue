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
</script>

<style lang="scss">
</style>
