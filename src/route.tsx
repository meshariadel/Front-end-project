import { createBrowserRouter } from "react-router-dom"

import { HomePage } from "./page/home-page"
import Signup from "./page/signup"
import Login from "./page/login"
import Dashborad from "./page/dashborad"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashborad />
  }
])
