<script lang="ts" setup>
import { SfButton, SfDropdown } from '@storefront-ui/vue'

const { selectedCurrency, isOpen, toggle, globalCurrencies } = useChooseCurrency()
</script>

<template>
  <SfDropdown v-model="isOpen">
    <template #trigger>
      <SfButton @click="toggle()">
        {{ selectedCurrency === '' ? globalCurrencies[globalCurrencies.length - 1].currency : selectedCurrency }}
      </SfButton>
    </template>
    <MenuCurrencyItems />
  </SfDropdown>
</template>
