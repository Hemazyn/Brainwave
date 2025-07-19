"use client";
import Image from "next/image";
import { useState } from "react";
import LogoImage from "../../../public/trustedLogo.png";

const logos = [
  { src: "/logos/hopstack.svg", alt: "Hopstack" },
  { src: "/logos/gofigr.svg", alt: "GoFIGR" },
  { src: "/logos/terra.svg", alt: "TERRA" },
  { src: "/logos/futurenese.svg", alt: "Futurenese" },
  { src: "/logos/sliceinn.svg", alt: "Sliceinn" },
  { src: "/logos/mahojin.svg", alt: "Mahojin" },
  { src: "/logos/action.svg", alt: "Action Health Hub" },
  { src: "/logos/hutly.svg", alt: "Hutly" },
  { src: "/logos/shopbox.svg", alt: "ShopBox" },
  { src: "/logos/monnai.svg", alt: "Monnai" },
  { src: "/logos/appstrail.svg", alt: "Appstrail" },
  { src: "/logos/project-serotonin.svg", alt: "Project Serotonin" },
  { src: "/logos/bondable.svg", alt: "Bondable" },
  { src: "/logos/asiadealhub.svg", alt: "AsiaDealHub" },
  { src: "/logos/aureon.svg", alt: "Aureon" },
  { src: "/logos/sorise.svg", alt: "SORISE" },
  { src: "/logos/vroommedia.svg", alt: "VroomMedia" },
];

export default function LogoGrid() {
  const [erroredIndexes, setErroredIndexes] = useState([]);

  const handleError = (index) => {
    setErroredIndexes((prev) => [...prev, index]);
  };

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-foreground-muted mb-8 text-lg font-medium">Trusted by 20+ Startups and Enterprises for UX Design and Webflow Development</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="border-border bg-card-background flex aspect-video items-center justify-center rounded-lg border">
              <div className="relative h-20 w-full">
                <Image src={erroredIndexes.includes(index) ? LogoImage : logo.src} alt={logo.alt} fill className="object-cover" onError={() => handleError(index)} />
              </div>
            </div>
          ))}
          <div className="border-accent/50 bg-card-background flex aspect-video items-center justify-center rounded-lg border-2 border-dashed p-6">
            <span className="text-accent text-sm font-medium">Your Logo +</span>
          </div>
        </div>
      </div>
    </section>
  );
}
