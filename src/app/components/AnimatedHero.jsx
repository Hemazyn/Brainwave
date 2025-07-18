"use client";
import { useState, useEffect } from "react";

const headlines = [
  {
    parts: [
      { text: "We build websites that people ", color: "text-gray-900" },
      { text: "can't ignore", color: "text-gray-900" },
    ],
  },
  {
    parts: [
      { text: "With strategic design and ", color: "text-gray-400" },
      { text: "Webflow ", color: "text-gray-900" },
      { text: "development", color: "text-gray-400" },
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
    <section className="flex min-h-[80vh] items-center justify-center bg-gray-50 text-center">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 key={currentIndex} className={`text-4xl font-bold tracking-tight text-gray-900 transition-opacity duration-1000 ease-in-out sm:text-5xl md:text-6xl lg:text-7xl ${isFading ? "opacity-0" : "opacity-100"} `}>
          {currentHeadline.parts.map((part, index) => (
            <span key={index} className={part.color}>
              {part.text}
            </span>
          ))}
        </h1>
        <div className="mt-10">
          <a href="/book-call" className="rounded-full bg-red-500 px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
