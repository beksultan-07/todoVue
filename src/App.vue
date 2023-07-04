<template>
  <HeaderVue/>
  <main class="container">
    <router-view/>
  </main>
</template>

<script setup>
  import HeaderVue from './components/Header.vue';
</script>