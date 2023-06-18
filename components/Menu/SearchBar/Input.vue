<script setup lang='ts'>
import {
  SfIconCancel,
  SfIconSearch,
  SfInput,
} from '@storefront-ui/vue'

const { open, inputModel, inputRef, reset } = useSearch()
</script>

<template>
  <SfInput
    ref="inputRef"
    v-model="inputModel"
    aria-label="Search"
    placeholder="Search 'bats' or 'ground'..."
    @focus="open"
  >
    <template #prefix>
      <SfIconSearch />
    </template>
    <template #suffix>
      <button
        v-if="inputModel"
        type="button"
        aria-label="Reset search"
        class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
        @click="reset"
      >
        <SfIconCancel />
      </button>
    </template>
  </SfInput>
</template>
