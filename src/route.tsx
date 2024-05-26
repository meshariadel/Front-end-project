import { createBrowserRouter } from "react-router-dom"

import { HomePage } from "./page/home"
import Signup from "./page/signup"
import Login from "./page/login"
import Dashborad from "./page/dashborad"
import Pcs from "./page/pcs"
import Accessories from "./page/accessories"
import Monitors from "./page/monitors"
import ProductDetail from "./page/productDetail"
import { PrivateRoute } from "./lib/components/component/privateRoute"
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

    element: (
      <PrivateRoute>
        <Dashborad />
      </PrivateRoute>
    )
  },
  {
    path: "/pcs",
    element: <Pcs />
  },
  {
    path: "/accessories",
    element: <Accessories />
  },
  {
    path: "/monitors",
    element: <Monitors />
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />
  }
])
