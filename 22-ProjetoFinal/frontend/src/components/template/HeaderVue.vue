<template>
  <header class="header">
    <a class="toggle" @click="mudarEstado" v-if="!hideToggle">
      <i class="fa fa-lg" :class="icon"></i>
    </a>
    <h1 class="title">
        <router-link to="/"> {{ title }} </router-link>
    </h1>
    <UserDropdown v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import UserDropdown from './UserDropdown.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'HeaderVue',
    components: { UserDropdown },
    props: {
      title: String,
      hideToggle: Boolean,
      hideUserDropdown: Boolean
    },
    computed: {
      ...mapGetters(['estadoMenu']),
      icon() {
        return this.estadoMenu ? "fa-angle-left" : "fa-angle-down"
      }
    },
    methods: mapActions(['mudarEstado'])
    }
</script>

<style scoped>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
       font-size: 1.2rem;
       color: #fff;
       font-weight: 100;
       flex-grow: 1;
       text-align: center;
    }

    .title a {
      color: #fff;
      text-decoration: none;
    }

    header.header > a.toggle {
      width: 60px;
      height: 100%;
      color: #fff;
      justify-self: flex-start;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    header.header > a.toggle:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
</style>