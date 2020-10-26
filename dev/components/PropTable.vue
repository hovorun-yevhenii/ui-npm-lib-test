<template>
  <div class="props">
    <h2>Props</h2>
    <div class="props__row">
      <div class="props__head">Name</div>
      <div class="props__head">Type</div>
      <div class="props__head">Default</div>
      <div class="props__head">Description</div>
    </div>

    <div class="props__row" v-for="(prop, index) in properties" :key="index">
      <div class="props__name">{{prop.name}}</div>
      <div class="props__type">{{prop.type}}</div>
      <div>{{prop.default}}</div>
      <div>{{prop.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "PropTable",
  props: ['properties']
}
</script>

<style lang="scss" scoped>
.props {
  margin: 32px 0;

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 3fr;
    padding: 8px;
    border: 1px solid rgba(0,0,0,.12);
  }

  .props__row + .props__row {
    border-top: none;
  }
  
  &__head {
    color: #999;
  }

  &__name {
    font-weight: bold;
  }

  &__type {
    color: #999;
  }
}
</style>