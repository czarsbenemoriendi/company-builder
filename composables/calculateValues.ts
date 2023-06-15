import { useProductsStore } from '@/stores/products'

export const exchangeV = ref(1)
export const symbolToPrint = ref('zł')

export function useCalculateValues() {
  const { arrayWithProducts } = useProductsStore()

  const updatedProducts = computed(() => {
    return arrayWithProducts.map((product) => {
      if (Object.hasOwn(product, 'productPrice')) {
        return {
          ...product,
          productPrice: product.productPrice * exchangeV.value,
        }
      }
      return product
    })
  })

  return { updatedProducts }
}
