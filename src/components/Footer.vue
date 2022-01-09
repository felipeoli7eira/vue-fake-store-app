<template>
    <footer id="footer" class="bg-dark p-4 text-white">
        <div class="container">
            <div class="row">
                <div class="col col-12 col-md-4">
                    <span class="text-app-name" title="Vue Store">VueStore</span>
                </div>
                <div class="col col-12 col-md-4 p-0 text-center">
                    <h4 class="h4 m-0">Categorias</h4>
                    <nav>
                        <ul class="list-group">
                            <li
                                class="list-group-item list-group-item-action border-none bg-dark border-0"
                                v-for="(category, index) in footerCategories"
                                :key="index">
                                    <router-link :to="`/categoria/${category}`" class="text-decoration-none text-success">{{ category }}</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col col-12 col-md-4">
                    <nav>
                        <a class="me-2" target="_blank" href="https://instagram.com/oli7eirafelipe">
                            <img loading="lazy" src="@/assets/png/instagram.png" width="20px" alt="Perfil no instagram" title="Perfil no instagram">
                        </a>
                        <a target="_blank" href="https://linkedin.com/in/felipeoli7eira">
                            <img loading="lazy" src="@/assets/png/linkedin.png" width="20px" alt="Perfil no linkedin" title="Perfil no linkedin">
                        </a>
                    </nav>
                </div>
            </div>
            <nav class="mt-3">
                Desenvolvido com a <a class="link-success" href="https://fakestoreapi.com">fake store api</a> por <a class="link-success" href="https://github.com/felipeoli7eira">Felipe Oliveira</a>
            </nav>
        </div>
    </footer>
</template>

<script>
import getCategories from '@/mixins/getCategories'

export default {
    name: 'Footer',

    data() {
        return {
            footerCategories: []
        }
    },

    mixins: [ getCategories ],

    async created() {
        this.footerCategories = await this.getCategories()
    }
}
</script>

<style>
</style>