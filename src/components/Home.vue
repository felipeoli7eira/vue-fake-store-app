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
                    :to="productNameUrl(product.title)"
                    class="col col-4 col-lg-3 bg-body text-decoration-none shadow-sm mb-3 p-4">

                        <div class="w-100 product-img" :style="`background-image: url(${product.image})`"></div>

                        <h6 class="h6 text-dark m-0 my-1">{{ currencyBRL(product.price) }}</h6>
                        <p class="m-0 text-muted text-price">12x de {{ currencyBRL(product.price / 12) }}</p>
                    </router-link>
                </div>
            </nav>
        </div>

        <Newsletter />

        <!-- loading spiner -->
        <div id="loading" v-show="loading">
            <div class="spinner-border text-dark" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>
    </div>
</template>

<script>
import Pitchbar from '@/components/Pitchbar'
import Newsletter from '@/components/Newsletter'

export default {
    name: 'Home',

    components: { Pitchbar, Newsletter },

    data() {
        return {
            products: [],
            loading: true
        }
    },

    async created() {

        const productsSession = sessionStorage.v_store_products

        // apenas para dar uma diferenciada na ordem da exibição.
        let dynamicSort = new Date().getHours() % 2 === 0 ? 'desc' : 'asc'

        if (productsSession === undefined)
        {
            let { data } = await this.$http.get('products?sort=' + dynamicSort)
            this.products = data
            sessionStorage.v_store_products = JSON.stringify(data)
            this.loading = false
        }
        else
        {
            this.products = JSON.parse(productsSession)
            this.loading = false
        }
    },

    methods: {
        currencyBRL(str) {
            return str.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        },
        productNameUrl(productName) {
            return productName.trim().replaceAll(' ', '-')
        }
    }
}
</script>

<style scoped>

#loading
{
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.97);
}

.product-img
{
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

.text-price
{
    font-size: 13px;
}
</style>