export type Product = {
  id: string
  name: string
  categoryId: number
  img: string
  price: number
  description: string
}


export type GlobalState = {
  cart: Product[]
}
