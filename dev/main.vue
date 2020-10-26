<template>
  <div id="app">
    <app-header :config="config"/>

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
import * as config from '../package.json';
import AppHeader from './components/AppHeader.vue';
import SideBar from './components/SideBar.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    AppHeader,
    SideBar
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
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 32px ;
  }

  .fade-enter-active, .fade-leave-active {
    transition: .3s ease-in-out;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>