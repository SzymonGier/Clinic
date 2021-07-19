<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import authService from "./services/auth.service";

export default {
  name: 'App',
  components: {},
  mounted() {
    authService.check();
  }
}
</script>

<style lang="sass">
  body, html
    height: 100%
    width: 100%

  body
    display: flex
    align-items: center
    justify-content: center

  #app
    width: 100%
    height: 100%
</style>
