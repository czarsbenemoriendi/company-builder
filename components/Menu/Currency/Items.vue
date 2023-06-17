<script setup lang='ts'>
const { selectCurrency, globalCurrencies } = useChooseCurrency()
</script>

<template>
  <ul v-for="{ symbol, currency, exchangeRate } in globalCurrencies" :key="symbol" class="w- p-2 bg-[#018937]">
    <button @click="selectCurrency(currency, exchangeRate, symbol)">
      {{ `${symbol} - ${currency}` }}
    </button>
  </ul>
</template>
