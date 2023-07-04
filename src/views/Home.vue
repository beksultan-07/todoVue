<template>
    <section class="hero">
        <div class="hero-wrap">
            <h1 class="hero-title">Add your task for a day.</h1>
            <router-link to="/todo" class="btn hero-btn">Add task</router-link>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
    .hero{
        width: 100%;
        height: calc(100vh - 80px);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -80px;
    }
    .hero-title{
        font-size: 64px;
        font-weight: 700;
        margin: 0 0 30px;
    }
    .hero-wrap{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hero-btn{
        background: #000;
        color: #fff;
    }
</style>