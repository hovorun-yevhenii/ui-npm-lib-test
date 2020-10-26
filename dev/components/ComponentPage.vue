<template>
  <div class="wrapper">
    <h1>{{$route.name}}</h1>
    <router-view>
      <div class="import" slot="import">
        import {{'{ ' + $route.name + ' }'}} from '{{config.name}}';
      </div>
    </router-view>
  </div>
</template>

<script>
export default {
  inject: ['config'],
}
</script>

<style scoped>
h1 {
  margin-bottom: 64px;
}

p {
  margin-top: 64px;
}

.import {
  margin: 64px 0;
  padding: 16px 32px;
  background-color: #444;
  color: #eee;
  font-family: monospace;
}
</style>