<template>
  <header>
    <router-link to="/">JIMU UI</router-link>
    <span>{{ version }}</span>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['version']
}
</script>

<style lang="scss" scoped>
header {
  padding: 32px 16px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
}


</style>