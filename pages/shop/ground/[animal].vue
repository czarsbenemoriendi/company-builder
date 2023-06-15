<script setup lang='ts'>
const { updatedProducts } = useCalculateValues()
const route = useRoute()
</script>

<template>
  <div v-for="item in updatedProducts" :key="item.productId">
    <div v-if="item.animal === route.params.animal">
      <CardProductCard :item="item" />
    </div>
  </div>
</template>
