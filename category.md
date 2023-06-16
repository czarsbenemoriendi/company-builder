<script setup lang='ts'>
const { sortedProducts, route } = useSortProducts()

</script>

<template>
  <div class="flex">
    <div v-for="item in sortedProducts" :key="item.productId">
      <div v-if="item.category === route.params.category">
        <CardProduct :item="item" />
      </div>
      <NuxtPage />
    </div>
  </div>
</template>
