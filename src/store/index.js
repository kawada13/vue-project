import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [
      {id:1, name: '太郎', isvisible: true},
      {id:2, name: '次郎', isvisible: false},
      {id:3, name: '三郎', isvisible: true},
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addCount(state, payload) {
      state.count += payload.value
    }
  },
  actions: {
    incrementAction( {commit} ) {
      commit('increment')
    },
    addCountAction( {commit} , payload) {
      commit('addCount', payload)
    }
  },
  getters: {
    visibleUsers: state => state.users.filter(o => o.isvisible),
    getUsersId: state => id => {
      return state.users.find(o => o.id === id)
    }
  }
})
