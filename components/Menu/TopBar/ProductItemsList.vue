<script setup lang='ts'>
import {
  SfListItem,
} from '@storefront-ui/vue'

const { capitalize, arrayWithProducts, houseCategories } = useTopBar()
</script>

<template>
  <div
    v-for="(item, index) in houseCategories"
    :key="index"
    class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0"
  >
    <NuxtLink
      :to="{ path: `/shop/${item}/` }"
      role="presentation"
      class="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
    >
      {{ capitalize(item, 'sentenceCase').value }}
    </NuxtLink>
    <hr class="mb-3.5">
    <ul>
      <li v-for="{ animal, productId, category } in arrayWithProducts" :key="productId">
        <nuxt-link :to="{ path: `/shop/${item}/${animal}` }">
          <SfListItem
            v-if="category === item"
            tag="a"
            href="#"
            size="sm"
            role="none"
            class="typography-text-base md:typography-text-sm py-4 md:py-1.5"
          >
            {{ capitalize(animal, 'sentenceCase').value }}
          </SfListItem>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
