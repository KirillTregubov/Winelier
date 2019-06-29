import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Authentication from './views/Authentication.vue'
import Dashboard from './components/sections/Dashboard.vue'
import UsersContainer from './components/users/UsersContainer.vue'
import Users from './components/users/Users.vue'
import Consumers from './components/users/Consumers.vue'
import Managers from './components/users/Managers.vue'
import Writers from './components/users/Writers.vue'
import Admins from './components/users/Admins.vue'
import Featured from './components/sections/Featured.vue'

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
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'users',
          component: UsersContainer,
          children: [
            {
              path: '',
              name: 'users',
              component: Users
            },
            {
              path: 'consumers',
              name: 'consumers',
              component: Consumers
            },
            {
              path: 'managers',
              name: 'managers',
              component: Managers
            },
            {
              path: 'writers',
              name: 'writers',
              component: Writers
            },
            {
              path: 'admins',
              name: 'admins',
              component: Admins
            }
          ]
        },
        {
          path: 'featured',
          name: 'featured',
          component: Featured
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
