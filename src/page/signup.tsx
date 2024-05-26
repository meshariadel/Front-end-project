import { Label } from "@/lib/components/ui/label"
import { Input } from "@/lib/components/ui/input"
import { Button } from "@/lib/components/ui/button"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import api from "../api"
import { ChangeEvent, FormEvent, useState } from "react"

export default function Signup() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: ""
  })

  const handleSignup = async () => {
    try {
      const res = await api.post(`/users/signup`, user)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await handleSignup()
    console.log("response:", response)
    if (response) {
      navigate("/login")
    }
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-50">Sign Up</h1>
            <p className="text-gray-400">Create your account to get started.</p>
          </div>
          <form className="space-y-4" action="POST" onSubmit={handleSubmit}>
            <div>
              <Label className="text-gray-400" htmlFor="name">
                Name
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="text-gray-400" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="text-gray-400" htmlFor="password">
                Password
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                onChange={handleChange}
              />
            </div>
            <Button className="w-full">Sign Up</Button>
            <Link to="/Login">
              <p className="text-gray-400">Already have an account?</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
