<template>
    <footer class="footer bg-dark p-4 text-white">
        <div class="container">
            <div class="row">
                <div class="col col-12 col-md-6">
                    <span class="h4 fw-lighter mb-3 d-block">VueStore</span>
                    <nav>
                        <ul class="list-group">
                            <li
                                class="list-group-item list-group-item-action fw-light p-0 mb-1 bg-dark border-0"
                                v-for="(categ, index) in categories" :key="index">
                                    <router-link :to="`/categoria/${categ.slug || categ.label}`" class="text-decoration-none text-success">{{ categ.label }}</router-link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="col col-12 col-md-6 my-4 my-md-0 text-end">
                    <nav>
                        <a class="me-2" target="_blank" href="https://www.instagram.com/lucas_alvs96/">
                            <img loading="lazy" src="@/assets/png/instagram.png" width="20" alt="Perfil no instagram">
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/lucastreze22/">
                            <img loading="lazy" src="@/assets/png/linkedin.png" width="20" alt="Perfil no linkedin">
                        </a>
                    </nav>
                </div>
            </div>

            <nav class="mt-3 mt-md-0 fw-light text-center">
                Desenvolvido com a <a class="link-success" href="https://fakestoreapi.com">fake store api</a> por Lucas Oliveira
                <!-- por <a class="link-success" href="https://github.com/felipeoli7eira">Felipe Oliveira</a> -->
            </nav>

            <nav class="text-center mt-4">
                <a class="link-success text-decoration-none fw-lighter" target="_blank" href="https://github.com/felipeoli7eira/vue-fake-store-app">
                    <img src="@/assets/svgs/github.svg" alt="Código fonte" title="Código fonte do app" width="20">
                </a>
            </nav>
        </div>
    </footer>
</template>

<script>
import getCategories from '@/mixins/getCategories'

export default {
    name: 'Footer',

    data() {
        return {}
    },

    mixins: [ getCategories ], // as categorias vem desse mixin
}
</script>