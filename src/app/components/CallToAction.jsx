import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0D1117] px-6 py-10 md:px-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/cta-background.jpg" alt="Abstract 3D crystalline structure" layout="fill" objectFit="cover" className="opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117] via-[#0D1117]/80 to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Explore all projects</h2>
            <p className="mt-4 text-lg leading-7 text-gray-300">Join over 20+ startups already growing with us with premium UI/UX design and web development.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="/projects" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Explore all projects
              </a>
              <a href="/book-call" className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
