import { useProductsStore } from '@/stores/products'

export function usePopHouseCategories() {
  const { arrayWithProducts } = useProductsStore()

  const houseCategories = computed(() => {
    const uniquehouseCategories = new Set()
    for (const product of arrayWithProducts)
      uniquehouseCategories.add(product.category)

    return Array.from(uniquehouseCategories)
  })

  return { houseCategories }
}
