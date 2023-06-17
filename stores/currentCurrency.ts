import { defineStore } from 'pinia'
import type { CurrencyType } from '@/types/main'

export const useCurrentCurrencyStore = defineStore('globalCurrencies', () => {
  const globalCurrencies: Ref<CurrencyType[]> = ref([])
  const main = async () => {
    const currencyData = await useFetch('/api/currencyData')
    if (currencyData.data === null)
      return
    globalCurrencies.value = currencyData.data.value as CurrencyType[]
  }

  main()

  return { globalCurrencies }
})
