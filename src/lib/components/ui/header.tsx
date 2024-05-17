import React from "react"
import { Link } from "react-router-dom"
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MountainIcon, ChevronDownIcon, ShoppingCartIcon, MinusIcon, PlusIcon } from "lucide-react"

export default function Header() {
  return (
    <>
      <header className="bg-gray-950 text-gray-50 px-4 md:px-6 py-3 flex items-center justify-between">
        <Link className="flex items-center gap-2" to="#">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Noir Apparel</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm font-medium hover:underline" to="#">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline" to="#">
            About
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:underline">
              Categories
              <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem>
                <Link to="#">Tops</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="#">Bottoms</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="#">Dresses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="#">Accessories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative" size="icon" variant="ghost">
                <ShoppingCartIcon className="h-6 w-6" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-xs font-medium flex items-center justify-center">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Your Cart</h3>
                <Button size="sm" variant="ghost">
                  Clear
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <img
                    alt="Product Image"
                    className="rounded-md object-cover"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover"
                    }}
                    width={80}
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium">Black Hoodie</h4>
                    <p className="text-sm text-gray-500">Size: M</p>
                    <p className="font-semibold">$49.99</p>
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
                <div className="flex items-center gap-4">
                  <img
                    alt="Product Image"
                    className="rounded-md object-cover"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover"
                    }}
                    width={80}
                  />
                  <div className="flex-1 space-y-1">
                    <h4 className="font-medium">Leather Jacket</h4>
                    <p className="text-sm text-gray-500">Size: L</p>
                    <p className="font-semibold">$149.99</p>
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
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">$199.98</p>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Checkout</Button>
                <Button className="flex-1" variant="outline">
                  View Cart
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  )
}
