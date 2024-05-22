import React, { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Label } from "./label"
import { Input } from "./input"
import { Product } from "@/types"
import { Button } from "./button"
import api from "@/api"

export default function EditDialog({ product }: { product: Product }) {
  const queryClient = useQueryClient()

  const [updateProductState, setUpdateProductState] = useState(product)
  console.log("updateProductState: " + updateProductState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log()

    setUpdateProductState({ ...updateProductState, [name]: value })
  }

  const handleSubmitUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateProduct()
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  const updateProduct = async () => {
    try {
      const res = await api.patch(`/products/${updateProductState.id}`, updateProductState)
      return res.data
    } catch (error) {
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button>Edit Product</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <div>
            <form onSubmit={handleSubmitUpdate}>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                defaultValue={updateProductState.name}
                onChange={handleChange}
              />

              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                defaultValue={updateProductState.description}
                onChange={handleChange}
              />

              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                defaultValue={updateProductState.price}
                onChange={handleChange}
              />

              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                defaultValue={updateProductState.stock}
                onChange={handleChange}
              />

              <Label htmlFor="size">Size</Label>
              <Input
                id="size"
                name="size"
                defaultValue={updateProductState.size}
                onChange={handleChange}
              />

              <Label htmlFor="features">Features</Label>
              <Input
                id="features"
                name="features"
                defaultValue={updateProductState.features}
                onChange={handleChange}
              />

              <Label htmlFor="img">Image URL</Label>
              <Input
                id="img"
                name="img"
                defaultValue={updateProductState.img}
                onChange={handleChange}
              />

              <Button type="submit">Save Changes</Button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
