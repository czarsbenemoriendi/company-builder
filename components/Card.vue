<script setup lang='ts'>
import type { RouteLocationNormalized } from 'vue-router'
import type { ProductType } from '~/types/main'

defineProps<{
  route: RouteLocationNormalized
  item: ProductType
}>()
</script>

<template>
  <div v-if="item.animal === route.params.animal">
    <CardProduct :item="item" />
  </div>
</template>
