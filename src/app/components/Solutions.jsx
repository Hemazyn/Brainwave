import { LayoutTemplate, CodeXml, TrendingUp, FlaskConical, ArrowRightLeft, MessageSquare } from "lucide-react";

const solutionsData = [
  {
    icon: LayoutTemplate,
    title: "UI/UX Design",
    description: "Our expert Webflow design team create stunning, user-centered websites that drive conversions through strategic UI/UX design, ensuring your brand stands out.",
    tags: ["Web design", "UX Research", "Figma Design"],
  },
  {
    icon: CodeXml,
    title: "Webflow Development",
    description: "Transform your vision into reality with our expert Webflow development services. Our certified developers create responsive, scalable websites that perform.",
    tags: ["Webflow Design", "Webflow Experts"],
  },
  {
    icon: TrendingUp,
    title: "Webflow SEO",
    description: "Boost your online visibility with our comprehensive Webflow SEO services, ensuring your website ranks and performs. Rank higher and grow faster with our expert SEO services.",
    tags: ["Webflow SEO", "Link Building", "Global SEO"],
  },
  {
    icon: FlaskConical,
    title: "Growth Marketing",
    description: "Turn your Webflow website into a lead generating engine. We combine UX with data to boost conversions, maximize ROI, & grow your brand.",
    tags: ["A/B & Multivariate Testing", "Funnels", "Heatmaps", "Landing Page Optimization", "CRO Audits", "UX Flows"],
  },
  {
    icon: ArrowRightLeft,
    title: "Webflow Migration",
    description: "Smooth transitions guaranteed. Migrations from WordPress to Webflow, Squarespace to Webflow, and Wix to Webflow are our specialties.",
    tags: ["Migrate to Webflow", "Wix to Webflow", "WordPress to Webflow", "Figma to Webflow"],
  },
  {
    icon: MessageSquare,
    title: "Webflow Maintenance and Support",
    description: "We provide post launch updates, performance checks, and troubleshooting to keep your Webflow site secure and optimized.",
    tags: ["Webflow Maintenance", "Webflow Support", "24/7 Support", "Ongoing Support"],
  },
];

export default function Solutions() {
  return (
    <section className="bg-background px-1 py-10 md:p-0">
      <div className="border-border bg-card-background mx-auto max-w-7xl rounded-[40px] border px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="bg-muted text-muted-foreground inline-block rounded-full px-3 py-1 text-sm font-semibold">★ Services</div>
          <h2 className="text-foreground mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Our Solutions for your Digital Growth</h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">We offer expert Webflow design, development, SEO, and support services—tailored to boost your website’s performance, user experience, and growth.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {solutionsData.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div key={solution.title} className="group border-border bg-card flex flex-col rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg sm:p-8">
                <div className="flex-shrink-0">
                  <IconComponent className="text-muted-foreground h-8 w-8 transition-colors group-hover:text-orange-500" aria-hidden="true" />
                </div>
                <div className="mt-4 flex-grow">
                  <h3 className="text-foreground text-lg font-semibold transition-colors group-hover:text-orange-500 sm:text-xl">{solution.title}</h3>
                  <p className="text-muted-foreground mt-2 text-base">{solution.description}</p>
                </div>
                <div className="border-border/60 mt-6 border-t pt-6">
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span key={tag} className="bg-muted text-muted-foreground inline-flex items-center rounded-full px-3 py-1 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
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
