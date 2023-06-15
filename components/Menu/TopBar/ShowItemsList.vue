<script setup lang='ts'>
import {
  SfButton,
  SfIconExpandMore,
} from '@storefront-ui/vue'

const { isOpen, toggle } = useTopBar()
</script>

<template>
  <div>
    <SfButton
      class="block mr-auto text-white font-body bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
      type="button"
      :aria-haspopup="true"
      :aria-expanded="isOpen"
      variant="tertiary"
      @click="toggle()"
    >
      <template #suffix>
        <SfIconExpandMore />
      </template>
      <span class="hidden md:inline-flex">Browse products</span>
    </SfButton>
  </div>
</template>

<style scoped></style>
