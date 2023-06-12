import { defineStore } from 'pinia'
import currencyData from '@/data/currentExchangeRates.json'

export const useCurrentCurrencyStore = defineStore('currentCurrency', () => {
  const exchangeData = ref(currencyData)

  return { exchangeData }
})
