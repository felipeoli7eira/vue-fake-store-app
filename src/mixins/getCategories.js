export default {
    methods: {

        /**
         * @method getCategories
         * @return array - Array de categorias
         * 
         * Busca as categorias na API e salva na sessionStorage para evitar ficar o tempo todo fazendo essa request.
         * Caso elas já estejam salvas na session, retorna elas de lá
         */
        async getCategories() {
            const categoriesSessionStorage = sessionStorage.v_store_categories

            if (categoriesSessionStorage === undefined)
            {
                const { data } = await this.$http.get('products/categories')
                sessionStorage.v_store_categories =JSON.stringify(data)
                return data
            }
            else
            {
                return JSON.parse(categoriesSessionStorage)
            }
        }
    }
}