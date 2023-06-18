<script setup lang='ts'>
const route = useRoute()
const { updatedProducts } = useCalculateValues()
</script>

<template>
  <div v-for="item in updatedProducts" :key="item.productId">
    <div v-if="item.productName === route.query.phrase || item.animal === route.query.phrase || item.category === route.query.phrase">
      <CardProduct :item="item" />
    </div>
  </div>
</template>
