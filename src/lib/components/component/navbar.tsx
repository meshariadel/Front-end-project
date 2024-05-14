import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="text-xl font-bold" to="#">
          Logo
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            className="bg-transparent text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black"
            to="#"
          >
            Home
          </Link>
          <Link
            className="bg-transparent text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black"
            to="#"
          >
            Categories
          </Link>
          <Link
            className="bg-transparent text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black"
            to="#"
          >
            About Us
          </Link>
          <Link
            className="bg-transparent text-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-500 hover:text-black"
            to="#"
          >
            Cart
          </Link>
        </nav>
      </div>
    </header>
  )
}
