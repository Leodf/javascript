<template>
  <div class="calculator">
    <DisplayVue />
    <ButtonVue />
  </div>
</template>

<script>
import DisplayVue from '../components/DisplayVue.vue';
import ButtonVue from '../components/ButtonVue.vue';

export default {
    components: { ButtonVue, DisplayVue }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>