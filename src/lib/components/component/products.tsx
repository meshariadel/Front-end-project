import React from "react"
import { Link } from "react-router-dom"

import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"
import api from "@/api"
export default function Products() {
  const getProducts = async () => {
    try {
      const res = await api.get("/products")
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

  return (
    <>
      {data?.map((product) => (
        // eslint-disable-next-line react/jsx-key
        <div
          key={product.id}
          className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
        >
          <Link className="absolute inset-0 z-10" to="####">
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
            <p className="text-sm text-gray-400">{product.description}</p>
            <h4 className="font-semibold text-lg md:text-xl">{product.price}</h4>
          </div>
        </div>
      ))}
    </>
  )
}
