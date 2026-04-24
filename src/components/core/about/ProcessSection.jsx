import React from "react";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      icon: Search,
      title: "Discovery",
      desc: "We dive deep into your goals, audience, and market to define the perfect roadmap.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Lightbulb,
      title: "Strategy & UX",
      desc: "Crafting intuitive designs and user journeys that resonate with your brand vision.",
      color: "bg-violet-50 text-violet-600",
    },
    {
      icon: Code2,
      title: "Development",
      desc: "Clean, scalable, and high-performance code built with cutting-edge technology.",
      color: "bg-cyan-50 text-cyan-600",
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      desc: "Seamless deployment followed by continuous monitoring and iterative growth.",
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section className="section-padding overflow-hidden">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="section-heading text-navy-900 leading-tight">
            How We <span className="text-brand-600">Bring Ideas</span> to Life
          </h2>

          <p className="section-subheading max-w-2xl mx-auto mt-5">
            A streamlined workflow focused on clarity, speed, and premium
            execution from concept to launch.
          </p>
        </div>

        {/* Process Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 relative">
          {processes.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 rounded-3xl p-7 lg:p-8 hover:shadow-xl  hover:-translate-y-2 transition-all duration-400">
              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-all duration-500">
                0{index + 1}
              </span>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl  flex items-center justify-center mb-7 shadow-sm`}>
                <step.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 pr-10">
                {step.title}
              </h3>

              <p className="text-slate-500 leading-relaxed text-[15px] lg:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
