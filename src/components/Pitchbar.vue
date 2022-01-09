<template>
    <div class="pitchbar">
        <div class="container shadow-sm p-2 my-4 bg-body rounded">
            <div class="row text-center">
                <div class="col col-4">
                    <img loading="lazy" src="@/assets/png/creditcard.png" width="30" alt="Pague com cartão de crédito em até 12x">
                    <p class="mb-0 mt-1">Pague em até 12x</p>
                </div>
                <div class="col col-4">
                    <img loading="lazy" src="@/assets/png/barcode.png" width="30" alt="Desconto no boleto á vista">
                    <p class="mb-0 mt-1">Desconto no boleto</p>
                </div>
                <div class="col col-4">
                    <img loading="lazy" src="@/assets/png/pix.png" width="30" alt="Pagamento facilitado via pix">
                    <p class="mb-0 mt-1">Pagamento facilitado</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pitchbar'
}
</script>

<style scoped>

.pitchbar p {
    font-size: 14px;
    white-space: nowrap;
}

@media (max-width: 500px) {
    .pitchbar p {
        font-size: 10px;
    }
}

</style>
