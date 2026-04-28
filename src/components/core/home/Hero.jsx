import React from "react";
import heroBackground from "@/assets/BackGround5.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}>
      <div className="max-w-4xl text-center relative z-10">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-white/90 leading-tight">
          Digital solutions that help your business grow faster
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
          From custom websites and mobile apps to ERP systems, dashboards, and
          AI automation, Binazy creates digital solutions that improve
          visibility, operations, and long-term growth.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact-us"
            className="bg-blue-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg">
            Start Your Free Demo
          </Link>
        </div>
      </div>
    </div>
  );
}
