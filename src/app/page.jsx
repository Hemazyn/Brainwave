"use client";
import { useState, useEffect } from "react";
import { Header, Main, Loader, LogoGrid, Solutions, Success, CallToAction, AnimatedHero, Testimonials, ResourcesSection, Contact, Footer } from "./components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <Main />
          <LogoGrid />
          <Solutions />
          <Success />
          <CallToAction />
          <AnimatedHero />
          <Testimonials />
          <ResourcesSection />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
