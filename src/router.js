import Vue from 'vue'
import Router from 'vue-router'
import Api from './services/Api.js'
import store from './store.js'
import Home from './views/Home.vue'
import Wineries from './views/Wineries.vue'
import WineryPage from './views/WineryPage.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home Page - Winelier'
      }
    },
    {
      path: '/wineries',
      name: 'wineries',
      component: Wineries
    },
    {
      path: '/winery',
      redirect: '/wineries'
    },
    {
      path: '/winery/:name',
      name: 'winery-page',
      component: WineryPage,
      props: true
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
      props: true
    }
    /*
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(webpackChunkName: "about" './views/About.vue')
    } */
  ]
})

function kebabToSentence (string) {
  string = string.replace(/-/g, ' ').toLowerCase().split(' ').map(function (word) {
    return word.replace(word[0], word[0].toUpperCase())
  })
  return string.join(' ')
}

router.beforeEach((to, from, next) => {
  store.commit('startLoading')
  let params
  if (to.name === 'winery-page') params = kebabToSentence(to.params.name)
  Api.getMeta({ page: to.name, params: params }).then((response) => {
    if (response.data.status === 'success') {
      let data = JSON.parse(response.data.data)
      if (to.name === 'winery-page') data.title = data.name
      store.dispatch('updateMeta', data)
    } else {
      console.log(response.data)
    }
    next()
  })
})

export default router
