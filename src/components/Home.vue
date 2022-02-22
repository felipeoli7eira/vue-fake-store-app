<template>
    <div class="home">

        <!-- banners -->
        <div class="home-banners">
            <img src="@/assets/banner/banner-smartphone.png" class="w-100" alt="">
        </div>

        <Pitchbar />

        <!-- products container -->
        <div class="container">
            <nav>
                <div class="row">
                    <router-link
                    v-for="product in products"
                    :key="product.id"
                    :to="productDetailURL(product)"
                    class="col col-4 col-lg-3 bg-body text-decoration-none shadow-sm mb-3 p-4">

                        <div class="w-100 product-img" :style="`background-image: url(${product.image})`"></div>

                        <div class="d-flex flex-wrap align-items-center justify-content-between mt-3">
                            <h6 class="h6 text-dark m-0 my-1">{{ product.price | PRICE_BRL_FILTER }}</h6>
                            <p class="m-0 text-success text-price">3x de {{ product.price / 3 | PRICE_BRL_FILTER }}</p>
                        </div>
                    </router-link>
                </div>
            </nav>
        </div>

        <Newsletter />

        <Loader :loading="loading" />

    </div>
</template>

<script>
import Pitchbar from '@/components/Pitchbar'
import Newsletter from '@/components/Newsletter'
import Loader from '@/components/Loader'
import formatProductDetailURL from '@/mixins/formatProductDetailURL.js'

export default {
    name: 'Home',
    
    mixins: [formatProductDetailURL],

    components: { Pitchbar, Newsletter, Loader },

    data() {
        return {
            products: [],
            loading: true
        }
    },

    async created() {
        // apenas para dar uma diferenciada na ordem da exibição.
        let minutes = new Date().getMinutes()
        let dynamicSort = Math.abs(minutes) % 2 === 0 ? 'desc' : 'asc'

        let { data } = await this.$http.get('products?sort=' + dynamicSort)
        this.products = data
        this.loading = false
    }
}
</script>

<style scoped>
.product-img {
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}

@media (max-width: 767px) {
    .product-img {
        height: 150px;
    }
}

.text-price {
    font-size: 13px;
    white-space: nowrap;
}
</style>