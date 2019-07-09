import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueLazyload from 'vue-lazyload'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease'
})
Vue.use(VueLazyload)
Vue.use(VueAnalytics, {
  id: 'UA-142876298-1',
  router
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
