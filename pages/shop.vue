<script setup lang='ts'>
import { SfButton } from '@storefront-ui/vue'

const { sort, isSorted } = useSortProducts()
</script>

<template>
  <div class="w-3/4 flex flex-col justify-center">
    <div class="flex justify-end">
      <SfButton type="button" size="sm" class="" @click="sort">
        Sort {{ !isSorted ? 'from the smallest to the largest' : 'from the largest to the smallest' }}
      </SfButton>
    </div>

    <div class="flex gap-5">
      <NuxtPage />
    </div>
  </div>
</template>
