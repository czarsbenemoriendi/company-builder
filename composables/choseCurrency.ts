import { useDisclosure } from '@storefront-ui/vue'
import { useCurrentCurrencyStore } from '@/stores/currentCurrency'

const selectedCurrency = ref('')
// useCurrency
export function useChooseCurrency() {
  const { globalCurrencies } = useCurrentCurrencyStore()
  const { multipler, currencySymbol } = useCalculateValues()
  const { isOpen, toggle } = useDisclosure()

  function selectCurrency(currency: string, exchangeRate: number, symbol: string) {
    selectedCurrency.value = currency
    multipler.value = exchangeRate
    currencySymbol.value = symbol
  }

  return { selectCurrency, selectedCurrency, globalCurrencies, isOpen, toggle }
}
