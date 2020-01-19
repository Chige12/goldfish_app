<template lang="pug">
  .comments
    v-app
      MembersOnly
        HeaderMenu(:title="'Comments'")
        .container
          form(v-if="user")
            .form-group
              label Name
              .input-group.mb-2
                .input-group-prepend
                  .input-group-text @
                v-text-field(type="text" v-model="user.displayName" disabled)
            .form-group
              label Comment
                v-textarea(solo v-model="form.comment" rows="3")
            .form-group
              v-btn(@click="submitPost") 投稿
          .comments_list(v-if="posts")
            .comment_box( v-for="(post,index) in posts" :key="index")
              .comment_box_header
                h5.mb-1 {{ post.user }}
                small {{ post.date }}
              p {{ post.comment }}
        .alert
          v-alert.v-alert(type="error" v-model="alert" dense dismissible elevation="5") {{error}}
</template>

<script>
import firebase from '~/plugins/firebase'
const db = firebase.firestore()

import MembersOnly from '~/components/members-only.vue'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'

export default {
  components: {
    MembersOnly,
    HeaderMenu
  },
  data() {
    return {
      form: {
        comment: ''
      },
      posts: null,
      alert: false,
      error: 'エラー'
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  async mounted() {
    console.log('mounted')
    this.load()
  },
  methods: {
    async load() {
      console.log('load')
      try {
        const snapshot = await db
          .collection('posts')
          .orderBy('date', 'desc')
          .get()
        console.log('snapshot', snapshot)
        if (snapshot.empty) {
          this.posts = []
        } else {
          this.posts = snapshot.docs.map((doc) => {
            return doc.data()
          })
        }
      } catch (error) {
        this.error = 'コメントがロードできませんでした。'
        this.alert = true
        console.error(error)
      }
    },
    submitPost() {
      try {
        console.log('submitPost')
        if (this.form.comment === '') {
          return false
        }
        const date = new Date()
        db.collection('posts').add({
          comment: this.form.comment,
          user: this.user.displayName,
          date: `${date.getMonth() +
            1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        })
        console.log('posts success')
        this.load()
        this.form.comment = ''
      } catch (error) {
        this.error = '投稿に失敗しました。'
        this.alert = true
        console.error(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.comments {
  z-index: 1;
  width: 100%;
}
@include pageTransition;
</style>
