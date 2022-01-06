<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
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

@import url('https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'Bitter', serif;
}

body {
  background-color: rgb(245, 245, 245);
}
</style>