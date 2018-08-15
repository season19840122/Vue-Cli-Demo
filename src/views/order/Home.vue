<template>
  <div>
    <SubOrder1 />
    <Guide />
  </div>
</template>

<script>
import SubOrder1 from './components/SubOrder1'
import Guide from './components/Guide'
export default {
  name: 'home',
  components: {
    SubOrder1,
    Guide
  }
}
</script>
