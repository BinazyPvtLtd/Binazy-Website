import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import FAQSection from "@/components/common/FAQSection";
import StatsSection from "@/components/common/StatsSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";
import SEO from "@/components/common/SEO";
import industryRealEstateOne from "@/assets/industry-realestate-1.jpg";
import industryEcommerceOne from "@/assets/industry-ecommerce-1.jpg";
import industryEcommerceTwo from "@/assets/industry-ecommerce-2.jpg";
import industryHealthcareOne from "@/assets/industry-healthcare-1.jpg";
import industryHealthcareTwo from "@/assets/industry-healthcare-2.jpg";
import industryFintechOne from "@/assets/industry-fintech-1.jpg";
import industryTravelOne from "@/assets/industry-travel-1.jpg";
import industryTravelTwo from "@/assets/industry-travel-2.jpg";
import industryManufacturingOne from "@/assets/industry-manufacturing-1.jpg";
import industryManufacturingTwo from "@/assets/industry-manufacturing-2.jpg";
import industryEducationOne from "@/assets/digital-journey-elearning.jpg";
import industryEducationTwo from "@/assets/digital-journey-elearning.jpg";

const industrySolutionImages = {
  "real estate": [industryRealEstateOne, industryRealEstateOne],
  education: [industryEducationOne, industryEducationTwo],
  ecommerce: [industryEcommerceOne, industryEcommerceTwo],
  healthcare: [industryHealthcareOne, industryHealthcareTwo],
  fintech: [industryFintechOne, industryFintechOne],
  travel: [industryTravelOne, industryTravelTwo],
  manufacturing: [industryManufacturingOne, industryManufacturingTwo],
};

function getSolutionImage(industryLabel, index) {
  const normalizedLabel = industryLabel.toLowerCase();
  const matchedKey = Object.keys(industrySolutionImages).find((key) =>
    normalizedLabel.includes(key),
  );
  const fallbackImages = industrySolutionImages["real estate"];
  const images = matchedKey
    ? industrySolutionImages[matchedKey]
    : fallbackImages;

  return images[index % images.length];
}

export default function IndustryDetailsTemplate({
  industryId,
  label,
  title,
  titleHighlight,
  subtitle,
  solutionsHeading,
  solutions,
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SEO
        title={`${title} ${titleHighlight} | Binazy Industry Solutions`}
        description={subtitle}
        path={`/industries/${industryId}`}
      />
      <Navbar />

      <main id="main-content">
        <section className="bg-[#0f2070]  text-white">
          <div className="section-container pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
            <div className="max-w-4xl">
              <h1 className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                {title}
                <br />
                <span className="text-blue-300">{titleHighlight}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div className="max-w-4xl">
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-3xl">
                  {solutionsHeading}
                </h2>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:mt-12 xl:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const solutionImage = getSolutionImage(label, index);

                return (
                  <article
                    key={solution.title}
                    tabIndex={0}
                    className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white">
                    <div className="relative h-44 overflow-hidden sm:h-48">
                      <img
                        src={solutionImage}
                        alt={solution.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover  "
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div
                          className={`inline-flex h-11 w-11 shrink-0 items-center justify-center ${solution.iconBg}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col">
                        <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-brand-700 sm:text-xl">
                          {solution.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <StatsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
