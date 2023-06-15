<script lang="ts" setup>
import { SfButton, SfDropdown, useDisclosure } from '@storefront-ui/vue'
import { useCurrentCurrencyStore } from '@/stores/currentCurrency'
import { exchangeV, symbolToPrint } from '@/composables/calculateValues'

const { exchangeDataJson } = useCurrentCurrencyStore()
const { isOpen, toggle } = useDisclosure()
const selectedCurrency = ref('')

function selectCurrency(currency: string, exchangeRate: number, symbol: string) {
  selectedCurrency.value = currency
  exchangeV.value = exchangeRate
  symbolToPrint.value = symbol
}
</script>

<template>
  <SfDropdown v-model="isOpen">
    <template #trigger>
      <SfButton @click="toggle()">
        {{ selectedCurrency !== '' ? selectedCurrency : 'PLN' }}
      </SfButton>
    </template>
    <ul v-for="{ symbol, currency, exchangeRate } in exchangeDataJson" :key="symbol" class="w- p-2 bg-[#018937]">
      <button @click="selectCurrency(currency, exchangeRate, symbol)">
        {{ `${symbol} - ${currency}` }}
      </button>
    </ul>
  </SfDropdown>
</template>

<style scoped>

</style>
