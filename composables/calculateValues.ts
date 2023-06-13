import { useDataStore } from '@/stores/data'
import { exchangeV } from '@/composables/takeValue'

export function useCalculateValues() {
  const { products } = useDataStore()

  // function updateProductPrice(products: ProductType[], exchangeRate: Ref<number>) {
  //   for (let i = 0; i < products.length; i++) {
  //     if (Object.hasOwn(products[i], 'productPrice'))

  //       products[i].productPrice = products[i].productPrice * exchangeRate.value
  //   }
  //   return products
  // }
  const updatedProducts = computed(() => {
    return products.map((product) => {
      if (Object.hasOwn(product, 'productPrice')) {
        return {
          ...product,
          productPrice: product.productPrice * exchangeV.value,
        }
      }
      return product
    })
  })

  // const updatedProducts = updateProductPrice(products, multipler)
  return { updatedProducts }
}
