<template>
  <div>
    <h-button @click="handleClick">
      button
    </h-button>
  </div>
</template>

<script>
import { HButton } from '@/entry';

export default {
  name: "Foo",
  components: {
    HButton
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