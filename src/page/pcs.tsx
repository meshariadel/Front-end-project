import { GlobalContext } from "@/App"
import api from "@/api"
import Footer from "@/lib/components/ui/footer"
import Header from "@/lib/components/ui/header"
import { Product } from "@/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import React, { ChangeEvent, useContext, useState } from "react"
import { Link } from "react-router-dom"

export default function Pcs() {
  const { state, handleAddToCart } = useContext(GlobalContext)

  const [searchBy, setSearchBy] = useState("")
  const queryClient = useQueryClient()

  const getProducts = async () => {
    try {
      const res = await api.get(`/products?searchBy=${searchBy}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setSearchBy(value)
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  return (
    <>
      <Header />
      <section className="container px-4 md:px-6 py-12" id="products">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data
            ?.filter((product) => product.categoryId == "bfac0923-fd49-489c-97d9-c97d63aa9b15")
            .map((product) => (
              <div
                key={product.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
              >
                <Link
                  className="absolute inset-0 z-10"
                  to="####"
                  onClick={() => handleAddToCart(product)}
                >
                  <span className="sr-only">View Product</span>
                </Link>
                <img
                  alt={product.name}
                  className="object-cover w-full h-64"
                  height={400}
                  src={product.img}
                  style={{
                    aspectRatio: "500/400",
                    objectFit: "cover"
                  }}
                  width={500}
                />
                <div className="bg-gray-900 p-4">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.features}</p>
                  <h4 className="font-semibold text-lg md:text-xl">SAR {product.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
