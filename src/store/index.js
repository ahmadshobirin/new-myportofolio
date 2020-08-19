import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //STATE USERS
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
    ],

    creations: []
  },
  mutations: {
    //MUTATIONS USERS
    MUT_NEW_USER(state, payloadData){
      state.users.push({
        name: payloadData.nameInput,
        image: "https://source.unsplash.com/random",
        description: payloadData.descriptionInput
      })
    },

    SET_CREATIONS(state, creations){
      state.creations = creations;
    }
  },

  actions: {

    //MODULE USERS
    actionAddUser({commit}, payloadData){
      commit('MUT_NEW_USER', payloadData);
    },


    getCreations({commit}){
      console.log("RUN action");
      axios.get('http://52.221.246.47/deweloper/api/creations')
      .then((response) => {
        // console.log(response.data);
        commit('SET_CREATIONS', response.data.data);
      })
    }
  },
  modules: {
  }
})
