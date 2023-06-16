<script setup lang='ts'>
import { SfLink } from '@storefront-ui/vue'
import type { ProductType } from '~/types/main'

defineProps<{
  item: ProductType
}>()
</script>

<template>
  <SfLink href="#">
    <img
      :src="item.productImg"
      alt="Great product"
      class="block object-cover h-auto rounded-md aspect-square"
      :width="300"
      :height="300"
    >
  </SfLink>
</template>
