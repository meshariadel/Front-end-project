import { Link } from "react-router-dom"
export default function Catagoriesdiv({ name, link }: { name: string; link: string }) {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${link})`
      }}
    >
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl">
          {name}
        </h1>
      </div>
    </div>
  )
}
