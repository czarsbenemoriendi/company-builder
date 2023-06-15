import { type Ref, ref, watch } from 'vue'
import { offset } from '@floating-ui/vue'
import { watchDebounced } from '@vueuse/shared'
import { unrefElement } from '@vueuse/core'
import {
  useDisclosure,
  useDropdown,
  useTrapFocus,
} from '@storefront-ui/vue'

import type { ProductType } from '@/types/main'
import { useProductsStore } from '~/stores/products'

export function useSearch() {
  const router = useRouter()

  const { arrayWithProducts } = useProductsStore()
  const { isOpen, close, open } = useDisclosure()
  const { referenceRef, floatingRef, style } = useDropdown({
    isOpen,
    onClose: close,
    placement: 'bottom-start',
    middleware: [offset(4)],
  })

  const inputModel = ref('')
  const inputRef = ref()
  const dropdownListRef = ref()
  const isLoadingSnippets = ref(false)
  const snippets = ref<{ highlight: string; rest: string; product: ProductType }[]>([])
  useTrapFocus(dropdownListRef as Ref<HTMLElement>, { arrowKeysUpDown: true, activeState: isOpen, initialFocus: false })

  function submit() {
    close()
    if (inputModel.value === '')
      return
    router.push(`/shop/search?phrase=${inputModel.value}`)
  }

  function focusInput() {
    const inputEl = unrefElement(inputRef)?.querySelector('input')
    inputEl?.focus()
  }

  function reset() {
    inputModel.value = ''
    snippets.value = []
    close()
    focusInput()
  }

  function selectValue(phrase: string) {
    inputModel.value = phrase
    close()
    focusInput()
  }

  const watchInput = watch(inputModel, () => {
    if (inputModel.value === '')
      reset()
  })

  const getSnippets = watchDebounced(
    inputModel,
    () => {
      if (inputModel.value) {
        const getSnippets = async () => {
          open()
          isLoadingSnippets.value = true
          try {
            const data = await mockAutocompleteRequest(inputModel.value)
            snippets.value = data
          }
          catch (error) {
            close()
            console.error(error)
          }
          isLoadingSnippets.value = false
        }

        getSnippets()
      }
    },
    { debounce: 500 },
  )

  // Just for presentation purposes. Replace mock request with the actual API call.
  const delay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 1000))
  async function mockAutocompleteRequest(phrase: string) {
    await delay()
    const results = arrayWithProducts
      .filter((product: ProductType) =>
        (product.productName.toLowerCase().startsWith(phrase.toLowerCase()))
      || (product.category.toLowerCase().startsWith(phrase.toLowerCase())) || (product.animal.toLowerCase().startsWith(phrase.toLowerCase())),
      )
      .map((product: ProductType) => {
        const highlight = product.productName.substring(0, phrase.length)
        const rest = product.productName.substring(phrase.length)
        return { highlight, rest, product }
      })
    return results
  }
  return { arrayWithProducts, isOpen, close, open, inputModel, inputRef, dropdownListRef, isLoadingSnippets, snippets, style, submit, reset, selectValue, delay, referenceRef, floatingRef, watchInput, getSnippets }
}
