<template lang="pug">
  div.layout
    firstLoading
    nuxt.nuxt
</template>

<script>
import firstLoading from './-first-loading'
export default {
  components: {
    firstLoading
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 1.6em;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.nuxt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
