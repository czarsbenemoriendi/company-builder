import {
  useDisclosure,
} from '@storefront-ui/vue'

import { useChangeCase } from '@vueuse/integrations/useChangeCase'

import { usePopHouseCategories } from '@/composables/popHouseCategories'
import { useProductsStore } from '@/stores/products'

export function useTopBar() {
  const capitalize = useChangeCase
  const { arrayWithProducts } = useProductsStore()
  const { houseCategories } = usePopHouseCategories()

  const { isOpen, toggle, close } = useDisclosure()
  const menuRef = ref()
  const drawerRef = ref()

  onClickOutside(menuRef, () => {
    close()
  })

  return { capitalize, arrayWithProducts, houseCategories, isOpen, toggle, close, menuRef, drawerRef }
}
