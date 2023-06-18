<script setup lang='ts'>
import type { ProductType } from '~/types/main'

import { useCalculateValues } from '@/composables/calculateValues'

const { item } = defineProps<{
  item: ProductType
}>()

const { currencySymbol } = useCalculateValues()
</script>

<template>
  <div>
    <span v-if="currencySymbol === '$'">{{ currencySymbol + item.productPrice }}</span>
    <span v-else class="block pb-2 font-bold typography-text-lg">{{ item.productPrice + currencySymbol }}</span>
  </div>
</template>
