import { useDataStore } from '../stores/data'

export function useCreateMapFromData() {
  const { products } = useDataStore()

  const categories = computed(() => {
    const uniqueCategories = new Set()
    for (const product of products)
      uniqueCategories.add(product.category)

    return Array.from(uniqueCategories)
  })

  const treeProducts = products.filter(product => product.category === 'tree')
  const groundProducts = products.filter(product => product.category === 'ground')

  return { categories, treeProducts, groundProducts, products }
}
