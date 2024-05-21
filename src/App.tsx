import { RouterProvider } from "react-router-dom"
import { router } from "./route"
import "./App.css"
import { createContext, useState } from "react"
import { GlobalState, Product } from "./types"

export const GlobalContext = createContext<GlobalState | null>(null)
//export const GlobalContext = createContext()

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


  return (
    <>
      <GlobalContext.Provider value={{ state, handleAddToCart, setState }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </>
  )
}

export default App
