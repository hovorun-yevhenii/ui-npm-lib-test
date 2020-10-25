<template>
  <div id="app">
    <app-header :version="version" />

    <section>
      <side-bar />

      <main>
        <router-view />
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as config from '../package.json';
import AppHeader from './components/AppHeader.vue';
import SideBar from './components/SideBar.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AppHeader,
    SideBar
  },
  computed: {
    version() {
      return config.version
    }
  },
  methods: {
    handleClick() {
      console.log(config.version)
    }
  }
});
</script>

<style lang="scss">
 html,
 body {
   padding: 0;
   margin: 0;
 }

 * {
   box-sizing: border-box;
 }
 
 [id='app'] {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

   section {
     display: flex;
     flex-grow: 1;
   }

   main {
     flex-grow: 1;
     padding: 16px;
   }
 }
</style>