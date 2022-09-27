<template>
  <aside class="menu" v-show="estadoMenu"></aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'MenuVue',
    computed: mapGetters(['estadoMenu'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>