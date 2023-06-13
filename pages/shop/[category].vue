<script setup lang='ts'>
import { exchangeV } from '@/composables/takeValue'

const { updatedProducts } = useCalculateValues()

const route = useRoute()
</script>

<template>
  <div class="flex">
    <div v-for="item in updatedProducts" :key="item.productId">
      <div v-if="item.category === route.params.category">
        <CardProductCard :item="item" />
      </div>
    </div>
    {{ exchangeV }}
    <NuxtPage />
  </div>
</template>

<style scoped></style>
