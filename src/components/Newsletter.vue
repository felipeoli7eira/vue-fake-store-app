<template>
    <div class="newletter container my-5 p-4 bg-body shadow-sm">
        <h5 class="h5 fw-normal">Esteja por dentro das novidades</h5>
        <p class="fw-light text-muted">Receba novidades e promoções exclusivas no seu e-mail, assine nossa newletter</p>

        <form class="row form-newsletter">
            <div class="col col-12 col-md-4 mb-2 mb-md-0">
                <input
                type="text"
                placeholder="Seu nome"
                required
                class="form-control form-control-lg rounded-0 fw-light"
                >
            </div>
            <div class="col col-12 col-md-4 mb-2 mb-md-0">
                <input
                type="email"
                placeholder="Seu principal e-mail"
                required
                class="form-control form-control-lg rounded-0 fw-light"
                >
            </div>
            <div class="col col-12 col-md-4 d-grid gap-2">
                <button @click="fakeSignature" type="button" class="btn btn-dark btn-lg btn-lg rounded-0 fw-light">Assinar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        fakeSignature() {
            alert('Obrigado! (Nenhuma informação foi salva, veja o código fonte)')
        }
    }
}
</script>

<style scoped>
.form-newsletter input,
.form-newsletter button {
    font-size: 15px;
}
</style>