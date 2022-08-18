<template>
  <div class="calculator">
    <DisplayVue value="1000"/>
    <ButtonVue label="AC" triple @onClick="clearMemory"/>
    <ButtonVue label="/" operation @onClick="setOperation"/>
    <ButtonVue label="7" @onClick="addDigit"/>
    <ButtonVue label="8" @onClick="addDigit"/>
    <ButtonVue label="9" @onClick="addDigit"/>
    <ButtonVue label="*" operation @onClick="setOperation"/>
    <ButtonVue label="4" @onClick="addDigit"/>
    <ButtonVue label="5" @onClick="addDigit"/>
    <ButtonVue label="6" @onClick="addDigit"/>
    <ButtonVue label="-" operation @onClick="setOperation"/>
    <ButtonVue label="1" @onClick="addDigit"/>
    <ButtonVue label="2" @onClick="addDigit"/>
    <ButtonVue label="3" @onClick="addDigit"/>
    <ButtonVue label="+" operation @onClick="setOperation"/>
    <ButtonVue label="0" double @onClick="addDigit"/>
    <ButtonVue label="." @onClick="addDigit"/>
    <ButtonVue label="=" operation @onClick="setOperation"/>
  </div>
</template>

<script>
import DisplayVue from '../components/DisplayVue.vue';
import ButtonVue from '../components/ButtonVue.vue';

export default {
    components: { ButtonVue, DisplayVue },
    methods: {
      clearMemory() {
        console.log('Limpar Memória!')
      },
      setOperation(operation) {
        console.log('Operação ' + operation)
      },
      addDigit(n) {
        console.log('Digito ' + n)
      }
    }
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