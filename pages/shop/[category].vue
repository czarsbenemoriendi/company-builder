<script setup lang='ts'>
const { products } = useCreateMapFromData()
const route = useRoute()
</script>

<template>
  <div class="flex">
    <div v-for="item in products" :key="item.productId">
      <div v-if="item.category === route.params.category">
        <CardProductCard :item="item" />
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<style scoped></style>
