<template>
    <div class="products-by-category d-flex flex-column align-items-center justify-content-center">
        <h3 class="h3 h3-responsive">Estamos trabalhando aqui...</h3>
        <p class="text-center">Logo mais a categoria <b>{{ this.$route.params.categoryName }}</b> terá seus produtos sendo listados.</p>
    </div>
</template>

<script>
    export default {
        name: 'ProductsByCategory'
    }
</script>

<style scoped>
.products-by-category
{
    min-height: 70vh;
}
.products-by-category h3 {
    font-weight: 300;
}
</style>