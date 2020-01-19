import firebase from '~/plugins/firebase'
// const db = firebase.database()
export const strict = false

export const state = () => ({
  user_type: '',
  screenshot: false,
  user: null,
  posts: [],
  expand: false,
  alert: false,
  error: 'エラー'
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setUserType(state, user_type) {
    state.user_type = user_type
  },
  takeScreenShot(state) {
    state.screenshot = state.screenshot ? false : true
  },
  signOutUser(state) {
    state.user = null
  },
  setPosts(state, posts) {
    state.posts = posts
  },
  expandStream(state, boolean) {
    state.expand = boolean
  },
  setAlertError(state, msg) {
    state.error = msg
    state.alert = true
  },
  setAlert(state, boolean) {
    state.alert = boolean
  }
}

export const actions = {
  setUser({ commit }) {
    firebase.auth().onAuthStateChanged((user) => {
      commit('setUser', user)
    })
  },
  githubLogin({ commit }) {
    var provider = new firebase.auth.GithubAuthProvider()
    provider.addScope('repo')
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result)
        // This gives you a GitHub Access Token.
        // var token = result.credential.accessToken
        // // The signed-in user info.
        commit('setUser', result.user)
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        // var errorMessage = error.message
        // // The email of the user's account used.
        // var email = error.email
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('You have signed up with a different provider for that email.')
          // Handle linking here if your app allows it.
        } else {
          console.error(error)
        }
      })
  },
  googleLogin({ commit }) {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user
        console.log(user)
        commit('setUser', result.user)
        // ...
      })
      .catch(function(error) {
        console.error(error)
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      })
  },
  logout({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null)
      })
      .catch((error) => {
        alert(error)
      })
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  }
}
