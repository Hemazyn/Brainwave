"use client";
import { useState, useEffect } from "react";

const headlines = [
  {
    parts: [
      { text: "We build websites that people ", color: "var(--color-foreground)" },
      { text: "can't ignore", color: "var(--color-foreground)" },
    ],
  },
  {
    parts: [
      { text: "With strategic design and ", color: "var(--color-foreground-muted)" },
      { text: "Webflow ", color: "var(--color-foreground)" },
      { text: "development", color: "var(--color-foreground-muted)" },
    ],
  },
];

export default function AnimatedHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setIsFading(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentHeadline = headlines[currentIndex];

  return (
    <section className="flex min-h-[80vh] items-center justify-center text-center" style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 key={currentIndex} className={`text-4xl font-bold tracking-tight transition-opacity duration-1000 ease-in-out sm:text-5xl md:text-6xl lg:text-7xl ${isFading ? "opacity-0" : "opacity-100"}`}>
          {currentHeadline.parts.map((part, index) => (
            <span key={index} style={{ color: part.color }}>
              {part.text}
            </span>
          ))}
        </h1>
        <div className="mt-10">
          <a
            href="/book-call"
            className="rounded-full px-8 py-4 text-base font-semibold shadow-sm transition focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-accent-foreground)",
              outlineColor: "var(--color-accent)",
            }}>
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
