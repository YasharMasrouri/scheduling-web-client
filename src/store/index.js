import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : "",
    expireAt : "",
    user : {
      firstName : "Jafar",
      lastName : "Tanha",
      id : null,
      code : 123456789,
      password : '123456',
      role : "Master",
      userImage : 'http://localhost:8080/img/avatar-test.22b3981b.png',
    },
    ServerUrl : "",
},
  mutations: {
    SetState(state, payload) {
      state.user = payload.user
      if (state.user.userImage === "") {
        state.user.userImage = '../../assets/avatar-test.png'
      }
      state.token = payload.token
      state.expireAt = payload.expireAt
    },
    changePassword(state, payload) {
      state.user.password = payload
    },
    changeName(state, payload) {
      state.user.firstName = payload.firstName
      state.user.lastName = payload.lastName
    },
    changeImage(state, payload) {
      state.user.userImage = payload
    },
    reset(state) {
      state.user = {
        firstName: "Jafar",
        lastName: "Tanha",
        id: null,
        code: 123456789,
        password: null,
        role: "Master",
        userImage: "./../../assets/avatar-test.png",
      }
      state.token = ""
      state.expireAt = ""
    },
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
    },
    reset (context) {
      context.commit('reset')
    }
  },
  getters: {
    getname(state) {
      return state.user.firstName +  " " + state.user.lastName
    }
  }
})
