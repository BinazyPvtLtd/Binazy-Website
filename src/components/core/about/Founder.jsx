import React from "react";
import { Quote } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.png";

const Founder = () => {
  return (
    <section className="section-padding bg-brand-600 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[minmax(320px,450px)_1fr] gap-10 lg:gap-20 items-center">
          {/* Left Card - Image */}
          <div className="relative">
            <div>
              <img
                src={founderPortrait}
                alt="Binazy Founder"
                loading="lazy"
                className="w-full max-h-[520px] h-auto sm:h-[460px] lg:h-[500px] object-cover transition duration-500"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-white/10 absolute -top-7 sm:-top-8 -left-3 sm:-left-4" />

            <div className="relative z-10">
              <blockquote className="text-xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-6 sm:mb-8">
                "At <span className="text-blue-300">Binazy</span>, we don't just
                build products; we architect the growth of our partners through
                cutting-edge digital engineering and visionary design."
              </blockquote>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-14 h-0.5 bg-blue-300 flex-shrink-0"></div>
                <p className="text-base sm:text-lg text-white/80">
                  Shaikh Ismaiel, Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
