<template>
  <div class="sandbox">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .sandbox {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    border: 1px solid rgba(0,0,0,.12);
    background: #eee;
  }
</style>