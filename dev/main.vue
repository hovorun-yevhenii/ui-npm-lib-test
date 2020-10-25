<template>
  <div id="app">
    <h-button @click="handleClick">
      button
    </h-button>
    <router-link to="/foo">Перейти к Foo</router-link>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { HButton } from '@/entry';

const config = require("../package.json");

export default Vue.extend({
  name: 'ServeDev',
  components: {
    HButton,
  },
  methods: {
    handleClick() {
      console.log(config.version)
    }
  }
});
</script>
