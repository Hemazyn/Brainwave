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
    <main className="bg-background relative overflow-hidden py-10">
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-10 text-center sm:px-6 md:pb-20 lg:px-8">
        <div className="bg-primary/10 text-primary dark:bg-primary/20 mb-4 inline-block rounded-full px-4 py-1 text-xs md:text-sm">
          New: Recovered the highest value $2B Visa Case
          <span className="bg-primary ml-2 inline-block h-2 w-2 rounded-full"></span>
        </div>
        <h1 className="text-foreground mb-4 text-3xl leading-tight font-bold md:text-6xl">
          Stunning Design & Webflow <br /> Development for Startups
        </h1>
        <p className="text-foreground-muted mx-auto mb-8 max-w-2xl text-lg md:text-xl">Expert design and Webflow development agency to help you scale to raise your success in digital goals.</p>

        <div className="flex items-center justify-center space-x-4">
          <a href="/book-intro" className="bg-accent text-accent-foreground h-fit rounded-full px-6 py-2 transition hover:brightness-110">
            Book an Intro Call
          </a>
          <a href="/our-work" className="border-border text-foreground hover:border-accent hover:text-accent h-fit rounded-full border px-6 py-2 transition">
            Our Work
          </a>
        </div>
      </section>
      <section className="relative w-full overflow-hidden py-5">
        <div className="animate-marquee whitespace-nowrap will-change-transform">
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
