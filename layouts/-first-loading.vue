<template lang="pug">
div
  .loading(:class="{ 'is-finish': dataLoadFinish }")
    p loading...
</template>

<script>
export default {
  data() {
    return {
      dataLoadFinish: false
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.dataLoadFinish = true
    })
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 40px;
  background: $theme-pink;
  color: white;
  &.is-finish {
    transition: opacity 1s, z-index 0s 1.01s;
    opacity: 0;
    z-index: -1;
  }
}
</style>
