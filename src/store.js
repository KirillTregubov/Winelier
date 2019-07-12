import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    updateMeta ({ commit }, payload) {
      document.title = payload.title
      Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
      let metaTags = JSON.parse(payload.tags)
      metaTags.map(tagDef => {
        const tag = document.createElement('meta')
        Object.keys(tagDef).forEach(key => {
          tag.setAttribute('name', key)
          tag.setAttribute('content', tagDef[key])
        })
        tag.setAttribute('data-vue-router-controlled', '')
        return tag
      }).forEach(tag => document.head.appendChild(tag))
    }
  }
})
