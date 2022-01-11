<template>
    <div class="product-details d-flex flex-column align-items-center justify-content-center">
        <h3 class="h3 h3-responsive">{{ productID }}</h3>
        <p class="text-center">Logo mais será possível ver os detalhes do produto.</p>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    data() {
        return {
            productID: undefined
        }
    },

    created() {
        this.productID = this.$store.state.productIdDetail
    }
}
</script>

<style scoped>
.product-details
{
    min-height: 70vh;
}
.product-details h3 {
    font-weight: 300;
}
</style>