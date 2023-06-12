<script setup lang='ts'>
const { products } = useCreateMapFromData()
const route = useRoute()
</script>

<template>
  <div v-for="item in products" :key="item.productId">
    <div v-if="item.animal === route.params.animal">
      <CardProductCard :item="item" />
    </div>
  </div>
</template>

<style scoped></style>
