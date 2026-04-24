import React from "react";
import Aboutus from "../../../assets/Aboutus.jpg";

const AboutHeader = () => {
  return (
    <>
      <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:h-[60vh] lg:min-h-175 overflow-hidden flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-0">
        {/* Background Image */}
        <img
          src={Aboutus}
          alt="Binazy team workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy-900/45 sm:bg-navy-900/40"></div>

        {/* Content */}
        <div className="relative z-10 section-container">
          <div className="max-w-4xl text-white">
            {/* Small Label */}
            <p className="text-xs sm:text-sm md:text-base font-medium tracking-[0.22em] uppercase mb-4 sm:mb-6 text-brand-400">
              Transforming Ideas into Reality
            </p>

            {/* Heading */}
            <h1 className="max-w-full text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-5 sm:mb-8">
              We Build The <br />
              <span className="text-brand-500">Future</span> of Digital
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-slate-200 max-w-2xl">
              Binazy is a premier digital solutions partner dedicated to helping
              startups and enterprises scale through innovative web, mobile, and
              software development.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-800">
        <div className="section-container">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Our Core Responsibilities
            </h2>
            <div className="w-20 h-1.5 bg-brand-500 rounded-full"></div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col h-full bg-navy-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-500/30 transition-all duration-500">
                {/* Image */}
                <div className="overflow-hidden relative h-64">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8 grow">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold tracking-tight leading-snug mb-4 group-hover:text-brand-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;

const items = [
  {
    title: "To Our Clients",
    desc: "We deliver reliable websites, apps, and digital solutions that help businesses scale faster, improve efficiency, and stay ahead in a competitive market.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "To Innovation",
    desc: "We embrace modern technology, creative thinking, and smart strategies to build future-ready digital products for every business need.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "To Our Community",
    desc: "We believe in building trust, supporting growth, and creating positive impact through technology-driven opportunities and meaningful partnerships.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
  },
];
