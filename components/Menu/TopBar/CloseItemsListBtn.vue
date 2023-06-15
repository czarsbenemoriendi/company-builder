<script setup lang='ts'>
import {
  SfButton,
  SfIconClose,
} from '@storefront-ui/vue'

const { close } = useTopBar()
</script>

<template>
  <div>
    <SfButton
      square
      size="sm"
      variant="tertiary"
      aria-label="Close navigation menu"
      class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
      @click="close()"
    >
      <SfIconClose class="text-neutral-500" />
    </SfButton>
  </div>
</template>

<style scoped></style>
