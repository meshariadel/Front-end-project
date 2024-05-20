import { Label } from "@/lib/components/ui/label"
import { Input } from "@/lib/components/ui/input"
import { Button } from "@/lib/components/ui/button"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-xl">
        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-50">Login</h1>
            <p className="text-gray-400">Login to your account</p>
          </div>
          <form className="space-y-4">
            <div>
              <Label className="text-gray-400" htmlFor="email">
                Email
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                id="email"
                placeholder="example@email.com"
                type="email"
              />
            </div>
            <div>
              <Label className="text-gray-400" htmlFor="password">
                Password
              </Label>
              <Input
                className="bg-gray-800 text-gray-50"
                id="password"
                placeholder="••••••••"
                type="password"
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
