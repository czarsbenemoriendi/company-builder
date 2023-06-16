<script setup lang='ts'>
import { SfButton, SfIconFavorite } from '@storefront-ui/vue'
</script>

<template>
  <SfButton
    type="button"
    variant="tertiary"
    size="sm"
    square
    class="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
    aria-label="Add to wishlist"
  >
    <SfIconFavorite size="sm" />
  </SfButton>
</template>
