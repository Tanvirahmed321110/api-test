import { createStore } from "vuex"
import state from './state'
import *as actions from './actions'
import *as getters from './getters.js'
import *as mutations from './mutations.js'
export default createStore({
  state,
  getters,
  actions,
  mutations
})


// export default createStore({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
