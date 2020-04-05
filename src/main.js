import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueAnalytics from 'vue-analytics'
import Carousel from '@/components/carousel/Carousel.vue'
import Slide from '@/components/carousel/Slide.vue'

Vue.config.productionTip = false
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease'
})
Vue.use(VueAnalytics, {
  id: 'UA-142876298-1',
  router
})
Vue.component('carousel', Carousel)
Vue.component('slide', Slide)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
