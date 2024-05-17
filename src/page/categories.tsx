import Catagoriesdiv from "@/lib/components/component/catagoriesdiv"
import { Header } from "@/lib/components/component/headerrr"
import React from "react"
import { Link } from "react-router-dom"

export default function Categories() {
  return (
    <>
      <Header />

      <Link to="/">
        <Catagoriesdiv
          name="Shirts"
          link="https://c1.wallpaperflare.com/preview/336/692/939/shirt-colour-clothing-fashion.jpg"
        />
      </Link>
      <Link to="/">
        <Catagoriesdiv
          name="Pants"
          link="https://images.pexels.com/photos/16729456/pexels-photo-16729456/free-photo-of-pants-handing-in-a-clothing-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Link>
      <Link to="/">
        <Catagoriesdiv
          name="Shoes"
          link="https://static.vecteezy.com/system/resources/thumbnails/023/219/700/small_2x/table-with-stack-of-stylish-sweaters-and-woman-s-shoes-on-grey-background-generative-ai-photo.jpg"
        />
      </Link>
    </>
  )
}
