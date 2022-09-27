<template>
    <HeaderVue title="Cod3r - Base de Conhecimento" :hideToggle="false"/>
    <MenuVue />
    <ContentVue />
    <FooterVue />
</template>

<script>
import { mapState } from 'vuex'
import MenuVue from './components/template/MenuVue.vue'
import ContentVue from './components/template/ContentVue.vue'
import HeaderVue from './components/template/HeaderVue.vue'
import FooterVue from './components/template/FooterVue.vue'

export default {
  name: 'App',
  components: { FooterVue, HeaderVue, ContentVue, MenuVue },
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
  * {
    font-family: "Lato", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    -webkit-font-smoothnig: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-rows: 60px 1fr 40px;
    grid-template-columns: 300px 1fr;
    grid-template-areas:
      "header header"
      "menu content"
      "menu footer";
  }

  #app.hide-menu {
    grid-template-areas:
      "header header"
      "content content"
      "footer footer";
  }

</style>
