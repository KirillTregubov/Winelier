import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WineryPage from './components/pages/WineryPage.vue'

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
        title: 'Home Page - Winelier',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      }
    },
    {
      path: '/winery/',
      name: 'winery-page',
      component: WineryPage
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

// // This callback runs before every route change, including on page load.
// router.beforeEach((to, from, next) => {
//   // Find the closest route with a title
//   const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
//   // Find the nearest route element with meta tags.
//   const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
//   // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
//   // If a route with a title was found, set the document (page) title to that value.
//   if (nearestWithTitle) document.title = nearestWithTitle.meta.title
//   // Remove any stale meta tags from the document using the key attribute we set below.
//   Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
//   // Skip rendering meta tags if there are none.
//   if (!nearestWithMeta) return next()
//   nearestWithMeta.meta.metaTags.map(tagDef => {
//     const tag = document.createElement('meta')
//     Object.keys(tagDef).forEach(key => {
//       tag.setAttribute(key, tagDef[key])
//     })
//     tag.setAttribute('data-vue-router-controlled', '')
//     return tag
//   }).forEach(tag => document.head.appendChild(tag))

//   next()
// })

export default router
