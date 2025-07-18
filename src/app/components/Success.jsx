import Image from "next/image";
import HopstackLogo from "../../../public/success1.png";
import AureonLogo from "../../../public/success2.jpg";
import GoFigrLogo from "../../../public/success3.jpg";

const successStoriesData = [
  {
    companyLogo: HopstackLogo,
    description: "Increase in Organic Traffic by 266.4% with new revamped webflow website. DA increased from 24 to 37 in 6 months.",
    tags: ["B2B SaaS", "Logistics", "Fulfillment"],
    metricValue: "$2.7M",
    metricLabel: "in funding",
    services: ["UI/UX Design", "Webflow", "SEO"],
    imageSrc: "/success1.png",
    imageAlt: "Hopstack website on a laptop",
  },
  {
    companyLogo: AureonLogo,
    description: "Onboarded 200+ HNI’s, 15+ corporate clients with the new website design and development. Migrated old WordPress site to Webflow.",
    tags: ["Financial Services", "Wealth Management", "M&A"],
    metricValue: "23%",
    metricLabel: "increase in CVR",
    services: ["UI/UX Design", "Webflow", "SEO", "WordPress to Webflow"],
    imageSrc: "/success2.jpg",
    imageAlt: "Aureon website on a mobile phone",
  },
  {
    companyLogo: GoFigrLogo,
    description: "GoFIGR raised $2.75M and website performance score improved from 52 to 88 after migrating to Webflow from Bubble.",
    tags: ["AI", "FinTech", "B2B SaaS"],
    metricValue: "$2.8M",
    metricLabel: "in funding",
    services: ["Bubble to Webflow Migration", "Webflow", "SEO"],
    imageSrc: "/success3.jpg",
    imageAlt: "GoFIGR website on a laptop in a stylized setting",
  },
];

export default function Success() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-700">✦ Case Studies</div>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Selected Success Stories</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Explore our portfolio of exceptional web design and custom Webflow websites that drive results for businesses worldwide.</p>
        </div>
        <div className="mt-8 space-y-8 md:mt-16">
          {successStoriesData.map((story, index) => {
            const LogoComponent = story.companyLogo;
            const isReversed = index % 2 !== 0;
            return (
              <div key={story.imageSrc} className="hover:border-accent-vibrant-orange overflow-hidden rounded-[18px] bg-white shadow-lg transition hover:border hover:shadow-xl md:rounded-[26px]">
                <div className={`flex flex-col gap-6 p-3 md:flex-row md:p-5 ${isReversed ? "md:flex-row-reverse" : ""}`}>
                  <div className="w-full md:w-1/2">
                    <Image src={story.imageSrc} alt={story.imageAlt} width={800} height={600} className="h-64 w-full rounded-md object-cover sm:h-80 md:h-full" />
                  </div>
                  <div className="p4 flex w-full flex-col justify-center md:w-1/2 md:p-6">
                    <p className="mt-4 text-base leading-7 font-medium text-gray-700">{story.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <hr className="my-6 border-gray-200" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{story.metricValue}</h3>
                      <p className="mt-1 text-sm text-gray-600">{story.metricLabel}</p>
                    </div>
                    <div className="mt-2 text-xs text-gray-500">
                      {story.services.map((service, i) => (
                        <span key={service}>
                          {service}
                          {i < story.services.length - 1 && <span className="mx-1.5">&bull;</span>}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
