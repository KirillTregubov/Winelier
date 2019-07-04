import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueContext } from 'vue-context'
import Vuelidate from 'vuelidate'
import VuePaginate from 'vue-paginate'

Vue.component('vue-context', VueContext)
Vue.use(Vuelidate)
Vue.use(VuePaginate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
