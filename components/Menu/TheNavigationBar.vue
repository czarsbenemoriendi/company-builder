<script lang="ts" setup>
import {
  SfButton,

  SfDrawer,

  SfIconClose,
  SfIconExpandMore,
} from '@storefront-ui/vue'

const { close, isOpen, toggle, menuRef, drawerRef } = useTopBar()
</script>

<template>
  <div class="w-full h-full">
    <div v-if="isOpen" class="fixed w-screen h-screen inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />
    <header
      ref="menuRef"
      class="flex justify-center w-full border-0 bg-primary-700 border-neutral-200 h-14 md:relative md:h-20 md:z-10"
    >
      <div class="flex items-center flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
        <MenuLogo />
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
                <span class="hidden md:inline-flex">Browse houses</span>
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
                  <MenuProductsCloseItemsListOutside />
                  <MenuProductsItemsList />
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
            <MenuChoseRegion />
            <MenuSearchBar class="w-1/2" />
          </div>
          <SfButton>
            <NuxtLink :to="{ path: `/create/new-product/add-new-product` }">
              Add new product
            </NuxtLink>
          </SfButton>
        </nav>
      </div>
    </header>
  </div>
</template>
