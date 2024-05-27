import api from "@/api"
import AdminHeader from "@/lib/components/ui/adminHeader"
import EditDialog from "@/lib/components/ui/editDialog"
import Footer from "@/lib/components/ui/footer"
import Header from "@/lib/components/ui/header"
import UsersService from "@/api/Users"
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table
} from "@/lib/components/ui/table"
import { Category, User } from "@/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"

import React, { useState } from "react"

export default function Adminusers() {
  //const queryClient = new QueryClient()
  const queryClient = useQueryClient()
  const [user, setuser] = useState({
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
    setuser({ ...user, [name]: value })
  }

  const postuser = async () => {
    try {
      const res = await api.post("/users", user)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const handleSelect = (e: string) => {
    setuser({ ...user, categoryId: e })
    console.log(e)
  }
  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(user)

    e.preventDefault()
    await postuser()

    queryClient.invalidateQueries({ queryKey: ["users"] })
  }

  const getusers = async () => {
    try {
      const res = await api.get("/users")
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
    isPending: isUsersPending,
    isError: isUsersError,
    data: users,
    error: usersError
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: UsersService.getAll
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

  if (isUsersPending || isCategoriesPending) {
    return <span>Loading...</span>
  }

  if (isUsersError) {
    return <span>Error: {usersError.message}</span>
  }

  const deleteuser = async (id: string) => {
    try {
      const res = await api.delete(`/users/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleDeleteuser = async (id: string) => {
    await deleteuser(id)
    queryClient.invalidateQueries({ queryKey: ["users"] })
  }

  return (
    <>
      <Header />
      <AdminHeader />

      <Table className="bg-black text-white">
        <TableCaption>All list of user.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">user name</TableHead>
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
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.fullName}</TableCell>
              <TableCell>
                <img className="w-10 h-10 object-contain" alt={user.fullName} />{" "}
              </TableCell>

              <TableCell>{user.id}</TableCell>

              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>SAR {user.role}</TableCell>

              <TableCell className="text-left flex gap-5">
                <button
                  className="bg-red-500 py-2  px-3 rounded-md text-white"
                  onClick={() => handleDeleteuser(user.id)}
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
