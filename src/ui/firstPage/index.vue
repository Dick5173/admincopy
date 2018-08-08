<template lang="pug">
    div {{ count }}
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
