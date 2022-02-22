export default {
    methods: {
        productDetailURL(product) {
            let title = product.title
            title = title.trim()
            title = title.replaceAll(' ', '-')
            title = title.replaceAll('.', '')
            title = title.replaceAll(',', '')
            title = title.replaceAll('\'', '')
            title = title.replaceAll('/', '')
            title = title.toLowerCase()

            return '/' + product.id + '/' + title
        }
    }
}