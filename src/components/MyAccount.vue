<template>
    <div class="my-account d-flex flex-column align-items-center justify-content-center">
        <form class="d-flex flex-column align-items-center">

            <img src="@/assets/svgs/undraw_secure_login.svg" class="d-inline-block mb-4" width="200px">

            <div class="d-flex align-items-center mb-2 border p-1 px-4 bg-body rounded-pill">
                <img src="@/assets/svgs/user.svg">
                <input class="form-control border-0 bg-none shadow-none" type="email" placeholder="Email address" required>
            </div>

            <div class="d-flex align-items-center mb-2 border p-1 px-4 bg-body rounded-pill">
                <img src="@/assets/svgs/lock.svg">
                <input class="form-control border-0 bg-none shadow-none" type="password" placeholder="Pass****" required>
            </div>

            <div class="d-grid w-100">
                <button class="btn rounded-pill p-2 fw-bold shadow-success shadow-none" type="button">LOGIN</button>
            </div>

            <nav class="mt-3">
                <a>Não tenho conta</a>
            </nav>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'MyAccount'
    }
</script>

<style scoped>

form button, form button:hover, form button:active {
    color: #fff;
}

form button {
    background-color: #96CE9D;
}

form button:hover {
    background-color: #a6e0ae;
}

form button:active {
    background-color: #a9f5b3;
}

.my-account {
    min-height: 80vh;
}

form nav a {
    cursor: pointer;
}
</style>