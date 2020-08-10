import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: "Ahmad Shobirin",
        description: "Deweloper",
        image: "https://avatars2.githubusercontent.com/u/27719456?s=460&u=86116aad77e836486e28a2e2d84cb8c125a1a5b7&v=4"
      },
      {
        name: "Yusron",
        description: "Deweloper",
        image: "https://avatars0.githubusercontent.com/u/47345076?s=460&u=9e4fbebc232ed20415c558827446ed31b2409308&v=4"
      },
      {
        name: "Kha",
        description: "Seonggok Front End",
        image: "https://avatars3.githubusercontent.com/u/49638000?s=400&u=2d7e7fea7c09d26c10557c2a5be41f71f0b6b03f&v=4"
      }
    ]
  },
  mutations: {
    MUT_NEW_USER(state, nameInput, descriptionInput){
      console.log(descriptionInput);

      state.users.push({
        name: nameInput,
        image: "https://source.unsplash.com/random",
        description: "Others"
      })
    }
  },
  actions: {
    actionAddUser({commit}, name){
      commit('MUT_NEW_USER', name);
    }
  },
  modules: {
  }
})
