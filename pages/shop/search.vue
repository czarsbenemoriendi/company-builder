<script setup lang='ts'>
const route = useRoute()
const { products } = useCreateMapFromData()
</script>

<template>
  <div v-for="item in products" :key="item.productId" class="flex">
    <div v-if="item.productName === route.query.phrase || item.animal === route.query.phrase || item.category === route.query.phrase">
      <CardProductCard :item="item" />
    </div>
  </div>
</template>

<style scoped></style>
