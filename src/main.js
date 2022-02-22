import Vue from 'vue'
import router from '@/router'
import store from '@/store.js'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// components
import App from './App.vue'

// plugins
import './plugins/axios'

// configs
Vue.config.productionTip = false

// filter
Vue.filter('PRICE_BRL_FILTER', str => {
  return str ? str.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ''
})

// Vue
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
