import { useProductsStore } from '@/stores/products'

const multipler = ref(1)
const currencySymbol = ref('zł')

export function useCalculateValues() {
  const { arrayWithProducts } = useProductsStore()

  const updatedProducts = computed(() => {
    return arrayWithProducts.map((product) => {
      if (Object.hasOwn(product, 'productPrice')) {
        return {
          ...product,
          productPrice: product.productPrice * multipler.value,
        }
      }
      return product
    })
  })

  return { updatedProducts, multipler, currencySymbol }
}
