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
  user: DecodedUser | null
}

export type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleDeleteFromCart: (id: string) => void
  handleStoreUser: (user: DecodedUser) => void
  handleRemoveCart: () => void
  handleRemoveUser: () => void
  handleRemoveFromCart: () => void
  handleRemoveAllCart: () => void
}

export type Category = {
  id: string
  categoryName: string
}

export type User = {
  id: string
  fullName: string
  email: string
  password: string
  role: string
}

export const ROLE = {
  Admin: "Admin",
  Customer: "user"
} as const

export type DecodedUser = {
  aud: string
  emailaddress: string
  exp: number
  iss: string
  name: string
  nameidentifier: string
  role: keyof typeof ROLE
}
