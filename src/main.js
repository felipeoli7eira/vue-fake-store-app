import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from '@/routes'
import VueCookies from 'vue-cookies'

// components
import App from './App.vue'

// plugins
import './plugins/axios'

// uses
Vue.use(VueRouter)
Vue.use(VueCookies)

// configs
Vue.$cookies.config('1d', '', '/', true)
Vue.prototype.baseAppUrl = window.location.origin
Vue.config.productionTip = false

// Vue
new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app')
