<template>
    <div class="products-by-category p-3">
        <div class="row">

            <div class="col col-12 col-sm-9 ms-auto">
                <div class="bg-body rounded p-3 shadow-sm">
                    <nav style="--bs-breadcrumb-divider: '|'">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-decoration-none">VueStore</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                {{ this.$route.params.categoryName }}
                            </li>
                        </ol>
                    </nav>

                    <nav>
                        <div class="row mt-5">
                            <div class="col col-6 col-sm-4 mb-5" v-for="product in products" :key="product.id">
                                <router-link to="/" class="img-product d-inline-block w-100" :style="`background-image: url(${product.image})`"></router-link>
                                <div class="px-3">
                                    <p class="m-0 product-title my-2 fw-lighter">{{ product.title }}</p>
                                    <p class="m-0 text-muted fw-medium">{{ currencyBRL(product.price) }}</p>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>

        <Newsletter />
    </div>
</template>

<script>
    import Newsletter from '@/components/Newsletter.vue'

    export default {
        name: 'ProductsByCategory',

        components: { Newsletter },

        data() {
            return {
                products: []
            }
        },

        async created() {
            let { data } = await this.$http.get('products/category/' + this.$route.params.categoryName)
            this.products = data
        },

        methods: {
            currencyBRL(str) {
                return str.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            },
        }
    }
</script>

<style scoped>
.img-product
{
    min-height: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

.product-title {
    font-size: 14px;
}
</style>