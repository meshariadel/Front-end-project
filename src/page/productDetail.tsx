import { GlobalContext } from "@/App"
import api from "@/api"
import { Button } from "@/lib/components/ui/button"
import Footer from "@/lib/components/ui/footer"
import Header from "@/lib/components/ui/header"
import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"
import React, { useContext } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {
  const { handleAddToCart } = useContext(GlobalContext)

  const params = useParams()
  const getProduct = async () => {
    try {
      const res = await api.get(`/products/${params.productId}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data: product, error } = useQuery<Product>({
    queryKey: ["product"],
    queryFn: getProduct
  })

  if (!product) {
    console.log("no product found")
    return <p>Product not found</p>
  }

  console.log(product)
  return (
    <>
      <Header />

      <main className="bg-gray-950 text-gray-50 pb-12">
        <section className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                alt={product.name}
                className="w-full h-auto rounded-lg object-cover"
                height={600}
                src={product.img}
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover"
                }}
                width={600}
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-400 text-lg">{product.description}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">SAR {product.price}</h2>
                <p className="text-gray-400">{product.features}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="flex-1" size="lg" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
