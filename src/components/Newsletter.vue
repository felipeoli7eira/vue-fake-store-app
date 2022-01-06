<template>
    <div id="newletter-component" class="container my-5 p-4 bg-body shadow-sm">
        <h3>Seja o primeiro a saber!</h3>
        <p>Assine a nossa newsletter e receba no seu e-mail as novidades da loja</p>

        <form class="row justify-content-center">
            <div class="col col-12 col-md-4 mb-2 mb-md-0">
                <input
                    v-model="clientName"
                    type="text"
                    name="client_name"
                    id="client_name"
                    placeholder="Seu nome"
                    required
                    class="form-control form-control-lg rounded-0"
                >
            </div>
            <div class="col col-12 col-md-4 mb-2 mb-md-0">
                <input
                    v-model="clientEmail"
                    type="email"
                    name="client_email"
                    id="client_email"
                    placeholder="Seu principal e-mail"
                    required
                    class="form-control form-control-lg rounded-0"
                >
            </div>
            <div class="col col-12 col-md-4 d-grid gap-2">
                <button class="btn btn-dark btn-lg btn-lg rounded-0" @click="sign">assinar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clientName: '',
            clientEmail: ''
        }
    },

    methods: {
        sign() {

        }
    }
}
</script>

<style scoped>

.newletter {

}

</style>