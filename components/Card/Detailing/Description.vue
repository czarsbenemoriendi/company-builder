<script setup lang='ts'>
import type { ProductType } from '~/types/main'

defineProps<{
  item: ProductType
}>()
</script>

<template>
  <div>
    <p class="block py-2 font-normal leading-5 typography-text-sm text-white">
      {{ item.productDescription }}
    </p>
  </div>
</template>
