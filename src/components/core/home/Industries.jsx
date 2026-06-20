import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { industriesData, industryNavItems } from "@/data/industriesData";

const industries = industryNavItems.map((item) => {
  const industry = industriesData[item.id];

  return {
    title: item.title,
    desc: industry.subtitle,
    img: industry.heroImage,
    to: item.to,
  };
});

export default function Industries() {
  return (
    <section
      id="industries"
      className="section-padding bg-white"
      aria-label="Industries we serve">
      <div className="section-container">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Industries We Serve
          </h2>
          <p className="mb-3 mt-2 text-sm font-medium text-slate-500 md:text-base">
            Domain-aware software, built for how your industry actually works.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {industries.map((item) => (
            <Link
              to={item.to}
              key={item.title}
              aria-label={`Explore ${item.title}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl sm:min-h-108">
              <div className="relative h-40 overflow-hidden bg-slate-100 sm:h-44">
                <img
                  src={item.img}
                  alt={`${item.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-slate-950 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600 transition group-hover:text-brand-800">
                  Explore industry
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
