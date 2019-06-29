import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueContext } from 'vue-context'

Vue.component('vue-context', VueContext)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
