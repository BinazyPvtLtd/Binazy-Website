import React from "react";
import { Quote } from "lucide-react";

const Founder = () => {
  return (
    <section className="section-padding bg-brand-600 relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[450px_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Card - Image */}
          <div className="relative">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                alt="Binazy Founder"
                className="w-full h-[500px] object-cover hover: transition duration-500"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <Quote className="w-16 h-16 text-white/10 absolute -top-8 -left-4" />

            <div className="relative z-10">
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug mb-8">
                "At <span className="text-blue-300">Binazy</span>, we don't just
                build products; we architect the growth of our partners through
                cutting-edge digital engineering and visionary design."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-[2px] bg-blue-300"></div>
                <p className="text-lg text-white/80">
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
