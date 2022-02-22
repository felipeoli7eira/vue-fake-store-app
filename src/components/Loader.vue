<template>
    <div id="loading" v-show="loading">
        <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Carregando...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loader',

        props: ['loading'],

        data() {
            return {
            }
        }
    }
</script>

<style scoped>
#loading {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    background-color: rgba(255, 255, 255, 0.97);
}
</style>