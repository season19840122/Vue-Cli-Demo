<template>
  <div class="account">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'account',
  components: {
    Sidebar
  }
}
</script>

<style scoped lang="scss">
  .account {
    @include center;
    margin-top: 20px;
    margin-bottom: 100px;
    overflow: hidden;
  }
</style>
