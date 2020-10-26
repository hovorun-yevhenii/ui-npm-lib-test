<template>
  <header>
    <router-link to="/">{{config.name}}</router-link>
    <span>{{ config.version }}</span>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  inject: ['config'],
}
</script>

<style lang="scss" scoped>
header {
  padding: 32px 16px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
}
</style>