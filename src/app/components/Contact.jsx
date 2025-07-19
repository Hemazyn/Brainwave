"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Twitter, Dribbble, Layers, Link as LinkIcon, Video, ChevronDown } from "lucide-react";

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Dribbble", icon: Dribbble, href: "#" },
  { name: "Behance", icon: Layers, href: "#" },
  { name: "Website", icon: LinkIcon, href: "#" },
];

const Contact = () => {
  const inputStyles = "block w-full rounded-md border border-[var(--color-border)] bg-[var(--color-card-background)] px-3.5 py-2.5 text-[var(--color-foreground)] shadow-sm outline-0 sm:text-sm sm:leading-6";

  return (
    <div className="isolate bg-[var(--color-background)] px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-[var(--color-card-background)] p-6 sm:p-10 lg:p-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-5xl">Let&apos;s create something out of this world together.</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--color-foreground-muted)]">Have a project in mind? Contact us for expert design and development solutions. Let&apos;s discuss how we can help grow your business.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:mt-24 lg:grid-cols-5 lg:gap-x-12">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-[var(--color-background)]/50 p-6 sm:p-8">
              <Image src="/founder.jpeg" alt="Unknown - Founder at Brainwave" width={500} height={500} className="rounded-xl object-cover" />
              <div className="mt-6 flex items-center justify-center gap-x-4">
                {socialLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
            <p className="mt-8 text-sm leading-6 text-[var(--color-foreground-muted)]">
              Hi, I’m Unknown - Founder at Brainwave.{" "}
              <Link href="#" className="font-semibold text-[var(--color-foreground)]">
                Schedule a call with me
              </Link>{" "}
              to discuss in detail about your project and how we can help your business. You can also{" "}
              <Link href="#" className="font-semibold text-[var(--color-foreground)]">
                request for free custom quote
              </Link>{" "}
              if the scope of work is clear.
            </p>
          </div>
          <form action="#" method="POST" className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Tony Stark" },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "tony@starkindustries.com",
                },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm leading-6 font-semibold text-[var(--color-foreground-muted)]">
                    {label}
                  </label>
                  <div className="mt-2.5">
                    <input type={type} name={id} id={id} autoComplete={id} placeholder={placeholder} className={inputStyles} />
                  </div>
                </div>
              ))}
              {[
                { id: "help-with", label: "How can we help? *", options: ["Select", "Web Design", "Web Development", "SEO"] },
                { id: "budget", label: "What’s your budget? *", options: ["$2k - $5k", "$5k - $10k", "$10k+"] },
                { id: "deadline", label: "What’s your project deadline? *", options: ["Less than 4 weeks", "1-2 months", "3+ months"] },
                { id: "source", label: "How did you hear about us? *", options: ["LinkedIn", "Google", "Referral", "Other"] },
              ].map(({ id, label, options }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm leading-6 font-semibold text-[var(--color-foreground-muted)]">
                    {label}
                  </label>
                  <div className="relative mt-2.5">
                    <select id={id} name={id} className={`${inputStyles} appearance-none pr-10`}>
                      {options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ChevronDown className="h-5 w-5 text-[var(--color-foreground-muted)]" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm leading-6 font-semibold text-[var(--color-foreground-muted)]">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows={4} placeholder="Your Message" className={inputStyles} />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button type="submit" className="hover:bg-opacity-90 flex w-full items-center justify-center gap-x-2 rounded-full bg-[var(--color-accent)] px-3.5 py-3 text-sm font-semibold text-[var(--color-accent-foreground)] shadow-sm transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]">
                Submit and Book a call
                <Video className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;