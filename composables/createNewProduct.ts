import { unrefElement } from '@vueuse/core'
import {
  useDisclosure,
  useDropdown,
  useId,
  useTrapFocus,
} from '@storefront-ui/vue'
import type { SelectOption } from '~/types/main'

export function useCreateNewProduct() {
  const options: SelectOption[] = [
    {
      label: 'Startup',
      value: 'startup',
    },
    {
      label: 'Business',
      value: 'business',
    },
    {
      label: 'Enterprise',
      value: 'enterprise',
    },
  ]

  const { close, toggle, isOpen } = useDisclosure({ initialValue: false })
  const selectedOption: Ref<SelectOption> | Ref<null> = ref(null)
  const id = useId()
  const listboxId = `select-dropdown-${id}`
  const selectTriggerRef = ref<HTMLDivElement>()

  const {
    referenceRef,
    floatingRef,
    style: dropdownStyle,
  } = useDropdown({
    isOpen,
    onClose: close,
  })

  useTrapFocus(floatingRef as Ref<HTMLUListElement>, {
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocusContainerFallback: true,
  })

  function selectOption(option: SelectOption) {
    selectedOption.value = option
    close()
    unrefElement(selectTriggerRef as Ref<HTMLDivElement>)?.focus()
  }
  return { options, selectedOption, listboxId, selectTriggerRef, dropdownStyle, referenceRef, floatingRef, selectOption, toggle, isOpen, close, id }
}
