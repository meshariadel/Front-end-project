export type Product = {
  id: string
  name: string
  categoryId: string
  img: string
  price: number
  description: string
  stock: number
  size: string
  features: string
}

export type GlobalState = {
  cart: Product[]
}

export type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleRemoveFromCart: (id: string) => void
  handleRemoveAllCart: (id: string) => void
}

export type Category = {
  id: string
  categoryName: string
}
