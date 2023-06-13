<script lang="ts" setup>
import { SfButton, SfDropdown, useDisclosure } from '@storefront-ui/vue'
import { useCurrentCurrencyStore } from '@/stores/currentCurrency'

const { exchangeDataJson } = useCurrentCurrencyStore()
const { isOpen, toggle } = useDisclosure()
const selectedCurrency = ref('')
const exchangeR = ref(1)

function selectCurrency(currency: string, exchangeRate: number) {
  selectedCurrency.value = currency
  exchangeR.value = exchangeRate
  useTakeValue(exchangeR)
}
</script>

<template>
  <SfDropdown v-model="isOpen">
    <template #trigger>
      <SfButton @click="toggle()">
        {{ selectedCurrency !== '' ? selectedCurrency : 'Choose currency' }}
      </SfButton>
    </template>
    <ul v-for="{ symbol, currency, exchangeRate } in exchangeDataJson" :key="symbol" class="w- p-2 bg-[#018937]">
      <button @click="selectCurrency(currency, exchangeRate)">
        {{ `${symbol} - ${currency}` }}
      </button>
    </ul>
  </SfDropdown>
</template>

<style scoped>
.btn {
  color: #018937;
}
</style>
