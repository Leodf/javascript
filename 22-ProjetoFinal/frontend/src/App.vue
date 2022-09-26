<template>
  <HeaderVue />
  <ContentVue />
  <FooterVue />
</template>

<script>
import ContentVue from './components/template/ContentVue.vue'
import HeaderVue from './components/template/HeaderVue.vue'
import FooterVue from './components/template/FooterVue.vue'

export default {
  name: 'App',
  components: { FooterVue, HeaderVue, ContentVue
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
