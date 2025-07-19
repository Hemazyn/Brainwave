import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-[var(--color-background)] p-4 sm:p-6 lg:p-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[var(--color-background)] px-6 py-10 md:px-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/cta-background.jpg" alt="Abstract 3D crystalline structure" layout="fill" objectFit="cover" className="opacity-20" />
          <div className="via-[color-mix(in srgb, var(--color-background) 80%, transparent)] absolute inset-0 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
        </div>
        <div className="relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">Explore all projects</h2>
            <p className="mt-4 text-lg leading-7 text-[var(--color-foreground-muted)]">Join over 20+ startups already growing with us with premium UI/UX design and web development.</p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href="/projects" className="hover:bg-[color-mix(in srgb, var(--color-card-background) 90%, #000000)] rounded-full bg-[var(--color-card-background)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-card-background)]">
                Explore all projects
              </a>
              <a href="/book-call" className="hover:bg-[color-mix(in srgb, var(--color-accent) 90%, black)] rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}