// src/pages/Locations/LocationTemplate.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  Briefcase,
  TrendingUp,
  Bot,
  BarChart3,
  ShieldCheck,
} from "lucide-react";
import { locationServices } from "@/data/LocationData";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FAQSection from "@/components/common/FAQSection";

const iconMap = {
  Globe: <Globe size={18} />,
  Briefcase: <Briefcase size={18} />,
  TrendingUp: <TrendingUp size={18} />,
  Bot: <Bot size={18} />,
  BarChart3: <BarChart3 size={18} />,
  ShieldCheck: <ShieldCheck size={18} />,
};

export default function LocationTemplate({ data }) {
  if (!data) return null;

  const services = locationServices.map((s) => ({
    ...s,
    icon: iconMap[s.iconName],
  }));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <main id="main-content">
        {/* HERO */}
        <section className="relative overflow-hidden min-h-screen bg-slate-950">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${data.herobg})` }}
          />
          {/* Softer Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-l from-slate-950/30 via-slate-950/50 to-slate-950/40" />

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 flex items-center min-h-screen">
            <div className="max-w-3xl text-white">
              {/* Tagline */}
              <p className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-blue-400 mb-5">
                {data.heroTagline}
              </p>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                {data.heroHeading}
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
                {data.heroSubheading}
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact-us"
                  className="px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300 shadow-lg">
                  Book Consultation
                </Link>

                <button className="px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition duration-300 backdrop-blur-md">
                  Learn More
                </button>
              </div>

              {/* Areas */}
              <div className="mt-12 flex flex-wrap gap-3">
                {data.areas.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 border border-white/10 text-slate-100 backdrop-blur-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="border-b border-gray-100">
          <div className="section-container px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold">
                The Problem
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
                {data.problemHeading}
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-8 text-lg">
              {data.problemBody.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50">
          <div className="section-container px-6 py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 mb-4">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {data.servicesHeading}
            </h2>
            <p className="text-gray-500 text-lg mb-14 max-w-2xl">
              {data.servicesSubheading}
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-blue-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO WE HELP */}
        <section>
          <div className="section-container px-6 py-24">
            <h2 className="text-4xl md:text-5xl font-bold">Who We Help</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {data.whoWeHelp.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition">
                  <p className="text-lg leading-8 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section>
          <div className="section-container px-6 py-24">
            <h2 className="text-4xl md:text-5xl font-bold max-w-4xl leading-tight">
              {data.benefitsHeading}
            </h2>
            <div className="mt-14 bg-white rounded-3xl border border-gray-200 p-8 md:p-10 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                {data.benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 items-start pb-6 border-b border-gray-100 last:border-b-0">
                    <span className="text-4xl font-bold text-blue-200">
                      0{i + 1}
                    </span>
                    <p className="text-gray-700 text-lg leading-8">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* CTA */}
        <section>
          <div className="section-container px-6 py-24 text-center">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto text-gray-900">
              {data.ctaHeading}
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-8">
              {data.ctaSubheading}
            </p>
            <div className="mt-10 flex justify-center flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="px-8 py-4 rounded-full bg-[#0f2070] text-white font-semibold hover:bg-[#162c8c] hover:scale-105 transition">
                {data.ctaButton}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
