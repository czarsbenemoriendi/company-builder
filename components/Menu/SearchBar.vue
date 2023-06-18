<script lang="ts" setup>
import {
  SfLoaderCircular,
} from '@storefront-ui/vue'

const { isOpen, dropdownListRef, isLoadingSnippets, snippets, style, submit, referenceRef, floatingRef } = useSearch()
</script>

<template>
  <form ref="referenceRef" role="search" class="relative hover:w-full transition-all duration-300 " @submit.prevent="submit">
    <MenuSearchBarInput />
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else-if="snippets.length > 0"
        ref="dropdownListRef"
        class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <li v-for="{ highlight, rest, product } in snippets" :key="product.productId">
          <MenuSearchBarTextHighlight :highlight="highlight" :rest="rest" :product="product" />
        </li>
      </ul>
    </div>
  </form>
</template>
