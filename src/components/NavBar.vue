<template>
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">VueStore</router-link>

            <button @click="menu.open = !menu.open" class="navbar-toggler border-0 shadow-none" data-bs-toggle="collapse" data-bs-target="#storeNavBar">
                <img :src="menu.open ? menu.x : menu.bars" alt="Clique para Abrir/Fechar o menu">
            </button>

            <div class="container collapse navbar-collapse" id="storeNavBar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item" v-for="(categ, index) in categories" :key="index">
                        <router-link :to="`/categoria/${ categ.slug || categ.label }`" class="nav-link">{{ categ.label || '' }}</router-link>
                    </li>
                </ul>

                <div class="store-user-links my-4 my-md-0 text-end">
                    <router-link to="/minha-conta">
                        <img src="@/assets/svgs/user.svg" class="me-4" width="20" alt="Minha conta">
                    </router-link>
                    <button type="button" class="btn btn-second mb-1 position-relative p-0 m-0">
                        <img src="@/assets/svgs/shopping-bag.svg" width="20" alt="Sacola">
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import getCategoriesMixin from '@/mixins/getCategories.js'

export default {
    name: 'NavBar',

    mixins: [ getCategoriesMixin ],

    data() {
        return {
            menu: {
                open: false,
                bars: require('@/assets/svgs/menubars.svg'), // icone menu hamburguer
                x: require('@/assets/svgs/x.svg') // icone "x" (fechar menu)
            }
        }
    }
}
</script>