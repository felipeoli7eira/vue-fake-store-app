import Vue from 'vue'
import VueRouter from 'vue-router'

// route components
import Home from '@/components/Home'

// Registro do vueRouter dento do Vue
Vue.use(VueRouter)

export default new VueRouter(
    {
        routes: [
            {
                path: '/',
                component: Home
            },
        ]
    }
)