<template>
  <div class="home">
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
