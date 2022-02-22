<template>
    <div class="products-by-category p-3">
        <div class="row">

            <div class="col col-12 col-sm-9 mx-auto">
                <div class="bg-body rounded p-3 shadow-sm">
                    <nav style="--bs-breadcrumb-divider: '|'">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-decoration-none">Store</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                {{ categoryName.label }}
                            </li>
                        </ol>
                    </nav>

                    <nav>
                        <div class="row mt-5">
                            <div class="col col-6 col-sm-4 mb-2" v-for="product in products" :key="product.id">
                                <router-link :to="productDetailURL(product)" class="img-product d-inline-block w-100" :style="`background-image: url(${product.image})`"></router-link>
                                <div class="px-3">
                                    <p class="m-0 product-title my-2">{{ product.title }}</p>
                                    <p class="m-0 text-success text-end">{{ product.price | PRICE_BRL_FILTER }}</p>
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>
        </div>

        <Newsletter />

        <Loader :loading="loading"/>
    </div>
</template>

<script>
import Newsletter from '@/components/Newsletter.vue'
import categoriesMixin from '@/mixins/getCategories.js'
import Loader from '@/components/Loader'
import formatProductDetailURL from '@/mixins/formatProductDetailURL.js'

export default {
    name: 'ProductsByCategory',

    components: { Newsletter, Loader },

    mixins: [categoriesMixin, formatProductDetailURL],

    data() {
        return {
            products: [],
            categoryName: '',
            loading: true
        }
    },

    created() {
        this.filterCategory()
    },

    watch: {
        $route() {
            this.filterCategory()
        }
    },

    methods: {
        filterCategory() {

            this.loading = true

            this.categoryName = this.categories.find(c => {
                if (c.slug && c.slug === this.$route.params.categoryName)
                    return c.label
                else
                    if (c.label === this.$route.params.categoryName) return c.label
            })

            this.getProductsByCategoryName()
        },

        async getProductsByCategoryName() {
            let {data} = await this.$http.get('products/category/' + this.categoryName.label)
            this.products = data
            this.loading = false
        }
    }
}
</script>

<style scoped>
.img-product {
    min-height: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

.product-title {
    font-size: 14px;
}
</style>