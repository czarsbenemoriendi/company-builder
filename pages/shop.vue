<script setup lang='ts'>
import { SfButton } from '@storefront-ui/vue'

const { sort } = useSortProducts()
</script>

<template>
  <div class="w-full">
    <div class="flex justify-end">
      <SfButton type="button" size="sm" class="" @click="sort">
        Sort me
      </SfButton>
    </div>

    <div class="flex">
      <NuxtPage />
    </div>
  </div>
</template>
