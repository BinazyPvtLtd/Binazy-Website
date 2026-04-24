import { ArrowUpRight } from "lucide-react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import FAQSection from "@/components/common/FAQSection";
import StatsSection from "@/components/common/StatsSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";

const industrySolutionImages = {
  "real estate": [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  ],
  education: [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  ],
  ecommerce: [
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  ],
  fintech: [
    "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  ],
  travel: [
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
  ],
  manufacturing: [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=80",
  ],
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
  label,
  title,
  titleHighlight,
  subtitle,
  spotlightHeading,
  projects,
  solutionsHeading,
  solutionsTagline,
  solutionsDescription,
  solutions,
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
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

        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                  Project Spotlights
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {spotlightHeading}
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14 xl:gap-8">
              {projects.map((project, index) => (
                <article
                  key={project.name || index}
                  tabIndex={0}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200">
                  <div className="relative min-h-[320px] sm:min-h-[380px]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08123a]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-6">
                      <p className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100 backdrop-blur-sm">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="space-y-4">
                        <h3 className="max-w-[16rem] text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                          {project.name || project.alt}
                        </h3>

                        <div className="space-y-4 md:max-h-0 md:translate-y-6 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-64 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:max-h-64 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                          <p className="max-w-xl text-sm leading-7 text-slate-100 sm:text-base">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-200">
                            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
                              Industry-ready flow
                            </span>
                            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm">
                              UX + Operations
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end">
              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
                  Solution System
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
                  {solutionsHeading}
                </h2>
              </div>

              <div className="rounded-[1.75rem] bg-[#0d1d56] p-6 text-white shadow-xl shadow-blue-950/20">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Solutions Tagline
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {solutionsTagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-blue-100">
                  {solutionsDescription}
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:mt-14 xl:grid-cols-3">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                const solutionImage = getSolutionImage(label, index);

                return (
                  <article
                    key={solution.title}
                    tabIndex={0}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-200">
                    <div className="absolute right-5 top-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative min-h-[300px] sm:min-h-[340px]">
                      <img
                        src={solutionImage}
                        alt={solution.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08123a]/95 via-[#08123a]/65 to-[#08123a]/25 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100 md:group-focus-visible:opacity-100" />

                      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                        <div
                          className={`inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] ${solution.iconBg} shadow-lg shadow-slate-950/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105`}>
                          <Icon className="h-8 w-8" />
                        </div>

                        <div className="space-y-4">
                          <h3 className="max-w-[18rem] text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl">
                            {solution.title}
                          </h3>

                          <div className="space-y-4 md:max-h-0 md:translate-y-5 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-h-48 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:max-h-48 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                            <p className="text-sm leading-7 text-slate-100 sm:text-base">
                              {solution.description}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-medium text-blue-200">
                              <span>Solution-ready module</span>
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <StatsSection />
        <WhyChooseSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
