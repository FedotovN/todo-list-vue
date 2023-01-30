import { createStore } from 'vuex'
import { taskModule } from './taskModule'
import { categoriesModule } from "./categoriesModule"
export default createStore({
  state: {

  },
  getters: {
  },
  mutations: {
    setPage(state, pageName){
      state.page = pageName
    }
  },
  actions: {},
  modules: {
    task: taskModule,
    categories: categoriesModule
  }
})
