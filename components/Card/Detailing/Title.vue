<script setup lang='ts'>
import { SfLink } from '@storefront-ui/vue'
import type { ProductType } from '~/types/main'

defineProps<{
  item: ProductType
}>()
</script>

<template>
  <SfLink href="#" variant="secondary" class="no-underline">
    {{ item.productName }}
  </SfLink>
</template>
