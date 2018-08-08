<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "~normalize.css";
  @import 'assets/scss/variable';

  @import 'assets/scss/base';
  @import 'assets/scss/el';

</style>
