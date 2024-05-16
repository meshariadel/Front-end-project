import { Link } from "react-router-dom"
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Products from "@/lib/components/component/products"

export function HomePage() {
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
      <main className="bg-gray-950 text-gray-50 pb-12">
        <section className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Products></Products>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to="####">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                alt="Product 1"
                className="object-cover w-full h-64"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover"
                }}
                width={500}
              />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl">Black Hoodie</h3>
                <p className="text-sm text-gray-400">Soft and Cozy</p>
                <h4 className="font-semibold text-lg md:text-xl">$49.99</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to="#">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                alt="Product 2"
                className="object-cover w-full h-64"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover"
                }}
                width={500}
              />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl">Leather Jacket</h3>
                <p className="text-sm text-gray-400">Timeless Style</p>
                <h4 className="font-semibold text-lg md:text-xl">$149.99</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to="#">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                alt="Product 3"
                className="object-cover w-full h-64"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover"
                }}
                width={500}
              />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl">Linen Shirt</h3>
                <p className="text-sm text-gray-400">Breathable and Lightweight</p>
                <h4 className="font-semibold text-lg md:text-xl">$39.99</h4>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" to="#">
                <span className="sr-only">View Product</span>
              </Link>
              <img
                alt="Product 4"
                className="object-cover w-full h-64"
                height={400}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "500/400",
                  objectFit: "cover"
                }}
                width={500}
              />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl">Silk Scarf</h3>
                <p className="text-sm text-gray-400">Luxurious Accessory</p>
                <h4 className="font-semibold text-lg md:text-xl">$29.99</h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-50 px-4 md:px-6 py-8">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Contact</h4>
            <p>
              123 Main St.
              <br />
              Anytown, USA 12345
            </p>
            <p>
              Phone: (123) 456-7890
              <br />
              Email: info@noirapparel.com
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">About</h4>
            <Link className="hover:underline" to="#">
              Our Story
            </Link>
            <Link className="hover:underline" to="#">
              Our Team
            </Link>
            <Link className="hover:underline" to="#">
              Careers
            </Link>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Shop</h4>
            <Link className="hover:underline" to="#">
              Tops
            </Link>
            <Link className="hover:underline" to="#">
              Bottoms
            </Link>
            <Link className="hover:underline" to="#">
              Dresses
            </Link>
            <Link className="hover:underline" to="#">
              Accessories
            </Link>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <Link className="hover:text-gray-400" to="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-400" to="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-400" to="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-400" to="#">
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
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
