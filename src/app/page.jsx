"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import LogoGrid from "./components/LogoGrid";
import Solutions from "./components/Solutions";
import Success from "./components/Success";
import CallToAction from "./components/CallToAction";
import AnimatedHero from "./components/AnimatedHero";
import Testimonials from "./components/testimonialsData";

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
        </div>
      )}
    </>
  );
}
