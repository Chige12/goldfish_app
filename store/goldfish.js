export const state = () => ({
  user: ''
})

export const mutations = {
  SetUser(state, user) {
    state.user = user
  }
}
