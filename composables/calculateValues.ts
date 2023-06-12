import { useCurrentCurrencyStore } from '@/stores/currentCurrency'
import { useDataStore } from '@/stores/data'

const { products } = useDataStore()
const { exchangeData } = useCurrentCurrencyStore()

function updateProductPrice(products: any, value: number) {
  for (let i = 0; i < products.length; i++) {
    if (Object.hasOwn(products[i], 'productPrice'))

      products[i].productPrice = products[i].productPrice * value
  }
  return products
}

export function useCalculateValues(exchangeRate: number) {
  const updatedProduct = updateProductPrice(products, exchangeRate)

  return { updatedProduct }
}

export { exchangeData }
