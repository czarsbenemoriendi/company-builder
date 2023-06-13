export const exchangeV = ref(1)

export function useTakeValue(exchangeRate: Ref<number>) {
  const multipler = computed(() => {
    return exchangeV
  })
  //   const multipler = watch(exchangeRate, (newVal, oldVal) => {
  //     return console.log(newVal)
  //   }, { immediate: true })

  exchangeV.value = exchangeRate.value
  return { multipler }
}
