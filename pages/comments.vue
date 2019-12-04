<template lang="pug">
  .comments
    form(v-if="user")
      .form-group
        label Name
        .input-group.mb-2
          .input-group-prepend
            .input-group-text @
          v-text-field(type="text" v-model="user.name" disabled)
      .form-group
        label Comment
          v-textarea(solo v-model="form.comment" rows="3")
      .form-group
        v-btn(@click="submitPost") 投稿
    .comments_list
      .comment_box( v-for="(post,index) in posts" :key="index")
        .comment_box_header
          h5.mb-1 {{ post.user }}
          small {{ post.date }}
        p {{ post.comment }}
</template>

<script>
export default {
  data() {
    return {
      form: {
        comment: ''
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    posts() {
      return [...this.$store.state.posts].reverse()
    }
  },
  async mounted() {
    this.$store.dispatch('INIT_POSTS')
    await this.$store.dispatch('INIT_USERS')
  },
  methods: {
    login() {
      this.$store.dispatch('loginWithUserName')
    },
    submitPost() {
      if (this.form.comment === '') {
        return false
      }
      this.$store.dispatch('addComments', this.form.comment)
      this.form.comment = ''
    }
  }
}
</script>
