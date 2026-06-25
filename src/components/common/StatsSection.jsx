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
    <section className="section-padding bg-brand-600">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10 group">
              {/* Decorative Accent */}

              <div className="relative z-10">
                <span className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white/80 mb-4 sm:mb-6 block">
                  {item.number}
                </span>
                <h4 className="text-xl lg:text-2xl font-bold text-white/90 mb-3 sm:mb-4 uppercase tracking-wider">
                  {item.label}
                </h4>
                <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed">
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
