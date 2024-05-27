import { RouterProvider } from "react-router-dom"
import { router } from "./route"
import "./App.css"
import { createContext, useEffect, useState } from "react"
import { DecodedUser, GlobalContextType, GlobalState, Product } from "./types"

export const GlobalContext = createContext<GlobalContextType | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: [],
    user: null
  })
  /*
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

  const handleRemoveAllCart = () => {
    setState({
      ...state,
      cart: []
    })
    console.log("removedall")
  }


  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      const decodedUser = JSON.parse(user)
      setState({
        ...state,
        user: decodedUser
      })
    }
  }, [])

  const handleAddToCart = (product: Product) => {
    // const isDuplicated = state.cart.find((cartItem) => cartItem.id === product.id)
    // if (isDuplicated) return

    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const cart = state.cart

    const index = state.cart.findIndex((item) => item.id === id)
    cart.splice(index, 1)

    setState({
      ...state,
      cart: cart
    })
  }
  const handleRemoveCart = () => {
    setState({
      ...state,
      cart: []
    })
  }

  const handleStoreUser = (user: DecodedUser) => {
    setState({
      ...state,
      user
    })
  }

  const handleRemoveUser = () => {
    setState({
      ...state,
      user: null
    })
  }
  */
  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      const decodedUser = JSON.parse(user)
      setState({
        ...state,
        user: decodedUser
      })
    }
  }, [])

  const handleRemoveFromCart = (id: string) => {
    const filteredCart = state.cart.filter((item) => item.id !== id)

    setState({
      ...state,
      cart: filteredCart
    })
    console.log("filterd ", filteredCart)
  }

  const handleRemoveAllCart = () => {
    setState({
      ...state,
      cart: []
    })
    console.log("removedall")
  }

  const handleAddToCart = (product: Product) => {
    // const isDuplicated = state.cart.find((cartItem) => cartItem.id === product.id)
    // if (isDuplicated) return

    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const cart = state.cart

    const index = state.cart.findIndex((item) => item.id === id)
    cart.splice(index, 1)

    setState({
      ...state,
      cart: cart
    })
  }
  const handleRemoveCart = () => {
    setState({
      ...state,
      cart: []
    })
  }

  const handleStoreUser = (user: DecodedUser) => {
    setState({
      ...state,
      user
    })
  }

  const handleRemoveUser = () => {
    setState({
      ...state,
      user: null
    })
  }

  return (
    <>
      <div className="App">
        <GlobalContext.Provider
          value={{
            state,
            handleAddToCart,
            handleDeleteFromCart,
            handleStoreUser,
            handleRemoveCart,
            handleRemoveUser,
            handleRemoveFromCart,
            handleRemoveAllCart
          }}
        >
          <RouterProvider router={router} />
        </GlobalContext.Provider>
      </div>
    </>
  )
}

export default App
