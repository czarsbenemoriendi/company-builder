interface ProductType {
  category: string
  animal: string
  productId: number
  productImg: string
  productName: string
  productPrice: number
  productDescription: string
}
interface SelectOption {
  label: string
  value: string
}
interface CurrencyType {
  currency: string
  exchangeRate: number
  symbol: string
}
export type{ ProductType, SelectOption, CurrencyType }
