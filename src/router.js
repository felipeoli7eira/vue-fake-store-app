import Vue from 'vue'
import VueRouter from 'vue-router'

// Componentes
import Home from '@/components/Home'
import ProductsByCategory from '@/components/ProductsByCategory'
import MyAccount from '@/components/MyAccount'
import Bag from '@/components/Bag'
import ProductDetails from '@/components/ProductDetails'

// Instalação do VueRouter no Vue
Vue.use(VueRouter)

export default new VueRouter(
    {
        routes: [
            {
                /** home page */
                path: '/',
                component: Home
            },
            {
                /** listagem de produtos por categoria */
                path: '/categoria/:categoryName',
                component: ProductsByCategory
            },
            {
                /** minha conta */
                path: '/minha-conta',
                component: MyAccount
            },
            {
                /** sacola */
                path: '/sacola',
                component: Bag
            },
            {
                /** detalhes do produto clicado */
                path: '/:productID/:productSlug',
                component: ProductDetails,
                props: true
            }
        ]
    }
)