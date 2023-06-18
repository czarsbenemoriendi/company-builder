import { defineStore } from 'pinia'
import type { ProductType } from '@/types/main'

export const useProductsStore = defineStore('products', () => {
  const arrayWithProducts: Ref<ProductType[]> = ref([])
  const main = async () => {
    const productsFetch = await useFetch('/api/productsData')
    if (productsFetch.data === null)
      return
    arrayWithProducts.value = productsFetch.data.value as ProductType[]
  }
  main()
  return { arrayWithProducts, main }
},
)
