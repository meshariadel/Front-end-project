/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wiKOpTM0AZ4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Link } from "react-router-dom"

export default function Component() {
  const handleScroll = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById("products")
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
      <div className="container px-4 md:px-6 grid lg:grid-cols-[1fr_500px] gap-8 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Unlock Your Digital Potential
          </h1>
          <p className="max-w-[600px] text-gray-300 md:text-xl">
            Empower your team with our cutting-edge tools and streamlined workflows. Elevate your
            digital presence and drive innovation.
          </p>
          <div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-bold text-black shadow transition-colors hover:bg-[#212121] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 animate-pulse"
              to="#"
              onClick={handleScroll}
            >
              Get Started
            </Link>
          </div>
        </div>
        <img
          alt="Hero Image"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          height="500"
          src="https://www.pcspecialist.ie/images/landing/pcs/gaming-pc/gaming_pc_headline_pcs.jpg"
          width="500"
        />
      </div>
    </section>
  )
}
