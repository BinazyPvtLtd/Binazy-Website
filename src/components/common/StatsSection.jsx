import React from "react";

const StatsSection = () => {
  const stats = [
    {
      number: "100+",
      label: "Projects Delivered",
      desc: "Successfully delivered 100+ web, mobile, and software projects across various industries.",
    },
    {
      number: "50+",
      label: "Happy Clients",
      desc: "Serving 50+ satisfied clients with reliable, innovative, and high-quality IT solutions.",
    },
    {
      number: "24/7",
      label: "Support",
      desc: "Providing round-the-clock technical support and maintenance to ensure uninterrupted business operations.",
    },
  ];

  return (
    <section className="bg-brand-600 py-10 sm:py-12 lg:py-14">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl p-4 sm:p-5 lg:p-6 group">
              {/* Decorative Accent */}

              <div className="relative z-10">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/80 mb-2 sm:mb-3 block">
                  {item.number}
                </span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white/90 mb-2 uppercase tracking-wide">
                  {item.label}
                </h4>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
