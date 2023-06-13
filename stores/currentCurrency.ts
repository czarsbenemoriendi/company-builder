import { defineStore } from 'pinia'
import currencyData from '@/data/currentExchangeRates.json'
import { useCalculateValues } from '@/composables/calculateValues'

export const useCurrentCurrencyStore = defineStore('currentCurrency', () => {
  const { updatedProducts } = useCalculateValues()
  const exchangeDataJson = ref(currencyData)

  return { updatedProducts, exchangeDataJson }
})
