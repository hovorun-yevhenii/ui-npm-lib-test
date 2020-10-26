<template>
  <nav>
    <div class="subtitle">Main</div>
    <router-link class="link" to="/colors">Colors</router-link>

    <div class="subtitle">Components</div>
    <div v-for="route in componentRoutes" :key="route.path">
      <router-link class="link" :to="route.path">{{ route.name }}</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  computed: {
    componentRoutes() {
      return this.$router.options.routes
          .find(route => route.name === 'components')?.children;
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 280px;
  padding: 16px;
  background-color: #eee;
  flex-shrink: 0;

  .link {
    display: block;
    padding: 8px 0;
    transition: 0.3s ease-in-out;
  }

  .link.router-link-exact-active.router-link-active {
    padding-left: 16px;
  }

  .subtitle {
    padding: 8px 0;
    margin-top: 16px;
    text-transform: uppercase;
  }
}
</style>