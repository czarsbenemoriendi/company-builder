<script lang="ts" setup>
const { updatedProducts } = useCalculateValues()
const route = useRoute()
</script>

<template>
  <div v-for="item in updatedProducts" :key="item.productId">
    <Card :route="route" :item="item" />
  </div>
</template>
