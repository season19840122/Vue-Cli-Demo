<template>
  <div class="home">
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
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // eslint-disable-next-line
      // axios({
      //   url: '/api/index.json'
      // }).then(function (res) {
      //   console.log(res)
      //   console.log(res.data)
      // })
    }
  }
}
</script>
