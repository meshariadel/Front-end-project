export type Product = {
  id: string
  name: string
  categoryId: string
  img: string
  price: number
  description: string
  stock: number
  size: string
  color: string
}

export type GlobalState = {
  cart: Product[]
}

export type Category = {
  id: string
  categoryName: string
}
