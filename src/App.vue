<template>
  <div id="app">
    <NavBar />

    <!-- HOME PAGE -->
    <div class="container p-5">
      <div v-show="fakeState.showHomePage === true" class="row">
        <div class="col col-6 col-md-3 mb-2" v-for="product in products" :key="product.id">
          <ProductCard @details="showProductDetails" :product="product" />
        </div>
      </div>

      <!-- PRODUCT DETAIL -->
      <div v-show="fakeState.showProductDetails === true" class="row">
        <div class="col col-12 mb-5">
          <nav>
            <a @click="showHomePage" class="btn btn-dark" href="#">voltar aos produtos</a>
          </nav>
        </div>

        <div class="col col-12 col-md-6">
          <img
            :src="productDetailsData.image"
            :alt="productDetailsData.title"
            class="d-block w-100"
          >
        </div>

        <div class="col col-12 col-md-6">
          <h1>{{productDetailsData.title}}</h1>
          <h2 class="text-success">$ {{productDetailsData.price}}</h2>
          <span class="badge bg-secondary">{{productDetailsData.category}}</span>
          <p class="my-4">
            {{productDetailsData.description}}
          </p>

          <div class="row g-3">
            <div class="col-auto">
              <input type="number" class="form-control mi-5" value="1">
            </div>
            <div class="col-auto">
              <button class="btn btn-primary">comprar</button>
            </div>

            <div class="col-auto"></div>
          </div>
        </div>
      </div>
    </div>

    <Footer />

    <div id="loading" v-show="loading">
      <div class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script>
import ProductCard from '@/components/ProductCard.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  components: { ProductCard, NavBar, Footer },

  data() {
    return {
      products: [],

      productDetailsData: {},

      fakeState: {
        showDetailsPage: false,
        showHomePage: true
      },

      loading: true
    }
  },

  async created() {

    let { data } = await this.$http.get('products?limit=10')
    this.products = data

    this.loading = false
  },

  methods: {

    async showProductDetails(productID) {

      this.loading = true

      this.fakeState.showProductDetails = true
      this.fakeState.showHomePage = false
      let productDetailsRequest = await this.$http.get(`products/${productID}`)
      this.productDetailsData = productDetailsRequest.data

      this.loading = false
    },

    showHomePage() {
      this.fakeState.showHomePage = true
      this.fakeState.showProductDetails = false
      this.productDetailsData = {}
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Raleway', sans-serif;
}

body {
  background-color: rgb(245, 245, 245);
}

#loading
{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  background-color: rgba(48, 48, 48, 0.952);
}

</style>