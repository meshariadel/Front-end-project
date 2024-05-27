import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { Badge } from "./badge"

import { Button } from "./button"

import { GlobalContext } from "@/App"
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from "./dropdown-menu"
import { Category, GlobalState, Product, ROLE } from "@/types"
import { SelectItem } from "@radix-ui/react-select"
import { useQuery } from "@tanstack/react-query"
import api from "@/api"

export default function Header() {
  /*const { state, handleAddToCart, handleRemoveFromCart, handleRemoveAllCart } =
    useContext<GlobalState | null>(GlobalContext)*/

  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { state, handleRemoveUser, handleDeleteFromCart, handleRemoveAllCart } = context

  console.log(state)

  const handleLogout = () => {
    if (typeof window !== undefined) {
      window.location.reload()
    }

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    handleRemoveUser()
  }

  return (
    <>
      <header className="bg-gray-950 text-gray-50 px-4 md:px-6 py-3 flex items-center justify-between">
        <Link className="flex items-center gap-2" to="/">
          <MountainIcon className="h-6 w-6" />

          {/*<span className="text-lg font-semibold">Mesh'sHARDWARE</span> */}
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {state.user?.role === ROLE.Admin && (
            <Link className="text-sm font-medium hover:underline" to="/dashboard">
              Dashboard
            </Link>
          )}
          {!state.user && <Link to="/login">Login</Link>}

          <Link className="text-sm font-medium hover:underline" to="/aboutus">
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:underline">
              Categories
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link to="/pcs">Prebulit Gaming PCs</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/accessories">Accessories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/monitors">Monitors</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {state.user && <Button onClick={handleLogout}>Logout</Button>}
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative" size="icon" variant="ghost">
                <ShoppingCartIcon className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs font-medium flex items-center justify-center">
                  {state.cart.length}
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Your Cart</h3>
                <Button size="sm" variant="ghost" onClick={() => handleRemoveAllCart()}>
                  Clear
                </Button>
              </div>
              <div className="grid gap-4">
                {state.cart?.map((product) => (
                  <div className="flex items-center gap-4" key={product.id}>
                    <img
                      alt={product.name}
                      className="rounded-md object-cover"
                      height={80}
                      src={product.img}
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover"
                      }}
                      width={80}
                    />
                    <div className="flex-1 space-y-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-500"></p>
                      <p className="font-semibold">SAR {product.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:hover:bg-red-300"
                        onClick={() => handleDeleteFromCart(product.id)}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">
                  SAR {state.cart?.reduce((a, product) => a + product.price, 0)}
                </p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
