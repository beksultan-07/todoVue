<template>
    <header class="container">
        <div class="header">
            <nav class="navbar">
                <router-link class="navbar-link btn" to="/">Home</router-link>
                <router-link class="navbar-link btn" to="/todo">Todo</router-link>
            </nav>
        </div>
    </header>
</template>

<script setup>

</script>

<style scoped>
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
    }

    .navbar{
        display: flex;
        align-items: center;
    }
    .navbar-link{
        margin: 0 10px;
    }
    a.router-link-active {
        background: #000;
        color: #fff;
    }
</style>