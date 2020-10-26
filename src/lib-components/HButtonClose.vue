<template>
  <button @click="click">X</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HButtonClose',
  methods: {
    click(): void {
      this.$emit('click')
    },
  },
});
</script>

<style lang="scss" scoped>
  button {
    padding: 10px 15px;
    border: 1px solid #333;
    border-radius: 20px;
    background: #EEE;
    text-transform: uppercase;
    font: inherit;
    color: #333;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #BBB;
    }

    &:active {
      background: #AAA;
    }
  }
</style>
