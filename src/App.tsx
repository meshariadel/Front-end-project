import { RouterProvider } from "react-router-dom"
import { router } from "./route"
import "./App.css"
import { createContext, useState } from "react"
import { GlobalState, Product } from "./types"

export const GlobalContext = createContext<GlobalState | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: []
  })

  const handleAddToCart = (product: Product) => {
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    const filteredCart = state.cart.filter((item) => item.id !== id)

    setState({
      ...state,
      cart: filteredCart
    })
  }

  return (
    <>
      <GlobalContext.Provider value={{ state, handleAddToCart, handleRemoveFromCart }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  )
}

export default App
