import React from "react";
import FeaturesImg from "@/assets/FeaturesImg.jpg";
import { Link } from "react-router-dom";

const Features = () => {
  const bullets = [
    "Custom Web & Mobile Apps",
    "Modern UI / UX Design",
    "AI & API Integrations",
    "Scalable Architectures",
  ];

  return (
    <div className="w-full text-slate-900">
      {/* HERO */}
      <section className="section-padding">
        <div className="section-container grid lg:grid-cols-2 section-gap items-center">
          {/* Left */}
          <div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Build Digital Products <br />
              Faster with <span className="text-brand-500">Modern Tech</span>
            </h1>

            <p className="mt-6 text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl">
              We help startups and businesses launch premium digital products
              with scalable engineering, clean design, and growth-focused
              execution.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-base sm:text-lg font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex   items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition">
               Start Your Project
                {/* <ArrowRight className="w-4 h-4" /> */}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className=" rounded-lg overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/60">
              <img
                src={FeaturesImg}
                alt="Team collaborating on a digital product"
                className="w-full h-125 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
