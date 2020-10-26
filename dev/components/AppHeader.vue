<template>
  <header>
    <router-link to="/">{{config.default.name}}</router-link>
    <span>{{ config.default.version }}</span>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['config']
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