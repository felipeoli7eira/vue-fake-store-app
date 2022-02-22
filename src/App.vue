<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',

  components: { NavBar, Footer },

  data() {
    return {
      productDetailsData: {},
      fakeState: {
        showDetailsPage: false,
        showHomePage: true
      },
    }
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

/* fonte geral */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'Nunito', sans-serif;
}

body {
  background-color: rgb(245, 245, 245);
}
</style>