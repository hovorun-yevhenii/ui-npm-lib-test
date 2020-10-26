<template>
  <div class="wrapper">
    <h1>{{$route.name}}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequuntur culpa fuga illo laudantium placeat quasi quos? Autem consectetur eligendi est, explicabo fuga libero nisi nostrum omnis quaerat recusandae temporibus!
    </p>

    <div class="colors">
      <div class="colors__item" v-for="(color, name) in colors" :key="color">
        <div class="colors__value" :style="`background: ${color}`"></div>
        <div class="colors__name">{{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
const colors = {
  color_4df5d9: '#4DF5D9',
  color_67dbc8: '#67DBC8',
  color_6848f5: '#6848F5',
  color_685cf5: '#685CF5',
  color_680fff: '#680FFF',
  color_1b0e44: '#1B0E44',
  color_dda4b6: '#DDA4B6',
  color_f0cee0: '#F0CEE0',
  color_edf0f2: '#EDF0F2',
  color_d5d5d4: '#D5D5D4',
  color_808080: '#808080',
  color_c60000: '#C60000',
  color_7ebaf5: '#7EBAF5',
  color_34d804: '#34D804',
  color_ffffff: '#FFFFFF',
}

export default {
  name: "AppColors",
  data() {
    return {
      colors
    }
  }
}
</script>

<style lang="scss" scoped>
.colors {
  display: grid;
  grid-gap: 16px 64px;
  grid-template-columns: 1fr 1fr;
  &__item {
    display: flex;
    align-items: center;
  }
  &__value {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    border: 1px solid #999;
    border-radius: 50%;
  }
}
</style>