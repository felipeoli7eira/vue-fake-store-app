<template>
    <nav class="navbar navbar-light bg-light m-3 rounded-3">
        <div class="container-fluid">
            <a :href="appBaseURL" class="navbar-brand text-app-name" title="Vue Store">VueStore</a>

            <button @click="menu.open = !menu.open" class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <img :src="menu.open ? menu.x : menu.bars" alt="MenuBars">
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

document.title = 'VueStore'

export default {
    name: 'NavBar',
    data() {
        return {
            appBaseURL: this.baseAppUrl, // main.js
            menu: {
                open: false,
                bars: require('@/assets/svgs/menubars.svg'),
                x: require('@/assets/svgs/x.svg')
            }
        }
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Imperial+Script&family=Raleway:wght@100;200;300;400;500;600;800;900&display=swap');

.text-app-name {
    font-family: 'Bebas Neue', cursive;
    font-size: 25px;
}

.navbar-toggler:hover {
    /* background-color: #1d2024 */
}

.navbar {
    background-color: #a6b0f7 !important;
}

</style>