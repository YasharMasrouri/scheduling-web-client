import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : "",
    expireAt : "",
    user : {
      firstName : "",
      lastName : "",
      id : null,
      code : null,
      password : null,
      role : "",
      userImage : "",
    },
    ServerUrl : "",
},
  mutations: {
    SetState (state , payload) {
      state.user = payload.user
      state.token = payload.token
      state.expireAt = payload.expireAt
    },
    changePassword (state , payload) {
      state.user.password = payload
    },
    changeName (state , payload) {
      state.user.firstName = payload.firstName
      state.user.lastName = payload.lastName
    },
    changeImage (state , payload) {
      state.user.userImage = payload
    }
  },
  actions: {
    SetState(context, payload) {
      context.commit('SetState', payload);
    },
    changePassword(context , payload){
      context.commit('changePassword' , payload)
    },
    changeName(context , payload){
      context.commit('changeName' , payload)
    },
    changeImage (context , payload) {
      context.commit('changeImage' , payload)
    }
  },
  getters: {
  }
})
