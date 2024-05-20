/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1pKVExhlw52
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Hero() {
  return (
    <section className="bg-gray-950 text-gray-50 w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Elevate Your Gaming Experience
            </h1>
            <p className="max-w-[600px] text-gray-300 md:text-xl">
              Discover the ultimate gaming setup with our high-performance PC and cutting-edge
              peripherals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Gaming PC"
              className="rounded-lg object-cover"
              height="300"
              src="https://rgbcustompc.com/cdn/shop/files/SY-PCBuild-Obsidian.png?v=1686781055"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover"
              }}
              width="400"
            />
            <img
              alt="Gaming Peripherals"
              className="rounded-lg object-cover"
              height="300"
              src="https://fdn.gsmarena.com/imgroot/news/20/04/nvidia-rtx-super-cards-coming-to-mobile/-1220x526/gsmarena_001.jpg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover"
              }}
              width="400"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
