import { GlobalContext } from "@/App"
import api from "@/api"
import { Button } from "@/lib/components/ui/button"
import { Input } from "@/lib/components/ui/input"
import { Label } from "@/lib/components/ui/label"
import { Product } from "@/types"
import { RadioGroup, RadioItem, Separator } from "@radix-ui/react-dropdown-menu"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, useContext, useState } from "react"

export default function Checkout() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { state, handleRemoveUser, handleAddToCart, handleRemoveFromCart, handleRemoveAllCart } =
    context

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
      <main className="bg-gray-950 text-gray-50 pb-12">
        <section className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">Checkout</h1>
                <p className="text-gray-400 text-lg">Complete your order</p>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <h2 className="text-2xl font-semibold">Your Cart</h2>
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
                          <Button size="icon" variant="ghost">
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <span>1</span>
                          <Button size="icon" variant="ghost">
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4">
                  <h2 className="text-2xl font-semibold">Shipping Details</h2>
                  <div className="grid gap-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Enter your city" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="home-number">Home Number</Label>
                        <Input id="home-number" placeholder="Enter your home number" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="zip-code">Zip Code</Label>
                        <Input id="zip-code" placeholder="Enter your zip code" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="contact-number">Contact Number</Label>
                        <Input id="contact-number" placeholder="Enter your contact number" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="payment-method">Payment Method</Label>

                      <div className="flex items-center space-x-4">
                        <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 text-black">
                          Cash
                        </button>
                        <button className="inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus:ring-gray-300 text-black">
                          Credit card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <h2 className="text-2xl font-semibold">Credit Card Details</h2>
                  <div className="grid gap-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="Enter your card number" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="expiry-date">Expiry Date</Label>
                        <Input id="expiry-date" placeholder="MM/YY" />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="card-holder">Card Holder</Label>
                        <Input id="card-holder" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="CVV" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-lg font-semibold">$199.98</p>
                </div>
                <Button className="w-full" size="lg">
                  Place Order
                </Button>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <p>$199.98</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <p>$0.00</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-lg font-semibold">$199.98</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
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
function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
