// src/pages/locations/LocationTemplate.jsx
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
import SEO from "@/components/common/SEO";

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
      <SEO
        title={`IT Services in ${data.city}, ${data.country} | Binazy`}
        description={data.heroSubheading}
        path={`/locations/${data.id}`}
      />
      <Navbar />

      <main id="main-content">
        {/* HERO */}
        <section
          className="relative h-87.5 overflow-hidden bg-[#0f2070] md:h-112.5 lg:h-150"
          style={{ paddingInline: 0 }}>
          {/* Content */}
          <div className="section-container relative z-10 flex h-full items-center px-5 py-8 sm:px-6 lg:px-10">
            <div className="max-w-2xl text-white">
              {/* Tagline */}
              <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:mb-5 sm:text-sm">
                {data.heroTagline}
              </p>

              {/* Heading */}
              <h1 className="text-2xl font-bold leading-[1.1] tracking-tight min-[380px]:text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
                {data.heroHeading}
              </h1>

              {/* Subheading */}
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200 sm:mt-5 sm:text-base sm:leading-7 md:text-lg">
                {data.heroSubheading}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/25 transition duration-300 hover:bg-blue-700 sm:min-h-12 sm:px-7 sm:py-4 sm:text-base">
                  {data.heroCtaPrimary}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="border-b border-gray-100">
          <div className="section-container grid items-start gap-8 px-5 py-14 sm:px-6 sm:py-16 md:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm sm:tracking-[0.25em]">
                The Problem
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {data.problemHeading}
              </h2>
            </div>

            <div className="space-y-4 text-base leading-7 text-gray-600 sm:space-y-6 sm:text-lg sm:leading-8">
              {data.problemBody.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50">
          <div className="section-container px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:mb-4 sm:text-sm sm:tracking-[0.25em]">
              What We Offer
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {data.servicesHeading}
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-7 text-gray-500 sm:mb-14 sm:text-lg">
              {data.servicesSubheading}
            </p>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 sm:h-14 sm:w-14">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
                    {service.title}
                  </h3>
                  <ul className="mt-4 space-y-3 sm:mt-5">
                    {service.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600 sm:text-base">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
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
          <div className="section-container px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Who We Help
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
              {data.whoWeHelp.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-xl sm:p-8">
                  <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section>
          <div className="section-container px-5 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
            <h2 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {data.benefitsHeading}
            </h2>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:mt-14 sm:p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {data.benefits.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-b border-gray-100 pb-6 last:border-b-0 md:gap-5">
                    <span className="text-3xl font-bold text-blue-200 sm:text-4xl">
                      0{i + 1}
                    </span>
                    <p className="text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

        {/* CTA */}
        <section>
          <div className="section-container px-5 py-14 text-center sm:px-6 sm:py-16 lg:px-10 lg:py-24">
            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-6xl">
              {data.ctaHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              {data.ctaSubheading}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:mt-10">
              <Link
                to="/contact-us"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#0f2070] px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#162c8c] sm:px-8 sm:py-4 sm:text-base">
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
