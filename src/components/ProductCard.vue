<template>
  <div class="card p-1 card-max-width-custom">
    <img loading="lazy" :src="product.image" class="card-img-top">
    <div class="card-body">
        <h6 class="card-title">{{product.title}}</h6>
        <p class="card-text text-success">$ {{product.price}}</p>
        <h6>
            <span class="badge bg-light text-dark">{{product.category}}</span>
        </h6>
        <nav>
            <a @click="getDetails(product.id)" href="#comprar" class="btn btn-sm btn-dark">comprar</a>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],

    methods: {

        getDetails(productID) {
            this.$emit('details', productID)
        }
    }
}
</script>

<style scoped>
.card-max-width-custom {
    max-width: 300px !important
}

.card-title
{
    /* max-width: 55ch;
    overflow: hidden;
    text-overflow: ellipsis; */
    /* white-space: nowrap; */
}

.card
{
    /* min-height: 400px; */
}
</style>