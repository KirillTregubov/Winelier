import Vue from 'vue'
import Router from 'vue-router'
import Api from './services/Api.js'
import store from './store.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'Home Page - Winelier'
      }
    },
    {
      path: '/wineries',
      name: 'wineries',
      component: () => import('./views/Wineries.vue')
    },
    {
      path: '/winery',
      redirect: '/wineries'
    },
    {
      path: '/winery/:name',
      name: 'winery-page',
      component: () => import('./views/WineryPage.vue'),
      props: true
    },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: () => import('./views/Blog.vue')
    // },
    {
      path: '*',
      name: '404',
      component: () => import('./views/NotFound.vue'),
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
      console.log('Error loading meta')
      console.log(response.data)
    }
    next()
  })
})

export default router
