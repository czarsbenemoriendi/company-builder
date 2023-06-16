<script setup lang='ts'>
import { SfButton, SfIconShoppingCart } from '@storefront-ui/vue'
</script>

<template>
  <SfButton type="button" size="sm">
    <template #prefix>
      <SfIconShoppingCart size="sm" />
    </template>
    Add to cart
  </SfButton>
</template>
