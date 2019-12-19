<template lang="pug">
  .goldfish_list
    v-app
      MembersOnly
        HeaderMenu(:title="'金魚リスト'")
        .container
          v-list-item(
            v-for="fish in goldfishes"
            :key="`goldfish_${fish.id}`"
            @click="openEditor(fish.id)"
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
              v-btn(icon)
                v-icon( small color="grey lighten-1") fas fa-edit
        .goldfish_list--edit(v-if="edit")
          h2 {{edit_fish.name}}

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
      edit: false,
      edit_fish: {
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
    openEditor(id) {
      this.edit_fish = this.goldfishes[id]
      this.edit = true
    },
    closeEditor() {
      this.edit = false
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
@include pageTransition;
</style>
