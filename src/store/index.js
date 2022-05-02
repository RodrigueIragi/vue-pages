import { createStore } from 'vuex'

export default createStore({
  state: {
    preloaderFadeOutTime : 500,
    preloader: false,
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    hidePreloader(state){
      state.preloader != state.preloader
      setTimeout(function() {
        state.preloader.fadeOut(preloaderFadeOutTime)
      }, 500)
    }
  },
  modules: {
  }
})
