<script lang="ts" setup>
import type { ProductType } from '@/types/main'

const { item } = defineProps<{
  item: ProductType
}>()
</script>

<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
    <div class="relative">
      <CardDetailingImg :item="item" />
      <CardDetailingAddToWishList />
    </div>
    <div class="p-4 border-t border-neutral-200">
      <CardDetailingTitle :item="item" />
      <CardDetailingStarsAndCounter />
      <CardDetailingDescription :item="item" />
      <CardDetailingPrice :item="item" />
      <CardDetailingAddToCart />
    </div>
  </div>
</template>
