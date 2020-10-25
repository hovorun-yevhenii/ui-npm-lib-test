<template>
  <div>
    <h-button-close @click="handleClick"/>
  </div>
</template>

<script>
import { HButtonClose } from '@/entry';

export default {
  name: "Foo",
  components: {
    HButtonClose
  },
  methods: {
    handleClick() {
      console.log('handleClick')
    }
  }
}
</script>

<style scoped>

</style>