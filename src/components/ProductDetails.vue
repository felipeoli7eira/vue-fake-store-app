<template>
    <div class="product-details my-5 container">
        <div class="row">
            <div class="col col-12 col-sm-6 container-product-photo">
                <img :src="productData.image" class="d-block w-100">
            </div>
            <div class="col col-12 col-sm-6">

                <span class="badge bg-primary border border-3 rounded-1 my-2 my-sm-0">{{productData.category}}</span>

                <h4 class="m-0 mb-2">{{productData.title}}</h4>

                <p
                v-if="productData.rating && productData.rating.rate && productData.rating.count"
                class="m-0">{{productData.rating.rate}} <img width="20" src="@/assets/svgs/star.svg"> na avaliação de {{productData.rating.count}} pessoas</p>

                <hr>

                <h5 class="m-0 fw-normal text-end text-success">{{productData.price | PRICE_BRL_FILTER}}</h5>
                <p class="m-0 fw-light text-end">em 3x de {{(productData.price / 3) | PRICE_BRL_FILTER}} sem juros</p>
                <form class="text-end">
                    <button @click="alert" type="button" class="btn btn-success rounded-0 fw-bold mt-3 border border-4">ADICIONAR NA SACOLA</button>
                </form>
            </div>
        </div>

        <div class="bg-body p-3 shadow-sm my-5">
            <p class="h6 mb-5">Sobre o produto</p>
            <p class="m-0 text-muted">{{productData.description}}</p>
        </div>

        <p class="h4 text-muted fw-light">Pode agradar você</p>

        <div class="container">
            <div class="row">
                <router-link
                    v-for="prodAssoc in associatedProducts"
                    :key="prodAssoc.id"
                    :to="mountProductUrlTo(prodAssoc)"
                    class="col col-12 col-md-4 bg-body text-decoration-none shadow-sm mb-2 mb-sm-0 p-3">

                    <div class="w-100 product-assoc-img" :style="`background-image: url(${prodAssoc.image})`"></div>

                    <div class="d-flex flex-wrap align-items-center justify-content-around mt-3">
                        <h6 class="h6 text-dark my-1">{{ prodAssoc.price | PRICE_BRL_FILTER }}</h6>
                        <p class="m-0 text-success text-price">3x de {{ (prodAssoc.price / 3) | PRICE_BRL_FILTER }}</p>
                    </div>
                </router-link>
            </div>
        </div>

        <Newsletter />

        <Loader :loading="loadingData" />
    </div>
</template>

<script>
import Newsletter from '@/components/Newsletter'
import Loader from '@/components/Loader'

export default {
    name: 'ProductDetails',

    components: { Newsletter, Loader },

    props: {
        productID: {
            type: [Number, String],
            required: true
        },
        productSlug: {
            type: String
        }
    },

    data() {
        return {
            productData: {},
            associatedProducts: [],
            loadingData: true
        }
    },

    watch: {
        $route(to) {
            this.loadingData = true
            this.productID = to.params.productID
            this.loadProductDetails()
        }
    },

    created() {
        this.loadProductDetails()
    },

    methods: {
        alert() {
            window.alert('Funcionalidade indisponível nesse momento. Aguarde novidades...')
        },

        async loadProductDetails() {
            try
            {
                let {data} = await this.$http.get('products/' + Number(this.productID))
                this.productData = data
                this.get3ProductsByCurrentProductCategory()

                this.loadingData = false
                window.scrollTo(0, 0)
            }
            catch(error) {
                console.error(error)
            }
        },

        async get3ProductsByCurrentProductCategory() {
            let {data} = await this.$http.get('products/category/' + this.productData.category + '/?limit=3')
            this.associatedProducts = data
        },

        mountProductUrlTo(product) {
            product.title = product.title.trim()
            product.title = product.title.replaceAll(' ', '-')
            product.title = product.title.replaceAll('.', '')
            product.title = product.title.replaceAll(',', '')
            product.title = product.title.replaceAll('\'', '')
            product.title = product.title.toLowerCase()

            return '/' + product.id + '/' + product.title
        }
    }
}
</script>

<style scoped>
.container-product-photo:hover {
    cursor: pointer;
}

.product-assoc-img
{
    min-height: 150px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
}

.product-title {
    font-size: 14px;
}
</style>