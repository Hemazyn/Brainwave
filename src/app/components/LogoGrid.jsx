import Image from "next/image";
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
  return (
    <section className="bg-neutral-soft-white py-12">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-8 text-lg font-medium text-gray-700">Trusted by 20+ Startups and Enterprises for UX Design and Webflow Development</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center rounded-md border border-gray-200 bg-white p-4 shadow-sm">
              <div className="relative h-15 w-28">
                <Image src={LogoImage} alt={logo.alt} fill className="" />
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-md border-2 border-dashed border-red-400 bg-white p-4 shadow-sm">
            <span className="text-sm font-medium text-red-500">Your Logo +</span>
          </div>
        </div>
      </div>
    </section>
  );
}
