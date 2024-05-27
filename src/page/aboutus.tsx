import { Link } from "react-router-dom"
import Header from "@/lib/components/ui/header"
import Footer from "@/lib/components/ui/footer"

export default function Aboutus() {
  return (
    <>
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
        <div className="container px-4 md:px-6 grid lg:grid-cols-[1fr_500px] gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Introducing Our Prebuilt Gaming PC
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Elevate your gaming experience with our top-of-the-line prebuilt gaming PC. Engineered
              for performance, this powerhouse is designed to deliver unparalleled graphics,
              lightning-fast processing, and seamless gameplay.
            </p>
            <div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-bold text-black-950 shadow transition-colors hover:bg-[#212121] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 animate-pulse text-black"
                to="/"
              >
                Learn More
              </Link>
            </div>
          </div>
          <img
            alt="Prebuilt Gaming PC"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            height="500"
            src="https://png.pngtree.com/background/20230528/original/pngtree-red-lit-gaming-room-with-two-screens-cranked-up-and-a-picture-image_2780746.jpg"
            width="500"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 grid gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Our Prebuilt Gaming PC
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our prebuilt gaming PC is the ultimate solution for serious gamers. Crafted with the
              highest-quality components and cutting-edge technology, this machine is designed to
              deliver unparalleled performance and an immersive gaming experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <CpuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Powerful Processor</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Equipped with the latest Intel or AMD processors, our gaming PC delivers
                lightning-fast performance for even the most demanding games.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <CpuIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">High-End Graphics</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Featuring the latest NVIDIA or AMD graphics cards, our gaming PC delivers stunning
                visuals and smooth framerates for the ultimate gaming experience.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 space-y-4 shadow-md">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full">
                  <HamIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                </div>
                <h3 className="text-xl font-bold">Ample Memory</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                With generous amounts of high-speed RAM, our gaming PC ensures seamless multitasking
                and lightning-fast load times for all your games and applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
        <div className="container px-4 md:px-6 grid lg:grid-cols-[500px_1fr] gap-8 items-center">
          <img
            alt="Prebuilt Gaming PC Setup"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            height="500"
            src="https://futurefive.co.nz/uploads/story/2022/08/08/GettyImages-1166235766.webp"
            width="500"
          />
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Elevate Your Gaming Experience
            </h2>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Our prebuilt gaming PC is designed to take your gaming experience to new heights. With
              its powerful hardware and cutting-edge technology, you'll enjoy stunning visuals,
              lightning-fast performance, and seamless gameplay.
            </p>
            <div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-bold text-black-950 shadow transition-colors hover:bg-[#212121] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 animate-pulse text-black"
                to="/"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}

function HamIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" />
      <path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" />
      <path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" />
      <path d="m8.5 16.5-1-1" />
    </svg>
  )
}
