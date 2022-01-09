export default {
    methods: {

        /**
         * @method getCategories
         * @return array - Array de categorias
         * 
         * Busca as categorias na API e salva em um cookie para evitar ficar o tempo todo fazendo essa request.
         * Caso elas já estejam salvas no cookie, retorna elas de lá
         */
        async getCategories() {
            const categoriesCookie = this.$cookies.get('v_store_categories')

            if (categoriesCookie === null)
            {
                const { data } = await this.$http.get('products/categories')
                this.$cookies.set('v_store_categories', JSON.stringify(data))

                return data
            }
            else
            {
                return JSON.parse(categoriesCookie)
            }
        }
    }
}