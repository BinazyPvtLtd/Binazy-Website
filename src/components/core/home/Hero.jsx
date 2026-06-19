import React from "react";
import { Link } from "react-router-dom";
import LeadForm from "@/components/LeadForm";
import img from "@/assets/hero-dashboard.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="IT Solutions"
          className="h-full w-full object-cover object-center sm:object-[60%_center]"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] w-full max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,440px)] lg:gap-12 lg:px-10">
        <div className="w-full max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-brand-600/20 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur-sm sm:text-sm">
            Smart IT Solutions
          </p>

          <h1 className="max-w-[12ch] text-4xl font-bold leading-tight text-slate-950 sm:max-w-2xl sm:text-5xl lg:text-6xl">
            Transform Your Business with{" "}
            <span className="block text-brand-600 sm:inline">
              Smart IT Solutions
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8 lg:max-w-2xl">
            We help startups and enterprises accelerate growth through Web
            Applications Development , Mobile Application Development , custom
            software development, cloud solutions, AI automation, and digital
            transformation services tailored to your business needs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/contact-us"
              className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:px-8 sm:py-4">
              Get Started
            </Link>

            <Link
              to="/contact-us"
              className="inline-flex w-full items-center justify-center rounded-lg border border-brand-600/30 bg-white/60 px-6 py-3.5 font-semibold text-brand-700 transition hover:border-brand-600 hover:bg-white sm:w-auto sm:px-8 sm:py-4">
              Explore Services
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:mt-16">
            <div className="border-l border-brand-600/25 pl-4">
              <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                100+
              </h3>
              <p className="mt-1 text-sm text-slate-700 sm:text-base">
                Projects Delivered
              </p>
            </div>

            <div className="border-l border-brand-600/25 pl-4">
              <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                50+
              </h3>
              <p className="mt-1 text-sm text-slate-700 sm:text-base">
                Happy Clients
              </p>
            </div>

            <div className="border-l border-brand-600/25 pl-4">
              <h3 className="text-2xl font-bold text-slate-950 sm:text-3xl">
                24/7
              </h3>
              <p className="mt-1 text-sm text-slate-700 sm:text-base">
                Support
              </p>
            </div>
          </div>
        </div>

        <LeadForm className="mx-auto max-w-md lg:mx-0 lg:justify-self-end" />
      </div>
    </section>
  );
};

export default Hero;
