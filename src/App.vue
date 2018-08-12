<template>
  <div id="app">
    app
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'app',
    components: { 
      Header,
      Footer
    }
  }  
</script>

<style lang="scss">
@import './assets/styles/base.scss';
@import './assets/styles/common.scss';

#app {
  @include border-radius;
  width: 100px;
  height: 50px;
  background: #f00;
}
</style>
