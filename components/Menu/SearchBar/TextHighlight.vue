<script setup lang='ts'>
import {
  SfListItem,
} from '@storefront-ui/vue'
import type { ProductType } from '@/types/main'

defineProps<{
  highlight: string
  rest: string
  product: ProductType

}>()
const { selectValue } = useSearch()
</script>

<template>
  <SfListItem
    tag="button"
    type="button"
    class="flex justify-start"
    @click="() => selectValue(product.productName)"
    @keydown.enter.space.prevent="selectValue(product.productName)"
  >
    <p class="text-left">
      <span>{{ highlight }}</span>
      <span class="font-medium">{{ rest }}</span>
    </p>
  </SfListItem>
</template>
