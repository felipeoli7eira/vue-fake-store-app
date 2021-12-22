import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com/'

Vue.use(
    {
        install(Vue) {
            Vue.prototype.$http = axios
        }
    }
)
