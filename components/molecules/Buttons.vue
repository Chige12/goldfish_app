<template lang="pug">
  .buttons_wrapper
    .buttons.buttons_left
      v-btn.icon(nuxt to="/edit" color="#eee" fab small elevation="0" )
        v-icon(color="#e45e8a") fas fa-cog
      v-btn.icon(nuxt to="/comments" color="#eee" fab small elevation="0" )
        v-icon(color="#e45e8a") fas fa-comment-dots
    .buttons.buttons_right
      v-btn.icon(nuxt to="/list" color="#eee" fab small elevation="0" )
        v-icon(color="#e45e8a") fas fa-fish
</template>
<style lang="scss" scoped>
.buttons {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 40px;
  height: (((40px + 4px) * 2)- 4px);
  &_left {
    left: 16px;
  }
  &_right {
    right: 16px;
  }
}
.icon {
  &:last-child {
    margin: 0;
  }
  margin-bottom: 4px;
}
</style>
