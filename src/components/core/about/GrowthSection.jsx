import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function GrowthSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Scalable Product Architecture",
      content:
        "We build modern systems designed to grow with your startup, ensuring speed, flexibility, and long-term performance.",
    },
    {
      title: "Fast & Agile Development",
      content:
        "Our sprint-based workflow helps launch features quickly, validate ideas faster, and adapt to market changes with ease.",
    },
    {
      title: "Continuous Innovation",
      content:
        "We combine strategy, design, and engineering to deliver solutions that keep your business ahead of competitors.",
    },
    {
      title: "Founder-Focused Partnership",
      content:
        "We work like an extended team, helping founders make smarter technical decisions from idea to scale.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section-padding overflow-hidden relative bg-gray-100">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#2563EB_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="section-container grid lg:grid-cols-2 section-gap items-center relative z-10">
        {/* Left Side */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>Growth Acceleration</span>
          </div>

          <h2 className="section-heading mb-6">
            Smart Growth For <br />
            <span className="text-brand-600">Modern Startups</span>
          </h2>

          <p className="section-subheading max-w-xl">
            We help startups turn ideas into scalable digital products with
            strong design, efficient development, and growth-ready technology.
            From MVP launch to expansion, we move with your vision.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
               <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition">
          Book a Free Consultation
            {/* <ArrowRight className="w-4 h-4" /> */}
          </Link>
          </div>
        </div>

        {/* Right Side Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl p-2 transition-all duration-300 ${
                  isOpen
                    ? "border-brand-200 bg-white shadow-xl shadow-brand-50"
                    : "border-slate-200 bg-slate-50/50 hover:bg-white hover:border-brand-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`growth-panel-${index}`}
                  className="w-full flex items-center justify-between text-left px-5 py-4 group"
                >
                  <span
                    className={`text-xl font-bold transition-colors ${
                      isOpen ? "text-brand-600" : "text-navy-900"
                    }`}
                  >
                    {item.title}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-600 text-white"
                        : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    {isOpen ? (
                      <ChevronUp aria-hidden="true" className="w-5 h-5" />
                    ) : (
                      <ChevronDown aria-hidden="true" className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  id={`growth-panel-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-600 leading-relaxed text-lg">
                      {item.content}
                    </p>
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
