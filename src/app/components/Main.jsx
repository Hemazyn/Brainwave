import Image from "next/image";

const images = [
  { src: "/p1.avif", alt: "Portfolio 1" },
  { src: "/p2.avif", alt: "Portfolio 2" },
  { src: "/p3.avif", alt: "Portfolio 3" },
  { src: "/p4.avif", alt: "Portfolio 4" },
  { src: "/p5.avif", alt: "Portfolio 5" },
  { src: "/p6.avif", alt: "Portfolio 6" },
];

export default function Main() {
  return (
    <main className="bg-neutral-soft-white relative overflow-hidden py-10">
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-10 text-center sm:px-6 md:pb-20 lg:px-8">
        <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-xs text-green-800 md:text-sm">
          New: Recovered the highest value $2B Visa Case
          <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
        </div>
        <h1 className="mb-4 text-3xl leading-tight font-bold text-gray-900 md:text-6xl">
          Stunning Design & Webflow <br /> Development for Startups
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">Expert design and Webflow development agency to help you scale to raise your success in digital goals.</p>
        <div className="flex items-center justify-center space-x-4">
          <a href="/book-intro" className="h-fit rounded-full bg-red-500 px-6 py-2 text-white transition hover:bg-red-600">
            Book an Intro Call
          </a>
          <a href="/our-work" className="h-fit rounded-full border border-gray-300 px-6 py-2 text-gray-700 transition hover:border-red-500 hover:text-red-500">
            Our Work
          </a>
        </div>
      </section>
      <section className="relative w-full overflow-hidden py-5">
        <div className="marquee animate-marquee whitespace-nowrap will-change-transform">
          {[...images, ...images].map((img, i) => (
            <div key={i} className="inline-block px-4">
              <Image src={img.src} alt={img.alt} width={320} height={240} className="h-[240px] w-[320px] rounded-xl object-cover" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
