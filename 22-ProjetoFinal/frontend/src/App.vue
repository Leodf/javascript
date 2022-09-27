<template>
    <div id="principal" :class="{'hide-menu': !estadoMenu}">
      <HeaderVue title="Cod3r - Base de Conhecimento" :hideToggle="false"/>
      <MenuVue />
      <ContentVue />
      <FooterVue />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuVue from './components/template/MenuVue.vue'
import ContentVue from './components/template/ContentVue.vue'
import HeaderVue from './components/template/HeaderVue.vue'
import FooterVue from './components/template/FooterVue.vue'

export default {
  name: 'App',
  components: { FooterVue, HeaderVue, ContentVue, MenuVue },
  computed: mapGetters(['estadoMenu'])
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

  #principal {
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

  #principal.hide-menu {
    grid-template-areas:
      "header header"
      "content content"
      "footer footer";
  }

</style>
