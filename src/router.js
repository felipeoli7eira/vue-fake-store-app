import Vue from 'vue'
import VueRouter from 'vue-router'

// components
import Home from '@/components/Home'
import ProductsByCategory from '@/components/ProductsByCategory'
import MyAccount from '@/components/MyAccount'
import Bag from '@/components/Bag'
import ProductDetails from '@/components/ProductDetails'

// Registro do vueRouter dento do Vue
Vue.use(VueRouter)

export default new VueRouter(
    {
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/categoria/:categoryName',
                component: ProductsByCategory
            },
            {
                path: '/minha-conta',
                component: MyAccount
            },
            {
                path: '/sacola',
                component: Bag
            },
            {
                path: '/:productName',
                component: ProductDetails
            }
        ]
    }
)