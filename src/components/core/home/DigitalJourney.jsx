import React from "react";
import { useState } from "react";
import digitalJourneyHealthcare from "@/assets/digital-journey-healthcare.jpg";
import digitalJourneyElearning from "@/assets/digital-journey-elearning.jpg";
import digitalJourneyEcommerce from "@/assets/digital-journey-ecommerce.jpg";
import digitalJourneyFintech from "@/assets/digital-journey-fintech.jpg";
import digitalJourneyRealEstateTravel from "@/assets/digital-journey-realestate-travel.jpg";

const items = [
  {
    title: "Healthcare Solutions",
    desc: "We build secure healthcare platforms with appointment booking, telemedicine, patient management, and seamless digital experiences.",
    img: digitalJourneyHealthcare,
  },
  {
    title: "E-Learning Platforms",
    desc: "Create modern learning systems with live classes, course management, student dashboards, and engaging online education tools.",
    img: digitalJourneyElearning,
  },
  {
    title: "E-Commerce Development",
    desc: "Launch high-converting online stores with secure payments, inventory systems, fast checkout, and scalable shopping experiences.",
    img: digitalJourneyEcommerce,
  },
  {
    title: "FinTech Applications",
    desc: "Develop trusted fintech solutions with digital wallets, payment gateways, analytics dashboards, and secure transactions.",
    img: digitalJourneyFintech,
  },
  {
    title: "Real Estate & Travel Solutions",
    desc: "Build smart real estate and travel platforms with property listings, booking systems, CRM tools, and customer portals.",
    img: digitalJourneyRealEstateTravel,
  },
];

const DigitalJourney = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-sm md:text-base font-medium text-slate-500 mb-3">
            We help businesses grow across every major industry.
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
            Solutions Built for Every
            <br />

            <span className="text-brand-600"> Industry Need</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch min-h-150">
          {/* Left Side */}
          <div className="space-y-1 flex flex-col justify-center h-full">
            {items.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                className={`w-full text-left border-t border-gray-300 py-6 px-4 transition-all duration-300 ${
                  active === index ? "text-brand-700" : "text-gray-400"
                }`}>
                <span className="flex gap-4 items-start">
                  <span
                    className={`text-xl transition-all ${
                      active === index
                        ? "translate-x-1 text-brand-600"
                        : "text-gray-400"
                    }`}>
                    &rsaquo;
                  </span>

                  <span className="block">
                    <span className="text-lg md:text-xl font-semibold leading-snug block">
                      {item.title}
                    </span>

                    {active === index && (
                      <span className="block mt-3 text-sm md:text-base text-brand-700/80 leading-relaxed">
                        {item.desc}
                      </span>
                    )}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="h-full">
            <div className="relative w-full h-1/2 min-h-125">
              <div className="absolute top-0 left-8 w-full h-full bg-white/50 rounded-xl scale-95"></div>
              <div className="absolute top-4 left-4 w-full h-full bg-white/70 rounded-xl scale-100"></div>

              <img
                src={items[active].img}
                alt={`${items[active].title} preview`}
                className="relative z-10 rounded-xl shadow-2xl w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalJourney;
