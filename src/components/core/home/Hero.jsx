import React from "react";
import heroBackground from "@/assets/BackGround5.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="relative flex h-87.5 w-full items-center justify-center overflow-hidden bg-cover bg-center px-5 py-10 sm:px-8 md:h-112.5 lg:h-150 lg:px-12"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}>
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h1 className="mx-auto max-w-5xl text-3xl font-semibold leading-[1.08] tracking-normal text-white drop-shadow-2xl sm:text-5xl lg:text-6xl xl:text-7xl">
          Digital solutions that help your business grow faster
        </h1>

        {/* Subtext */}
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-white/90 drop-shadow-lg sm:mt-6 sm:text-lg md:text-xl md:leading-8">
          From custom websites and mobile apps to ERP systems, dashboards, and
          AI automation, Binazy creates digital solutions that improve
          visibility, operations, and long-term growth.
        </p>

        {/* CTA Button */}
        <div className="mt-6 flex justify-center sm:mt-10">
          <Link
            to="/contact-us"
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-brand-500 sm:px-8 sm:text-lg">
            Start Your Free Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
