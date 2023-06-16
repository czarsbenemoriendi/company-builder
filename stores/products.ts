import { defineStore } from 'pinia'
import type { ProductType } from '@/types/main'

const productsFetch = await useFetch('/api/productsData')

export const useProductsStore = defineStore('products', () => {
  const arrayWithProducts: Ref<ProductType[]> = ref(productsFetch.data)

  return { arrayWithProducts }
},
)
