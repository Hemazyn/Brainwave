"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const services = ["Game development", "Web development", "Digital Marketing", "Search Engine Optimization", "Graphics Design", "Meta Ads", "Google Ads", "2D Animation", "3D Animation"];
const industries = ["B2B SaaS", "Artificial Intelligence", "Web3", "Information Technology", "Financial Services", "Healthcare", "E-commerce", "Gaming", "Animation"];
const navLinks = ["portfolio", "resources", "team", "blog"];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState({});

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header className="shadow bg-background text-foreground fixed top-4 left-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 rounded-lg">
      <nav className="flex h-16 w-full items-center justify-between gap-6 px-4 md:gap-4">
        <Link href="/" className="text-accent text-2xl font-bold">
          Brainwave
        </Link>
        <div className="hidden items-center md:flex md:gap-2 lg:gap-4">
          <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="text-foreground hover:text-accent flex cursor-pointer items-center text-sm">
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "services" && (
              <div className="bg-background absolute left-0 z-50 w-60 rounded-lg py-2 shadow-lg">
                {services.map((item) => (
                  <Link key={item} href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-foreground hover:text-accent block px-4 py-2">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setOpenDropdown("industries")} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="text-foreground hover:text-accent flex cursor-pointer items-center text-sm">
              Industries
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "industries" && (
              <div className="bg-background absolute left-0 z-50 w-56 rounded-lg py-2 shadow-lg">
                {industries.map((item) => (
                  <Link key={item} href={`/industries/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-foreground hover:text-accent block px-4 py-2">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((item) => (
            <Link key={item} href={`/${item}`} className="text-foreground hover:text-accent text-sm">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/book-call" className="bg-accent text-accent-foreground h-fit rounded-full px-3 py-1.5 transition-all hover:brightness-110">
            Book a Call
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button className="ml-2" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu className="text-accent h-7 w-7" />
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div className="bg-background fixed inset-0 z-50">
          <div className="text-foreground w-[95vw] max-w-sm rounded-xl p-4">
            <div className="mb-4 flex items-center justify-between">
              <Link href="/" className="text-accent text-2xl font-bold">
                Brainwave
              </Link>
              <Link href="/book-call" className="bg-accent text-accent-foreground ml-2 rounded-full px-2.5 py-1.5 hover:brightness-110">
                Book a call
              </Link>
              <button className="ml-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="text-accent h-7 w-7" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              {[
                { label: "services", items: services },
                { label: "industries", items: industries },
              ].map(({ label, items }) => (
                <div key={label}>
                  <button className="flex w-full items-center justify-between rounded px-2 py-2 hover:bg-white/5" onClick={() => toggleMobileDropdown(label)}>
                    {label.charAt(0).toUpperCase() + label.slice(1)}
                    {mobileDropdown[label] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </button>
                  {mobileDropdown[label] && (
                    <div className="pl-4">
                      {items.map((item) => (
                        <Link key={item} href={`/${label}/${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-accent block py-1">
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {navLinks.map((item) => (
                <Link key={item} href={`/${item}`} className="w-full rounded px-2 py-2 text-left hover:bg-white/5">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
              <Link href="/contact" className="bg-accent text-accent-foreground mt-4 rounded-full px-4 py-2 text-center transition hover:brightness-110">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}