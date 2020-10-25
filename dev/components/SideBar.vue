<template>
  <nav>
    <div v-for="route in componentRoutes" :key="route.path">
      <router-link :to="route.path">{{ route.name }}</router-link>
      <hr>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    componentRoutes() {
      return this.$router.options.routes.filter(route => route.name);
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 320px;
  padding: 16px;
  background-color: #eee;
}
</style>