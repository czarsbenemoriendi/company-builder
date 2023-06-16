<script lang="ts" setup>
import { SfButton, SfInput, SfSelect } from '@storefront-ui/vue'

const animal = ref('bob')
const category = ref('tree')
const productPrice = ref('12')
const productDescription = ref('bbb')
const productImg = ref('')
const productName = ref('House')

async function onSubmit(e: Event) {
  const form = e.target as HTMLFormElement
  try {
    const formData = new FormData(form)
    formData.append('category', category.value)
    formData.append('animal', animal.value)
    formData.append('productPrice', productPrice.value)
    formData.append('productDescription', productDescription.value)
    formData.append('productName', productName.value)
    formData.append('productImg', productImg.value)
    const formJSON = Object.fromEntries(formData.entries())
    await $fetch('/api/productsData', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formJSON,
    })
    const { data } = useFetch(() => '/api/productsData')
    console.log(data)
  }
  catch (error) {
    console.warn(error)
  }
}
</script>

<template>
  <form id="createNewProduct" class="p-4 flex gap-4 flex-wrap text-neutral-900" @submit.prevent="onSubmit">
    <h2 class="w-full typography-headline-4 md:typography-headline-3 font-bold">
      Add new product
    </h2>
    <label class="w-full flex flex-col gap-0.5 flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">House type</span>
      <SfSelect v-model="category" placeholder="-- Select --" required>
        <option v-for="countryName in countries" :key="countryName">{{ countryName }}</option>
      </SfSelect>
    </label>
    <label class="w-full md:w-auto flex-grow flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Animal name</span>
      <SfInput v-model="animal" required />
    </label>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Price</span>
      <SfInput v-model="productPrice" type="number" required />
    </label>
    <label class="w-full flex flex-col gap-0.5">
      <span class="typography-text-sm font-medium">Product description</span>
      <SfInput v-model="productDescription" type="text" required />
    </label>
    <NewProductInput />
    <div class="w-full flex gap-4 mt-4 md:mt-0 md:justify-end">
      <SfButton type="reset" variant="secondary" class="w-full md:w-auto">
        Clear all
      </SfButton>
      <SfButton class="w-full md:w-auto" type="submit">
        Save
      </SfButton>
    </div>
  </form>
</template>
