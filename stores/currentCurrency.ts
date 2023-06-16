import { defineStore } from 'pinia'
import type { CurrencyType } from '@/types/main'

const currencyData = await useFetch('/api/currencyData')

export const useCurrentCurrencyStore = defineStore('globalCurrencies', () => {
  const globalCurrencies: Ref<CurrencyType[]> = ref(currencyData.data)

  return { globalCurrencies }
})
