import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true
  },
  getters: {
    loadingStatus: state => {
      return state.isLoading
    }
  },
  mutations: {
    startLoading (state) {
      state.isLoading = true
    },
    endLoading (state) {
      state.isLoading = false
    }
  },
  actions: {
    updateMeta ({ commit }, payload) {
      document.title = payload.title + ' - Winelier'

      Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
      const descriptionTag = document.createElement('meta')
      descriptionTag.setAttribute('name', 'description')
      descriptionTag.setAttribute('content', payload.description)
      descriptionTag.setAttribute('data-vue-router-controlled', '')
      document.head.appendChild(descriptionTag)
    }
  }
})
