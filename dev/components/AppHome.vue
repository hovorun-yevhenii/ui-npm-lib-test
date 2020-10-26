<template>
  <div class="section">
    <img src="https://www.flaticon.com/svg/static/icons/svg/949/949869.svg" alt="">

    <p>{{config.name}}</p>

    <p>{{config.description}}</p>
  </div>
</template>

<script>
export default {
  name: "AppHome",
  computed: {
    config() {
      return this.$parent.config.default;
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: 5vw 0;
    width: 20vw;
    opacity: 0.8;
    filter: saturate(0);
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>