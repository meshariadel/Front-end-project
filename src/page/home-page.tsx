import { Link } from "react-router-dom"
import Products from "@/lib/components/component/products"
import Header from "@/lib/components/ui/header"
import Footer from "@/lib/components/ui/footer"

export function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-gray-50 pb-12">
        <section className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Products />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
