<template lang="pug">
  .goldfish_list
    v-app
      MembersOnly
        HeaderMenu(:title="'金魚リスト'")
        .container
          v-list-item(
            v-for="fish in goldfishes"
            :key="`goldfish_${fish.id}`"
            @click="openInfo(fish.id)"
            )
            v-list-item-avatar
              v-icon(
                class="grey lighten-3"
                color="#e45e8a"
              ) fas fa-fish
            v-list-item-content
              v-list-item-title(v-text="fish.name")
              v-list-item-subtitle(v-if="fish.day") {{fish.day}} ~
            v-list-item-action
              v-icon( small color="grey lighten-1") fas fa-info-circle
          .plus_btn
            v-btn(
              dark
              fab
              top
              right
              color="#e45e8a"
              @click="addNewFish()"
            )
              v-icon(small) fas fa-plus
        .goldfish_list--info(v-if="info")
          h2 {{info_fish.name}}

</template>
<script>
import MembersOnly from '~/components/members-only.vue'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'

export default {
  components: {
    MembersOnly,
    HeaderMenu
  },
  data() {
    return {
      goldfishes: [
        {
          id: 0,
          img: '',
          name: '金ちゃん',
          day: '2019/8/15',
          memo: '夏休み、金魚すくいの屋台でとった'
        },
        { id: 1, img: '', name: '金ちゃん2', day: '', memo: '' },
        { id: 2, img: '', name: '金ちゃん3', day: '', memo: '' }
      ],
      info: false,
      info_fish: {
        id: 0,
        img: '',
        name: '',
        day: '',
        memo: ''
      }
    }
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  methods: {
    openInfo(id) {
      this.info_fish = this.goldfishes[id]
      this.info = true
    },
    closeInfo() {
      this.info = false
    },
    addNewFish() {},
    removeFish() {}
  }
}
</script>
<style lang="scss" scoped>
.goldfish_list {
  z-index: 1;
  width: 100%;
  &--edit {
    width: 100%;
  }
}
.plus_btn {
  position: absolute;
  bottom: 24px;
  right: 22px;
}
@include pageTransition;
</style>
