import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import {
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
  DrawerHeader,
  DrawerFooter,
  DrawerContent,
  Drawer
} from "@/lib/components/ui/drawer"

export function Header() {
  return (
    <header className="bg-black text-yellow-500 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="font-semibold text-lg" to="/">
          Logo
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link className="hover:text-yellow-300 transition-colors" to="/categories">
            Categories
          </Link>
          <Link className="hover:text-yellow-300 transition-colors" to="/">
            About Us
          </Link>
        </nav>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
            variant="ghost"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            Cart
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black text-yellow-500 p-6 w-80">
          <DrawerHeader>
            <DrawerTitle>Your Cart</DrawerTitle>
            <DrawerDescription>Here are the items in your cart.</DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  alt="Product Image"
                  className="rounded-md"
                  height={64}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover"
                  }}
                  width={64}
                />
                <div>
                  <h4 className="font-semibold">Product Name</h4>
                  <p className="text-sm text-yellow-400">$19.99</p>
                </div>
              </div>
              <Button size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  alt="Product Image"
                  className="rounded-md"
                  height={64}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover"
                  }}
                  width={64}
                />
                <div>
                  <h4 className="font-semibold">Another Product</h4>
                  <p className="text-sm text-yellow-400">$29.99</p>
                </div>
              </div>
              <Button size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <div className="flex items-center justify-between">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold">$49.98</p>
            </div>
            <Button className="w-full mt-4">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  )
}

function ShoppingCartIcon(props: any) {
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

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
