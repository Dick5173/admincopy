<template lang="pug">
    div {{ count }}
      div test
        span add_feature1
        span add_feature2
        span add_feature3 
        span add_feature2_new develop hotfix test
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>
