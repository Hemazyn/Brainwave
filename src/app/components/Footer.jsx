import Link from "next/link";
import { Linkedin, Instagram, Twitter, Dribbble, Globe, Layers } from "lucide-react";

const services = ["Game development", "Web development", "Digital Marketing", "Search Engine Optimization", "Graphics Design", "Meta Ads", "Google Ads", "2D Animation", "3D Animation"];

const industries = ["B2B SaaS", "Artificial Intelligence", "Web3", "Information Technology", "Financial Services", "Healthcare", "E-commerce", "Gaming", "Animation"];

const companyLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Webflow (Placeholder)", icon: Globe, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Dribbble", icon: Dribbble, href: "#" },
  { name: "Behance", icon: Layers, href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex flex-col gap-8">
            <Link href="/" className="text-2xl font-bold text-[var(--color-accent)]">
              Brainwave
            </Link>
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="space-y-1 text-sm text-[var(--color-foreground-muted)]">
              <p>India, awesome, place,</p>
              <p>Karnataka, 111111</p>
              <p className="pt-2">+91 1234567891</p>
              <p>unknown@brainwave.com</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="font-semibold text-[var(--color-foreground)]">Services</h3>
              <ul role="list" className="mt-6 space-y-3">
                {services.map((item) => (
                  <li key={item}>
                    <Link href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-foreground)]">Industry</h3>
              <ul role="list" className="mt-6 space-y-3">
                {industries.map((item) => (
                  <li key={item}>
                    <Link href={`/industries/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-foreground)]">Company</h3>
              <ul role="list" className="mt-6 space-y-3">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-[var(--color-foreground-muted)] hover:text-[var(--color-accent)]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-[var(--color-foreground-muted)]">&copy; {currentYear} Brainwave. All Rights Reserved.</p>
            <div className="flex gap-x-6">
              <Link href="/privacy-policy" className="text-xs leading-5 text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs leading-5 text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">
                Terms & Conditions
              </Link>
              <Link href="/site-map" className="text-xs leading-5 text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;