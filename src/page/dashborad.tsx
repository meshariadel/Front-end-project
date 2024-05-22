import api from "@/api"

import { Button } from "@/lib/components/ui/button"
import EditDialog from "@/lib/components/ui/editDialog"
import Footer from "@/lib/components/ui/footer"
import Header from "@/lib/components/ui/header"
import { Input } from "@/lib/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/lib/components/ui/select"
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table
} from "@/lib/components/ui/table"
import { Category, Product } from "@/types"
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query"

import React, { useState } from "react"

export default function Dashborad() {
  //const queryClient = new QueryClient()
  const queryClient = useQueryClient()
  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    size: "",
    description: "",
    stock: 0,
    price: 0,
    features: "",
    img: ""
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log({ name, value })
    setProduct({ ...product, [name]: value })
  }

  const postProduct = async () => {
    try {
      const res = await api.post("/products", product)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const handleSelect = (e: string) => {
    setProduct({ ...product, categoryId: e })
    console.log(e)
  }
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(product)

    e.preventDefault()
    await postProduct()

    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const getCategories = async () => {
    try {
      const res = await api.get("/categorys")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  // Queries
  const {
    isPending: isProductsPending,
    isError: isProductsError,
    data: products,
    error: productsError
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })

  const {
    isPending: isCategoriesPending,
    isError: isCategoriesError,
    data: categories,
    error: categoriesError
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  if (isProductsPending || isCategoriesPending) {
    return <span>Loading...</span>
  }

  if (isProductsError) {
    return <span>Error: {productsError.message}</span>
  }

  if (isCategoriesError) {
    return <span>Error: {categoriesError.message}</span>
  }
  const productWithCat = products.map((product) => {
    const category = categories?.find((cat) => cat.id === product.categoryId)
    if (category) {
      return { ...product, categoryId: category.categoryName }
    }
    return product
  })

  const deleteProduct = async (id: string) => {
    try {
      const res = await api.delete(`/products/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id)
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  return (
    <>
      <Header />

      <div className="flex justify-center">
        <form onSubmit={handelSubmit}>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Add New Product</h3>
          <Input
            className="mt-2"
            name="name"
            type="text"
            placeholder="Product Name"
            onChange={handleChange}
          />
          <div className="mt-2">
            <Select onValueChange={handleSelect}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category Name" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((cat) => {
                  return (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.categoryName}
                    </SelectItem>
                  )
                })}
              </SelectContent>
            </Select>
          </div>
          <Input
            className="mt-2"
            name="img"
            type="text"
            placeholder="Image"
            onChange={handleChange}
          />
          <Input
            className="mt-2"
            name="size"
            type="text"
            placeholder="size"
            onChange={handleChange}
          />

          <Input
            className="mt-2"
            name="description"
            type="text"
            placeholder="description"
            onChange={handleChange}
          />

          <Input
            className="mt-2"
            name="stock"
            type="number"
            placeholder="stock"
            onChange={handleChange}
          />

          <Input
            className="mt-2"
            name="price"
            type="number"
            placeholder="price"
            onChange={handleChange}
          />
          <Input
            className="mt-2"
            name="features"
            type="text"
            placeholder="features"
            onChange={handleChange}
          />
          <Button className="mt-2" type="submit">
            {" "}
            Submit{" "}
          </Button>
        </form>
      </div>

      <Table className="bg-black text-white">
        <TableCaption>All list of Product.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product name</TableHead>
            <TableHead>image</TableHead>

            <TableHead>Category Name</TableHead>

            <TableHead>Stuck</TableHead>
            <TableHead>Features</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>

            <TableHead className="text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productWithCat?.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <img className="w-10 h-10 object-contain" src={product.img} alt={product.name} />{" "}
              </TableCell>

              <TableCell>{product.categoryId}</TableCell>

              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.features}</TableCell>
              <TableCell>{product.size}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}$</TableCell>

              <TableCell className="text-left flex gap-5">
                <EditDialog product={product} />
                <button
                  className="bg-red-500 py-2  px-3 rounded-md text-white"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Footer />
    </>
  )
}
