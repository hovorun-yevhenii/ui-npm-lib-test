<template>
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto at cupiditate deleniti excepturi
      illum impedit inventore iure laboriosam minus nobis obcaecati odit perferendis quam qui quis quisquam, rem vero!
    </p>

    <component-wrapper>
      <h-button-close @click="handleClick"/>
    </component-wrapper>

    <slot name="import"/>

    <prop-table :properties="properties" />
  </div>
</template>

<script>
import { HButtonClose } from '@/entry';
import ComponentWrapper from '../components/ComponentWrapper.vue';
import PropTable from '../components/PropTable.vue';

export default {
  components: {
    HButtonClose,
    ComponentWrapper,
    PropTable
  },
  data() {
    return {
      properties: [
        {
          name: 'type',
          type: 'string',
          default: 'primary',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem culpa eum magni maxime pariatur quisquam vitae!',
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'description',
        },
        {
          name: 'icon',
          type: 'string',
          default: '',
          description: 'description',
        },
        {
          name: 'name',
          type: 'type',
          default: 'default',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto autem culpa eum magni maxime pariatur quisquam vitae!',
        },
      ]
    }
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