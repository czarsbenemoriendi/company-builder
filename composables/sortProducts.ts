import { useCalculateValues } from '@/composables/calculateValues'

const sortByPrice = ref(false)
export function useSortProducts() {
  const { updatedProducts } = useCalculateValues()
  const route = useRoute()

  const sortedProducts = computed(() => {
    if (sortByPrice.value)
      return [...updatedProducts.value].sort((a, b) => a.productPrice - b.productPrice)

    return updatedProducts.value
  })
  function sort() {
    sortByPrice.value = !sortByPrice.value
  }
  return { route, sort, sortedProducts }
}
