<template>
  <div id="home-component">

    <!-- banners -->
    <div class="home-banners">
      <img src="@/assets/mercadolivre.webp" class="w-100" alt="">
    </div>

    <Pitchbar />

    <!-- products container -->
    <div class="container mb-5">
      <h1 class="h4 fw-light">Mais vendidos</h1>
      <nav>
        <div class="row">
          <router-link v-for="product in products" :key="product.id" :to="`/${product.title.trim().replaceAll(' ', '-')}`"
            class="col col-6 col-lg-3 mb-1 d-flex flex-column justify-content-start align-items-center border py-3 bg-body text-decoration-none">
              <div class="w-100 img-product-container" :style="`background-image: url(${product.image})`"></div>

              <h5 class="h5 text-dark m-0 text-start w-100 px-2 mt-4">{{ currencyBRL(product.price) }}</h5>
              <p class="m-0 text-start text-dark w-100 px-2 text-price">Em 12x de {{ currencyBRL(product.price / 12) }}</p>
          </router-link>
        </div>
      </nav>
    </div>

    <Newsletter />
    

    <!-- loading spiner --> <div id="loading" v-show="loading">
      <h2 class="h2 text-app-name text-white">VueStore</h2>
      <div class="spinner-border text-light" role="status">
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

      const productsCookie = this.$cookies.get('v_store_products')

      if (productsCookie === null)
      {
        let { data } = await this.$http.get('products?limit=12')
        this.products = data
        this.$cookies.set('v_store_products', JSON.stringify(data))
        this.loading = false
      }
      else
      {
        this.products = JSON.parse(productsCookie)
      }
    },

    methods: {
      currencyBRL(str) {
        return str.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      }
    }
}
</script>

<style>
#loading
{
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  background-color: rgba(48, 48, 48, 1);
}

.img-product-container
{
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
}

.text-price
{
  font-size: 13px;
}

</style>