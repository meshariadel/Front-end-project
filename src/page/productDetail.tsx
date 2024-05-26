import api from "@/api"
import Footer from "@/lib/components/ui/footer"
import Header from "@/lib/components/ui/header"
import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { resourceUsage } from "process"
import React from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {
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
      <div className="text-white">
        <p>{product.name}</p>
        <p>{product.description}</p>

        <p>{product.features}</p>
        <p>SAR {product.price}</p>

        <img src={product.img}></img>
      </div>
      <Footer />
    </>
  )
}
