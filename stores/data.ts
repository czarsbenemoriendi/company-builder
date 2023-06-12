import { defineStore } from 'pinia'
import { useGetData } from '../composables/getData'
import type { ProductType } from '~/types/main'

const { fetchDataFromApi } = useGetData()
const data: ProductType[] = await fetchDataFromApi()

export const useDataStore = defineStore('data', () => {
  const products = ref(data)
  return { products }
},
)
