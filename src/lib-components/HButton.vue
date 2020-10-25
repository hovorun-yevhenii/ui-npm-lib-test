<template>
  <button @click="click">
    <slot/>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HButton',
  methods: {
    click(): void {
      this.$emit('click')
    },
  },
});
</script>

<style lang="scss" scoped>
  button {
    padding: 10px 32px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: #333;
    text-transform: uppercase;
    font: inherit;
    color: #EEE;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:focus {
      outline: none;
    }

    &:hover {
      background: #555;
    }

    &:active {
      background: #111;
    }
  }
</style>
