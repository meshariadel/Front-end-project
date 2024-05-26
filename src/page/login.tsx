import { Label } from "@/lib/components/ui/label"
import { Input } from "@/lib/components/ui/input"
import { Button } from "@/lib/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import api from "@/api"
import { reshapeUser } from "@/lib/utils"
import { GlobalContext } from "@/App"
import jwtDecode from "jwt-decode"

export default function Login() {
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { handleStoreUser } = context

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleLogin = async () => {
    try {
      const res = await api.post(`/users/login`, user)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const token = await handleLogin()
    if (token) {
      const decodedToken = jwtDecode(token)
      const user = reshapeUser(decodedToken)
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      handleStoreUser(user)
      navigate("/")
    }
  }

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-50">Login</h1>
            <p className="text-gray-400">Login to your account</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit} action="POST">
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
            <Button className="w-full">Login</Button>
            <Link to="/Signup">
              <p className="text-gray-400">Don't have an account?</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
