import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Authentication from './views/Authentication.vue'
import Dashboard from './components/sections/Dashboard.vue'
import Users from './components/sections/Users.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      component: Home,
      meta: {
        requiresAuth: true
      },
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          nmame: 'dashboard',
          component: Dashboard
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'users',
          component: Users
        }
      ]
    },
    {
      path: '',
      name: 'authentication',
      component: Authentication
    }
  ]
})

router.beforeEach((to, from, next) => {
  // const currentUser = firebase.auth().currentUser
  // const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  next()
  /*
  if (requiresAuth && currentUser) {
    // console.log('logged in')
    next()
  } else if (currentUser && to.path === '/') {
    // console.log('logged in trying to login')
    next('dashboard')
  } else if (!currentUser) {
    // console.log('need to log in')
    if (to.path !== '/') next('')
    else next()
  } else {
    // console.log('404')
    if (to.path !== '/*') next('*')
    else next()
  }
  */
})

export default router
