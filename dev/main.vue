<template>
  <div id="app">
    <app-header />

    <div class="section">
      <side-bar/>

      <main>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.fullPath" />
        </transition>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import config from '../package.json';
import AppHeader from './components/AppHeader.vue';
import SideBar from './components/SideBar.vue';

export default Vue.extend({
  name: 'Demo',
  components: {
    AppHeader,
    SideBar
  },
  provide: {
    config
  },
  data() {
    return {
      config
    }
  }
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');

html,
body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
  &::selection {
    background: #34d80475;
  }
}

[id='app'] {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Syne Mono', monospace;
  color: #444;

  .section {
    display: flex;
    flex-grow: 1;
  }

  main {
    flex-grow: 1;
    padding: 16px;
    border-left: 1px solid #999;
    border-top: 1px solid #999;
  }

  a {
    text-decoration: none;
  }

  .wrapper {
    height: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 32px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: .3s ease-in-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>