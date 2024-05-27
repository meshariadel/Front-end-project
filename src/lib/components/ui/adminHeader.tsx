import { Link } from "react-router-dom"

import { Button } from "./button"

export default function AdminHeader() {
  return (
    <>
      <header className="bg-[#1e293b] text-white py-4 px-6 flex items-center justify-between">
        <nav className="flex items-center justify-center gap-6 w-full">
          <Button className="text-white" variant="ghost">
            <Link to="/dashboard">Products</Link>
          </Button>
          <Button className="text-white" variant="ghost">
            <Link to="/adminusers"> Users</Link>
          </Button>
          <Button className="text-white" variant="ghost">
            <Link to="/adminorders"> Orders</Link>
          </Button>
          <Button className="text-white" variant="ghost">
            <Link to="/admincategories"> Categories</Link>
          </Button>
        </nav>
      </header>
    </>
  )
}
