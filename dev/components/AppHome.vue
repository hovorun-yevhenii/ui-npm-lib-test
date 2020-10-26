<template>
  <div class="section">
    <app-logo/>

    <p>{{config.name}}</p>

    <p>{{config.description}}</p>
  </div>
</template>

<script>
import AppLogo from './AppLogo.vue';

export default {
  name: 'AppHome',
  components: {
    AppLogo
  },
  inject: ['config']
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>