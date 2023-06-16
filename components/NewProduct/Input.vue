<script setup lang="ts">
import { SfInput } from '@storefront-ui/vue'
</script>

<template>
  <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5 mt-4 md:mt-0">
    <span class="typography-text-sm font-medium">House type</span>
    <SfInput name="firstName" required />
  </label>
</template>
