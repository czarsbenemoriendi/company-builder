<script lang="ts" setup>
import { type Ref, ref, watch } from 'vue'
import { offset } from '@floating-ui/vue'
import { watchDebounced } from '@vueuse/shared'
import { unrefElement } from '@vueuse/core'
import {
  SfIconCancel,
  SfIconSearch,
  SfInput,
  SfListItem,
  SfLoaderCircular,
  useDisclosure,
  useDropdown,
  useTrapFocus,
} from '@storefront-ui/vue'
import { useCreateMapFromData } from '~/composables/createMapFromData'
import type { ProductType } from '~/types/main'

const router = useRouter()
const route = useRoute()
const { products } = useCreateMapFromData()
const inputModel = ref('')
const inputRef = ref()
const dropdownListRef = ref()
const isLoadingSnippets = ref(false)
const snippets = ref<{ highlight: string; rest: string; product: ProductType }[]>([])
const { isOpen, close, open } = useDisclosure()
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [offset(4)],
})
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

watch(inputModel, () => {
  if (inputModel.value === '')
    reset()
})

watchDebounced(
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
  const results = products
    .filter(product =>
      (product.productName.toLowerCase().startsWith(phrase.toLowerCase()))
      || (product.category.toLowerCase().startsWith(phrase.toLowerCase())) || (product.animal.toLowerCase().startsWith(phrase.toLowerCase())),
    )
    .map((product) => {
      const highlight = product.productName.substring(0, phrase.length)
      const rest = product.productName.substring(phrase.length)
      return { highlight, rest, product }
    })
  return results
}
</script>

<template>
  <form ref="referenceRef" role="search" class="relative" @submit.prevent="submit">
    <SfInput
      ref="inputRef"
      v-model="inputModel"
      aria-label="Search"
      placeholder="Search 'Hedgehog House' or 'Rabbit hut'..."
      @focus="open"
    >
      <template #prefix>
        <SfIconSearch />
      </template>
      <template #suffix>
        <button
          v-if="inputModel"
          type="button"
          aria-label="Reset search"
          class="flex rounded-md focus-visible:outline focus-visible:outline-offset"
          @click="reset"
        >
          <SfIconCancel />
        </button>
      </template>
    </SfInput>
    <div v-if="isOpen" ref="floatingRef" :style="style" class="left-0 right-0">
      <div
        v-if="isLoadingSnippets"
        class="flex items-center justify-center w-full h-20 py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <SfLoaderCircular />
      </div>
      <ul
        v-else-if="snippets.length > 0"
        ref="dropdownListRef"
        class="py-2 bg-white border border-solid rounded-md border-neutral-100 drop-shadow-md"
      >
        <li v-for="{ highlight, rest, product } in snippets" :key="product.productId">
          <SfListItem
            tag="button"
            type="button"
            class="flex justify-start"
            @click="() => selectValue(product.productName)"
            @keydown.enter.space.prevent="selectValue(product.productName)"
          >
            <p class="text-left">
              <span>{{ highlight }}</span>
              <span class="font-medium">{{ rest }}</span>
            </p>
          </SfListItem>
        </li>
      </ul>
    </div>
  </form>
</template>
