<script setup lang='ts'>
import { useCalculateValues } from '@/composables/calculateValues'
import type { ProductType } from '@/types/main'

const { updatedProducts } = useCalculateValues()
const route = useRoute()

const sortedProducts: Ref<ProductType[]> = ref([])

const sorted = function () {
  sortedProducts.value = useSorted(updatedProducts.value, (a, b) => {
    return a.productPrice - b.productPrice
  }).value
}
</script>

<template>
  <div class="flex">
    <button @click="sorted">
      Sort
    </button>
    <div v-for="item in sortedProducts.length === 0 ? updatedProducts : sortedProducts" :key="item.productId">
      <div v-if="item.category === route.params.category">
        <CardProductCard :item="item" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<style scoped></style>
