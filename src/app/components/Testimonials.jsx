"use client";
import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonialsData = [
  {
    quote: "I had the pleasure of working with Divyansh on our website revamp project at Hopstack, and I can confidently say that he is exceptional at what he does...",
    name: "Anurag Singh",
    title: "Senior Product Marketing Manager, Hopstack",
    avatarSrc: "/success1.png",
  },
  {
    quote: "We brought Divyansh on board to help redesign Terra’s landing page for a major event, and he absolutely delivered...",
    name: "Ashwin Krishnan",
    title: "CoFounder, Terra",
    avatarSrc: "/success2.jpg",
  },
  {
    quote: "We’re happy to have collaborated with Divyansh for our website needs. His responsiveness, flexibility and timeliness...",
    name: "Shobini Appanderanda",
    title: "Head of Programs, Serotonin Labs Inc",
    avatarSrc: "/success3.jpg",
  },
  {
    quote: "I highly recommend Divyansh for any web development needs...",
    name: "Brian Lee",
    title: "Director of Ops, ShopBox",
    avatarSrc: "/p2.avif",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: { perView: 1.1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2.2, spacing: 24 } },
      "(min-width: 1024px)": { slides: { perView: 3.2, spacing: 32 } },
    },
    centered: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section style={{ backgroundColor: "var(--color-background)" }} className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold"
            style={{
              backgroundColor: "var(--color-border)",
              color: "var(--color-foreground-muted)",
            }}>
            ✦ Testimonials
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ color: "var(--color-foreground)" }}>
            Our happy clients
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8" style={{ color: "var(--color-foreground-muted)" }}>
            Hear from clients who've experienced remarkable transformations with Webyansh.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          {testimonialsData.map((testimonial, index) => (
            <button key={testimonial.name} onClick={() => instanceRef.current?.moveToIdx(index)} className={`transition-transform duration-300 ${currentSlide === index ? "scale-125" : "scale-100"}`}>
              <Image
                src={testimonial.avatarSrc}
                alt={testimonial.name}
                width={48}
                height={48}
                className={`h-8 w-8 rounded-full object-cover transition-all duration-300 ${currentSlide === index ? "" : "ring-1"}`}
                style={{
                  ringColor: currentSlide === index ? undefined : "var(--color-border)",
                }}
              />
            </button>
          ))}
        </div>

        <div className="mt-12">
          <div ref={sliderRef} className="keen-slider">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.name} className="keen-slider__slide p-2">
                <div
                  className={`relative flex h-fit flex-col rounded-xl border p-6 transition-all duration-300 ${currentSlide === index ? "scale-105 shadow-lg" : ""}`}
                  style={{
                    backgroundColor: "var(--color-card-background)",
                    borderColor: currentSlide === index ? "var(--color-accent)" : "var(--color-border)",
                  }}>
                  {currentSlide === index && (
                    <>
                      <div className="absolute -top-1 -left-1 h-5 w-5 rounded-tl-lg border-t-2 border-l-2" style={{ borderColor: "var(--color-accent)" }} />
                      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-tr-lg border-t-2 border-r-2" style={{ borderColor: "var(--color-accent)" }} />
                      <div className="absolute -bottom-1 -left-1 h-5 w-5 rounded-bl-lg border-b-2 border-l-2" style={{ borderColor: "var(--color-accent)" }} />
                      <div className="absolute -right-1 -bottom-1 h-5 w-5 rounded-br-lg border-r-2 border-b-2" style={{ borderColor: "var(--color-accent)" }} />
                      <div className="absolute top-full left-1/2 mt-2 hidden -translate-x-1/2 rounded-full px-3 py-1 text-xs md:block" style={{ backgroundColor: "var(--color-accent)", color: "var(--color-accent-foreground)" }}>
                        Drag Left or Right
                      </div>
                    </>
                  )}

                  <p className="flex-grow italic" style={{ color: "var(--color-foreground-muted)" }}>
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6 flex items-center">
                    <Image src={testimonial.avatarSrc} alt={testimonial.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                    <div className="ml-4">
                      <p className="font-semibold" style={{ color: "var(--color-foreground)" }}>
                        {testimonial.name}
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-foreground-muted)" }}>
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {loaded && instanceRef.current && (
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              className="rounded-full border p-3 transition disabled:opacity-50"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-foreground-muted)",
                backgroundColor: "transparent",
              }}>
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              className="rounded-full border p-3 transition disabled:opacity-50"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-foreground-muted)",
                backgroundColor: "transparent",
              }}>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
