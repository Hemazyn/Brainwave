"use client";
import { useState } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonialsData = [
  {
    quote: "I had the pleasure of working with Divyansh on our website revamp project at Hopstack, and I can confidently say that he is exceptional at what he does. His design thinking is top-notch, allowing us to achieve a clean, modern, and highly functional website.",
    name: "Anurag Singh",
    title: "Senior Product Marketing Manager, Hopstack",
    avatarSrc: "/success1.png",
  },
  {
    quote: "We brought Divyansh on board to help redesign Terra’s landing page for a major event, and he absolutely delivered. Throughout the process, he patiently worked on multiple design iterations with us, yet managed to complete the entire redesign and launch in less than a week. What really impressed me was his availability – even during late hours when we needed urgent fixes, he was there to help, making sure everything stayed on track and issues were resolved quickly.",
    name: "Ashwin Krishnan",
    title: "CoFounder, Terra",
    avatarSrc: "/success2.jpg",
  },
  {
    quote: "We’re happy to have collaborated with Divyansh for our website needs. His responsiveness, flexibility and timeliness made it feel like a natural extension of the team. He actively contributed to the ideation, design, and the development phases of the project.",
    name: "Shobini Appanderanda",
    title: "Head of Programs, Serotonin Labs Inc",
    avatarSrc: "/success3.jpg",
  },
  {
    quote: "I highly recommend Divyansh for any web development needs. He consistently delivered exceptional, strong work on critical projects for ShopBox as a new platform showcase...",
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
    slides: {
      perView: 1.1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.2, spacing: 32 },
      },
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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">✦ Testimonials</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Our happy clients</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">Hear from clients who've experienced remarkable transformations with Webyansh.</p>
        </div>
        <div className="mt-12 flex justify-center">
          {testimonialsData.map((testimonial, index) => (
            <button key={testimonial.name} onClick={() => instanceRef.current?.moveToIdx(index)} className={`transition-transform duration-300 ${currentSlide === index ? "scale-125" : "scale-100"}`}>
              <Image src={testimonial.avatarSrc} alt={testimonial.name} width={48} height={48} className={`h-8 w-8 rounded-full object-cover transition-all duration-300 ${currentSlide === index ? "r" : "ring-1 ring-gray-300"}`} />
            </button>
          ))}
        </div>
        <div className="mt-12">
          <div ref={sliderRef} className="keen-slider">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.name} className="keen-slider__slide p-2">
                <div className={`relative flex h-fit flex-col rounded-xl border bg-gray-50 p-6 transition-all duration-300 ${currentSlide === index ? "scale-105 border-orange-300 shadow-lg" : "border-gray-200"}`}>
                  {currentSlide === index && (
                    <>
                      <div className="absolute -top-1 -left-1 h-5 w-5 rounded-tl-lg border-t-2 border-l-2 border-orange-400" />
                      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-tr-lg border-t-2 border-r-2 border-orange-400" />
                      <div className="absolute -bottom-1 -left-1 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-orange-400" />
                      <div className="absolute -right-1 -bottom-1 h-5 w-5 rounded-br-lg border-r-2 border-b-2 border-orange-400" />
                      <div className="absolute top-full left-1/2 mt-2 hidden -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs text-white md:block">Drag Left or Right</div>
                    </>
                  )}
                  <p className="flex-grow text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="mt-6 flex items-center">
                    <Image src={testimonial.avatarSrc} alt={testimonial.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="mt-8 flex justify-center gap-4">
            <button onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} className="rounded-full border border-gray-300 p-3 text-gray-500 transition hover:bg-gray-100 disabled:opacity-50">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={(e) => e.stopPropagation() || instanceRef.current?.next()} className="rounded-full border border-gray-300 p-3 text-gray-500 transition hover:bg-gray-100 disabled:opacity-50">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
