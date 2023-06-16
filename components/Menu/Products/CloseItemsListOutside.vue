<script setup lang='ts'>
import {
  SfButton,
  SfIconClose,
} from '@storefront-ui/vue'

const { close } = useTopBar()
</script>

<template>
  <div class="flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden">
    <div class="flex items-center typography-text-lg font-medium text-white">
      Browse houses
    </div>
    <SfButton
      square
      variant="tertiary"
      aria-label="Close navigation menu"
      class="text-white"
      @click="close()"
      @keydown.enter.space="close()"
    >
      <SfIconClose />
    </SfButton>
  </div>
</template>
