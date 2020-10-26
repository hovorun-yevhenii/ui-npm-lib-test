<template>
  <div class="wrapper">
    <h1>{{$route.name}}</h1>
    <router-view />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur culpa fuga illo laudantium placeat quasi quos? Autem consectetur eligendi est, explicabo fuga libero nisi nostrum omnis quaerat recusandae temporibus!
    </p>
  </div>
</template>

<style>
h1 {
  margin-bottom: 64px;
}

p {
  margin-top: 64px;
}
</style>