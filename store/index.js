import firebase from '~/service/firebase'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
const db = firebase.database()
const postsRef = db.ref('/posts')

export const state = () => ({
  userimage: '',
  screenshot: false,
  user: undefined,
  posts: []
})

export const mutations = {
  ...vuexfireMutations,
  setUserImage(state, userimage) {
    state.userimage = userimage
  },
  takeScreenShot(state) {
    state.screenshot = state.screenshot ? false : true
  },
  setUser(state, user) {
    state.user = user
  },
  signOutUser(state) {
    state.user = null
  },
  setPosts(state, posts) {
    state.posts = posts
  }
}

export const actions = {
  async loginWithUserName({ commit }) {
    const provider = new firebase.auth.GithubAuthProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    // var token = result.credential.accessToken
    var user = result.user
    commit('setUser', { name: user.displayName })
  },
  addComments({ state }, comment) {
    const date = new Date()
    postsRef.push().set({
      comment,
      user: state.user.name,
      date: `${date.getMonth() +
        1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    })
  },
  INIT_POSTS: firestoreAction(({ bindFirestoreRef }, ref) => {
    bindFirestoreRef('posts', ref)
  }),
  async INIT_USERS({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        commit('setUser', { name: user.displayName })
      } else {
        commit('setUser', null)
      }
    })
  }
}
