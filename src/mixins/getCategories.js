export default {

    data() {
        return {
            /**
             * Como nessa API, essas são as 4 únicas categorias disponíveis, decidi escrever elas no código mesmo
             * pra facilitar algumas coisas.
            */
            categories: [
                { label: "electronics" },
                { label: "jewelery" },
                { label: "men's clothing", slug: 'mens-clothing' },
                { label: "women's clothing", slug: 'womens-clothing' }
            ]
        }
    },
}