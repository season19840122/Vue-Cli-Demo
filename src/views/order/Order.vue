<template>
  <div class="home">
    <SubOrder2 />
    <Guide />
  </div>
</template>

<script>
import SubOrder2 from './components/SubOrder2'
import Guide from './components/Guide'
export default {
  name: 'order',
  components: {
    SubOrder2,
    Guide
  }
}
</script>
