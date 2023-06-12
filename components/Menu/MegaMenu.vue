<script lang="ts" setup>
import {
  SfButton,
  SfDrawer,
  SfIconClose,
  SfIconExpandMore,
  SfListItem,
  useDisclosure,
} from '@storefront-ui/vue'
import { useChangeCase } from '@vueuse/integrations/useChangeCase'
import { useCreateMapFromData } from '~/composables/createMapFromData'

const capitalize = useChangeCase
const { categories, products } = useCreateMapFromData()

const { isOpen, toggle, close } = useDisclosure()
const menuRef = ref()
const drawerRef = ref()

onClickOutside(menuRef, () => {
  close()
})
</script>

<template>
  <div class="w-full h-full">
    <div v-if="isOpen" class="fixed w-screen h-screen inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />
    <header
      ref="menuRef"
      class="flex justify-center w-full border-0 bg-primary-700 border-neutral-200 h-14 md:relative md:h-20 md:z-10"
    >
      <div class="flex items-center flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
        <a
          href="/"
          aria-label="SF Homepage"
          class="flex shrink-0 text-white mr-2 md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
        >
          <MenuLogo />
        </a>
        <nav class="flex w-full justify-between flex-nowrap" aria-label="SF Navigation">
          <ul>
            <li role="none">
              <SfButton
                class="block mr-auto text-white font-body bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                type="button"
                :aria-haspopup="true"
                :aria-expanded="isOpen"
                variant="tertiary"
                @click="toggle()"
              >
                <template #suffix>
                  <SfIconExpandMore />
                </template>
                <span class="hidden md:inline-flex">Browse products</span>
              </SfButton>
              <transition
                enter-active-class="transform transition duration-500 ease-in-out"
                leave-active-class="transform transition duration-500 ease-in-out"
                enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
                enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
                leave-from-class="translate-x-0 md:opacity-100"
                leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
              >
                <SfDrawer
                  ref="drawerRef"
                  v-model="isOpen"
                  disable-click-away
                  placement="top"
                  class="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white max-w-xs shadow-lg p-0 !fixed max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] md:max-w-full md:p-6"
                >
                  <div class="flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden">
                    <div class="flex items-center typography-text-lg font-medium text-white">
                      Browse products
                    </div>
                    <SfButton
                      square
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      class="text-white"
                      @click="close()"
                      @keydown.enter.space="close()"
                    >
                      <SfIconClose />
                    </SfButton>
                  </div>
                  <div
                    v-for="(item, index) in categories"
                    :key="index"
                    class="[&:nth-child(2)]:pt-0 pt-6 md:pt-0"
                  >
                    <NuxtLink
                      :to="{ path: `/shop/${item}/` }"
                      role="presentation"
                      class="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                    >
                      {{ capitalize(item, 'sentenceCase').value }}
                    </NuxtLink>
                    <hr class="mb-3.5">
                    <ul>
                      <li v-for="{ animal, productId, category } in products" :key="productId">
                        <nuxt-link :to="{ path: `/shop/${item}/${animal}` }">
                          <SfListItem
                            v-if="category === item"
                            tag="a"
                            href="#"
                            size="sm"
                            role="none"
                            class="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                          >
                            {{ capitalize(animal, 'sentenceCase').value }}
                          </SfListItem>
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                  <SfButton
                    square
                    size="sm"
                    variant="tertiary"
                    aria-label="Close navigation menu"
                    class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    @click="close()"
                  >
                    <SfIconClose class="text-neutral-500" />
                  </SfButton>
                </SfDrawer>
              </transition>
            </li>
          </ul>
          <div />
          <div class="flex flex-nowrap justify-center items-center w-1/2">
            <MenuLanguageChoose />
            <MenuSearchBar class="w-1/2" />
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
