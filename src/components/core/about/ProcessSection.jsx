import React from "react";
import { ArrowRight, Code2, Lightbulb, Rocket, Search } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      icon: Search,
      title: "Discovery",
      desc: "We clarify business goals, user needs, project scope, and success metrics before writing a single line of code.",
      label: "Research & roadmap",
      accent: "bg-blue-50 text-blue-600 ring-blue-100",
      connector: "from-blue-500",
    },
    {
      icon: Lightbulb,
      title: "Strategy & UX",
      desc: "We shape user journeys, wireframes, and product decisions so the experience feels clear, useful, and conversion-ready.",
      label: "Product planning",
      accent: "bg-amber-50 text-amber-600 ring-amber-100",
      connector: "from-amber-500",
    },
    {
      icon: Code2,
      title: "Development",
      desc: "We build scalable interfaces, secure APIs, and reliable systems with clean code and practical engineering standards.",
      label: "Build & integrate",
      accent: "bg-cyan-50 text-cyan-600 ring-cyan-100",
      connector: "from-cyan-500",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      desc: "We deploy, monitor, improve, and support the product so your team can keep moving after launch.",
      label: "Release & growth",
      accent: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      connector: "from-emerald-500",
    },
  ];

  return (
    <section className="section-padding overflow-hidden bg-white">
      <div className="section-container">
        <div className="grid gap-8 lg:grid lg:gap-14 lg:items-end mb-12 lg:mb-16">
          <div>
            <h2 className="section-heading mt-5 text-center text-navy-900">
              How We <span className="text-brand-600">Bring Ideas</span> to Life
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 right-8 top-10 hidden h-px  xl:block" />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {processes.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border bg-white p-6">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ${step.accent}`}>
                    <step.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>

                <span className="mb-3 inline-flex text-sm font-semibold text-brand-600">
                  {step.label}
                </span>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="text-[15px] leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
