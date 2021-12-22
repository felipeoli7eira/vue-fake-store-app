<template>
    <footer id="footer" class="text-center bg-dark p-4 text-white">
        <nav>
            <p class="mb-0">©️{{currentYear}}</p>
            <p class="m-0">
                Desenvolvido com a <a class="link-info" href="https://fakestoreapi.com">fake store api</a> por <a class="link-info" href="https://github.com/felipeoli7eira">Felipe Oliveira</a>
            </p>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            currentYear: (new Date).getFullYear()
        }
    }
}
</script>

<style>

</style>