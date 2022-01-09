import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router'
import VueCookies from 'vue-cookies'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// components
import App from './App.vue'

// plugins
import './plugins/axios'

// uses
Vue.use(VueRouter)
Vue.use(VueCookies)

// configs
Vue.$cookies.config('1d', '', '/', false, 'Lax')
Vue.prototype.baseAppUrl = window.location.origin
Vue.config.productionTip = false

// Vue
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
