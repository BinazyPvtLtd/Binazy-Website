import React from "react";
import { useState } from "react";

const items = [
  {
    title: "Healthcare Solutions",
    desc: "We build secure healthcare platforms with appointment booking, telemedicine, patient management, and seamless digital experiences.",
    img: "https://plus.unsplash.com/premium_photo-1666299237067-5054e72e4776?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-Learning Platforms",
    desc: "Create modern learning systems with live classes, course management, student dashboards, and engaging online education tools.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "E-Commerce Development",
    desc: "Launch high-converting online stores with secure payments, inventory systems, fast checkout, and scalable shopping experiences.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "FinTech Applications",
    desc: "Develop trusted fintech solutions with digital wallets, payment gateways, analytics dashboards, and secure transactions.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Real Estate & Travel Solutions",
    desc: "Build smart real estate and travel platforms with property listings, booking systems, CRM tools, and customer portals.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
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
        <div className="grid lg:grid-cols-2 gap-10 items-stretch min-h-[600px]">
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
            <div className="relative w-full h-1/2 min-h-[500px]">
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
