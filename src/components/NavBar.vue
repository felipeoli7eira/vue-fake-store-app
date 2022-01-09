<template>
    <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
            <a :href="appBaseURL" class="navbar-brand text-app-name" title="Vue Store">VueStore</a>

            <button @click="menu.open = !menu.open" class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#storeNavBar">
                <img :src="menu.open ? menu.x : menu.bars" alt="Abrir/Fechar menu">
            </button>

            <div class="container collapse navbar-collapse" id="storeNavBar">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item" v-for="(category, index) in categories" :key="index">
                        <router-link :to="`/categoria/${category}`" class="nav-link">{{ category }}</router-link>
                    </li>
                </ul>

                <div class="store-user-links my-4 my-md-0 text-end">
                    <router-link to="/minha-conta">
                        <img src="@/assets/svgs/user.svg" class="me-4" width="20" alt="Minha conta">
                    </router-link>
                    <router-link to="sacola">
                        <img src="@/assets/svgs/shopping-bag.svg" width="20" alt="Sacola">
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

import getCategoriesMixin from '@/mixins/getCategories.js'

document.title = 'VueStore'

export default {
    name: 'NavBar',

    mixins: [ getCategoriesMixin ],

    data() {
        return {
            appBaseURL: this.baseAppUrl, // main.js
            menu: {
                open: false,
                bars: require('@/assets/svgs/menubars.svg'),
                x: require('@/assets/svgs/x.svg')
            },

            categories: []
        }
    },

    async created() {
        this.categories = await this.getCategories()
    }
}
</script>

<style scoped>

</style>