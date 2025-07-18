"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";

const services = ["Game development", "Web development", "Digital Marketing", "Search Engine Optimization", "Graphics Design", "Meta Ads", "Google Ads", "2D Animation", "3D Animation"];
const industries = ["B2B SaaS", "Artificial Intelligence", "Web3", "Information Technology", "Financial Services", "Healthcare", "E-commerce", "Gaming", "Animation"];

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
    <header className="fixed top-4 left-1/2 z-50 w-[95vw] max-w-3xl -translate-x-1/2 rounded-lg bg-white shadow-md">
      <nav className="flex h-16 w-full items-center justify-between gap-6 px-4 md:gap-4">
        <Link href="/" className="text-2xl font-bold text-red-500">
          Brainwave
        </Link>
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative" onMouseEnter={() => setOpenDropdown("services")} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="flex cursor-pointer items-center text-gray-700 hover:text-red-500 focus:outline-none" type="button">
              Services
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "services" && (
              <div className="absolute left-0 z-50 w-60 rounded-lg bg-white py-2 shadow-lg transition-opacity duration-200">
                {services.map((item) => (
                  <Link key={item} href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-2 text-gray-700 hover:text-red-500">
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setOpenDropdown("industries")} onMouseLeave={() => setOpenDropdown(null)}>
            <button className="flex cursor-pointer items-center text-gray-700 hover:text-red-500 focus:outline-none" type="button">
              Industries
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${openDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            {openDropdown === "industries" && (
              <div className="absolute left-0 z-50 w-56 rounded-lg bg-white py-2 shadow-lg transition-opacity duration-200">
                {industries.map((item) => (
                  <a key={item} href={`/industries/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block px-4 py-2 text-gray-700 hover:text-red-500">
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
          <Link href="/portfolio" className="text-gray-700 hover:text-red-500">
            Portfolio
          </Link>
          <Link href="/resources" className="text-gray-700 hover:text-red-500">
            Resources
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-red-500">
            Team
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-red-500">
            Blog
          </Link>
          <Link href="/book-call" className="textwhite h-fit w-full rounded-full bg-red-500 px-2 py-1.5 text-white hover:bg-red-600">
            Book a Call
          </Link>
        </div>
        <button className="flex items-center md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="h-7 w-7 text-red-500" />
        </button>
      </nav>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
          <div className="w-[95vw] max-w-sm rounded-xl bg-white p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-red-500">
                Brainwave
              </a>
              <a href="/book-call" className="ml-2 rounded-full bg-red-500 px-2.5 py-1.5 text-white transition hover:bg-red-600">
                Book a call
              </a>
              <button className="ml-2" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-7 w-7 text-red-500" />
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="flex w-full items-center justify-between rounded px-2 py-2 text-gray-700 hover:bg-gray-100" onClick={() => toggleMobileDropdown("services")}>
                Services
                {mobileDropdown["services"] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {mobileDropdown["services"] && (
                <div className="pl-4">
                  {services.map((item) => (
                    <a key={item} href={`/services/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block py-1 text-gray-700 hover:text-red-500">
                      {item}
                    </a>
                  ))}
                </div>
              )}
              <button className="flex w-full items-center justify-between rounded px-2 py-2 text-gray-700 hover:bg-gray-100" onClick={() => toggleMobileDropdown("industries")}>
                Industries
                {mobileDropdown["industries"] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {mobileDropdown["industries"] && (
                <div className="pl-4">
                  {industries.map((item) => (
                    <a key={item} href={`/industries/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block py-1 text-gray-700 hover:text-red-500">
                      {item}
                    </a>
                  ))}
                </div>
              )}
              <a href="/portfolio" className="w-full rounded px-2 py-2 text-left text-gray-700 hover:bg-gray-100">
                Portfolio
              </a>
              <a href="/resources" className="w-full rounded px-2 py-2 text-left text-gray-700 hover:bg-gray-100">
                Resources
              </a>
              <a href="/team" className="w-full rounded px-2 py-2 text-left text-gray-700 hover:bg-gray-100">
                Team
              </a>
              <a href="/blog" className="w-full rounded px-2 py-2 text-left text-gray-700 hover:bg-gray-100">
                Blog
              </a>
              <a href="/contact" className="mt-4 rounded-full bg-red-500 px-4 py-2 text-center text-white transition hover:bg-red-600">
                Contact us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
