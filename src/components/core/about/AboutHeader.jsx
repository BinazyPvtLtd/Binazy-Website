import React from "react";
import About from "../../../assets/About.png";

const AboutHeader = () => {
  const features = [
    {
      title: "Industry Expertise",
      desc: "Our team understands business requirements and delivers tailored solutions that help companies achieve their goals efficiently.",
    },
    {
      title: "Modern Technology",
      desc: "We leverage the latest technologies to build secure, scalable, and high-performance digital products.",
    },
    {
      title: "Dedicated Support",
      desc: "We provide reliable support and maintain transparency throughout every stage of the project lifecycle.",
    },
    {
      title: "Seamless Communication",
      desc: "We believe in maintaining clear and honest communication with our clients to ensure long-term partnerships.",
    },
  ];
  return (
    <>
      <section className="relative h-100 bg-blue-900 flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-blue-400">Binazy</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
            Empowering businesses worldwide with innovative digital solutions,
            custom software, mobile applications, and cutting-edge technology.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-5xl font-bold">
                Our <span className="text-blue-900">Story</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-9 mb-8 text-lg">
              Binazy is a global Information Technology company committed to
              delivering advanced digital solutions to businesses across the
              world. Founded with a vision to simplify and scale technology, we
              help organizations transform their ideas into powerful digital
              products.
            </p>

            <p className="text-gray-600 leading-9 mb-8 text-lg">
              We specialize in website development, custom software development,
              mobile application development, and end-to-end digital solutions
              for startups, enterprises, and growing businesses globally. Our
              focus is on building high-performance, secure, scalable, and
              SEO-friendly solutions that drive real business growth and improve
              digital presence in competitive markets.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-bold text-2xl text-gray-900">
                Innovation & Long-Term Partnerships
              </h3>
            </div>

            <p className="text-gray-600 leading-9 text-lg">
              At Binazy, we believe in long-term partnerships, innovation, and
              client success. Every project is executed with a strong focus on
              quality, transparency, and measurable results. We proudly serve
              clients worldwide, helping them grow through technology-driven
              strategies and modern digital engineering.
            </p>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-5">
            {/* Large Image */}
            <div className="row-span-2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                alt=""
                loading="lazy"
                className="rounded-2xl h-full object-cover"
              />
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              <div className="bg-slate-900 text-white rounded-2xl p-6 flex-1 text-center">
                <h3 className="text-5xl font-bold">2+</h3>
                <p className="mt-3 text-lg">Years of Experience</p>
              </div>

              <div className="bg-blue-900 text-white rounded-2xl p-6 flex-1 text-center">
                <h3 className="text-5xl font-bold">120+</h3>
                <p className="mt-3 text-lg">Happy Customers</p>
              </div>
            </div>

            {/* Bottom Image */}
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
              alt=""
              loading="lazy"
              className="rounded-2xl h-87 object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <img
              src={About}
              alt="Why Choose Binazy"
              loading="lazy"
              className="w-full h-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold mb-6">
              Why Choose <span className="text-blue-900">Binazy?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-4">
              Binazy is committed to delivering innovative and reliable digital
              solutions to businesses worldwide. We focus on quality,
              transparency, and measurable results that help organizations grow.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 overflow-hidden rounded-lg">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 ${
                    index === 0 || index === 3 ? "bg-blue-100" : "bg-white"
                  }`}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeader;
