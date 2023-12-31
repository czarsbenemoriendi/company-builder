export default defineEventHandler(() => {
  const currencyData = [
    {
      currency: 'USD',
      exchangeRate: 4,
      symbol: '$',
    },
    {
      currency: 'EUR',
      exchangeRate: 4.5,
      symbol: '€',
    },
    {
      currency: 'GBP',
      exchangeRate: 5,
      symbol: '£',
    },
    {
      currency: 'PLN',
      exchangeRate: 1,
      symbol: 'zł',
    },
  ]
  return currencyData
})
