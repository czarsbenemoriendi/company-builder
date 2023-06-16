<script setup lang='ts'>
import { SfCounter, SfLink, SfRating } from '@storefront-ui/vue'
</script>

<template>
  <div class="flex items-center pt-1">
    <SfRating size="xs" :value="5" :max="5" />

    <SfLink href="#" variant="secondary" class="pl-1 no-underline">
      <SfCounter size="xs">
        123
      </SfCounter>
    </SfLink>
  </div>
</template>
