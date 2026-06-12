import React from "react";
import About from "../../../assets/About1.jpg";
import About2 from "../../../assets/About2.jpg";

const AboutHeader = () => {
  return (
    <>
      <section className="relative min-h-80 sm:min-h-95 lg:min-h-105 bg-[#0f2070] flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            About <span className="text-blue-400">Binazy</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-200 leading-7 sm:leading-8">
            Empowering businesses worldwide with innovative digital solutions,
            custom software, mobile applications, and cutting-edge technology.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Our <span className="text-blue-900">Story</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-7 sm:leading-8 lg:leading-9 mb-6 sm:mb-8 text-base sm:text-lg">
              Binazy is a global Information Technology company committed to
              delivering advanced digital solutions to businesses across the
              world. Founded with a vision to simplify and scale technology, we
              help organizations transform their ideas into powerful digital
              products.
            </p>

            <p className="text-gray-600 leading-7 sm:leading-8 lg:leading-9 mb-6 sm:mb-8 text-base sm:text-lg">
              We specialize in website development, custom software development,
              mobile application development, and end-to-end digital solutions
              for startups, enterprises, and growing businesses globally. Our
              focus is on building high-performance, secure, scalable, and
              SEO-friendly solutions that drive real business growth and improve
              digital presence in competitive markets.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-900 leading-snug">
                Innovation & Long-Term Partnerships
              </h3>
            </div>

            <p className="text-gray-600 leading-7 sm:leading-8 lg:leading-9 text-base sm:text-lg">
              At Binazy, we believe in long-term partnerships, innovation, and
              client success. Every project is executed with a strong focus on
              quality, transparency, and measurable results. We proudly serve
              clients worldwide, helping them grow through technology-driven
              strategies and modern digital engineering.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <img
              src={About2}
              alt=""
              loading="lazy"
              className="w-full h-64 sm:h-80 lg:h-90 object-cover"
            />
            <img
              src={About}
              alt=""
              loading="lazy"
              className="w-full h-64 sm:h-80 lg:h-90 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
