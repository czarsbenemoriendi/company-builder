<script setup lang='ts'>
const { selectCurrency, globalCurrencies } = useChooseCurrency()
</script>

<template>
  <ul v-for="{ symbol, currency, exchangeRate } in globalCurrencies" :key="symbol" class="w- p-2 bg-[#018937] hover:bg-primary-800 cursor-pointer" @click="selectCurrency(currency, exchangeRate, symbol)">
    <li class="rounded-md">
      {{ `${symbol} - ${currency}` }}
    </li>
  </ul>
</template>
