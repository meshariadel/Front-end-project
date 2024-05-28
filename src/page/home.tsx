import { Link } from "react-router-dom"
import Products from "@/lib/components/component/products"
import Header from "@/lib/components/ui/header"
import Footer from "@/lib/components/ui/footer"
import { useContext } from "react"
import { Console } from "console"
import Hero from "@/lib/components/ui/hero"

export function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-gray-950 text-gray-50 pb-12">
        <Hero />
        <section className="container px-4 md:px-6 py-12" id="products">
          <Products />
        </section>
      </main>

      <Footer />
    </>
  )
}
