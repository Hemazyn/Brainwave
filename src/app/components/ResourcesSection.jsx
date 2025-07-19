import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Webflow SEO: Proven Strategies to Elevate Your Rankings",
    category: "SEO",
    readTime: "6 mins",
    imageUrl: "/res1.jpg",
    href: "#",
  },
  {
    title: "Webflow vs WordPress: Which CMS is Right for You in 2025?",
    category: "Comparison",
    readTime: "5 mins",
    imageUrl: "/res2.png",
    href: "#",
  },
  {
    title: "Discover the Best Webflow Resources for Web Designers",
    category: "Webflow",
    readTime: "7 mins",
    imageUrl: "/res3.jpg",
    href: "#",
  },
];

const ResourcesSection = () => {
  return (
    <section className="bg-[var(--color-background)] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-x-2 rounded-full bg-[color:var(--color-border)]/60 px-3.5 py-1.5 text-sm font-medium text-[color:var(--color-foreground-muted)] ring-1 ring-[color:var(--color-border)] ring-inset">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 text-[color:var(--color-foreground-muted)]" aria-hidden="true">
                <path d="M8.5 2.25a.75.75 0 0 0-1.5 0v3.504l-2.22-2.22a.75.75 0 0 0-1.06 1.06l2.22 2.22H2.25a.75.75 0 0 0 0 1.5h3.504l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22v3.504a.75.75 0 0 0 1.5 0v-3.504l2.22 2.22a.75.75 0 1 0 1.06-1.06l-2.22-2.22h3.504a.75.75 0 0 0 0-1.5h-3.504l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V2.25Z" />
              </svg>
              Resources
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-[color:var(--color-foreground)] sm:text-4xl lg:text-5xl">Your Library of Design, Development and Webflow Resources</h2>
          <p className="mt-6 text-lg leading-8 text-[color:var(--color-foreground-muted)]">Explore our resources for expert insights, tutorials, and tips on Webflow, design, and SEO to elevate your web projects.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-background)] shadow-md transition hover:border-[var(--color-accent)] hover:shadow-lg">
              <Link href={post.href} className="flex-shrink-0">
                <Image className="h-70 w-full object-cover" src={post.imageUrl} alt="" width={600} height={400} />
              </Link>
              <div className="flex flex-1 flex-col justify-between p-3">
                <div className="flex-1">
                  <Link href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-[color:var(--color-foreground)]">{post.title}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center rounded-full bg-[color:var(--color-border)] px-3 py-1 text-xs font-medium text-[color:var(--color-foreground-muted)]">{post.category}</span>
                  </div>
                  <div className="text-sm text-[color:var(--color-foreground-muted)]">{post.readTime}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="#" className="group inline-flex items-center gap-2 text-base leading-6 font-semibold text-[color:var(--color-foreground)] hover:text-[color:var(--color-accent)]">
            Explore all Blogs
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;