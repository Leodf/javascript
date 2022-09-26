<template>
  <header class="header">
    <p>Ola mundo</p>
  </header>
</template>

<script>
export default {
    name: 'HeaderVue'
}
</script>

<style scoped>
    .header {
        grid-area: 'header';
        background: linear-gradient(to right, #1e469a, #49a7c1);
        height: 10vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>