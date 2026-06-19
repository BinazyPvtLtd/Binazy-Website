import React, { useState } from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SEO from "@/components/common/SEO";
import img from "@/assets/qq.png";
import img2 from "@/assets/12.jpg";
import { Plus, Minus, Circle } from "lucide-react";

const specializations = [
  "Accounting & Billing",
  "Education",
  "Banking & Financial Services",

  "Hospital & Pathology",
  "Petrol Pump",
  "Gaming",

  "Hotel Management System",
  "Real Estate",
  "News Portal",
];

const sections = [
  {
    title: "What We Do",
    content:
      "Binazy provides Website Development, Web Applications, Mobile App Development, UI/UX Design, Software Testing, SEO, and Digital Marketing services to startups, businesses, and enterprises worldwide.",
  },
  {
    title: "Company Philosophy",
    content:
      'Our philosophy is "Grow and Help Grow". We focus on quality, innovation, customer satisfaction, and building long-term relationships through modern technology solutions.',
  },
  {
    title: "Why Choose Us",
    content:
      "Experienced professionals, transparent communication, timely delivery, scalable solutions, and a commitment to helping businesses succeed digitally.",
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Binazy | Digital Product and Software Development Company"
        description="Learn about Binazy, a technology company building websites, mobile apps, custom software, and scalable digital systems worldwide."
        path="/about"
      />

      <Navbar />

      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="bg-[#0f2070] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              About <span className="text-blue-400">Binazy</span>
            </h1>

            <p className="max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
              Empowering businesses worldwide with innovative digital solutions,
              custom software, mobile applications, and scalable technologies
              that drive growth and digital transformation.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:mb-6 sm:text-4xl">
                  Who We Are
                </h2>

                <div className="space-y-5 text-base leading-7 text-gray-600 sm:leading-8">
                  <p>
                    Binazy Pvt. Ltd. is a leading IT development company based
                    in Lucknow, dedicated to delivering world-class digital
                    solutions. We help startups, businesses, and enterprises
                    build innovative products and unlock new growth
                    opportunities.
                  </p>

                  <p>
                    Our expertise includes Website Development, Web
                    Applications, Mobile App Development, UI/UX Design, Software
                    Testing, SEO, and Digital Marketing services.
                  </p>

                  <p>
                    At Binazy, we believe in{" "}
                    <strong>"Grow and Help Grow"</strong>. Our client-centric
                    approach, commitment to quality, and use of modern
                    technologies enable us to deliver reliable solutions on time
                    while building long-term relationships.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={img2}
                  alt="About Binazy"
                  className="h-72 w-full rounded-xl object-cover sm:h-96 lg:h-120"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialization Section */}
        <section className="bg-gray-50 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left Side */}
              <div>
                <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:mb-8 sm:text-4xl">
                  Website Designing in Lucknow
                </h2>

                <div className="space-y-4">
                  {sections.map((item, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                      <button
                        className="flex w-full items-center justify-between gap-4 bg-blue-800 px-4 py-4 text-left text-white transition hover:bg-blue-900 sm:px-6 sm:py-5"
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }>
                        <span className="text-base font-semibold sm:text-lg">
                          {item.title}
                        </span>

                        {openIndex === index ? (
                          <Minus size={22} />
                        ) : (
                          <Plus size={22} />
                        )}
                      </button>

                      {openIndex === index && (
                        <div className="border-t bg-white px-4 py-4 text-sm leading-7 text-gray-600 sm:px-6 sm:py-5 sm:text-base">
                          {item.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side */}
              <div>
                <h3 className="mb-6 text-2xl font-semibold uppercase leading-tight text-gray-700 sm:mb-8">
                  Our Specialization
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {specializations.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-gray-700 shadow-sm">
                      <Circle
                        size={12}
                        className="shrink-0 fill-sky-600 text-sky-600"
                      />

                      <span className="text-sm font-medium leading-5">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-blue-800 py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div>
                <img
                  src={img}
                  alt="Achievements"
                  className="h-72 w-full rounded-xl object-cover sm:h-96"
                />
              </div>

              <div className="">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-white/90 sm:mb-6 sm:text-4xl">
                  Our Achievements
                </h2>

                <div className="space-y-5 text-base leading-7 text-white/90 sm:leading-8">
                  <p>
                    Over the years, Binazy has successfully delivered numerous
                    software solutions and digital products for clients across
                    different industries. Our achievements are reflected in the
                    trust and satisfaction of our customers.
                  </p>

                  <p>
                    We focus on innovation, quality, and continuous improvement
                    to provide solutions that create real business value.
                    Through our talented team and modern technologies, we
                    continue to expand our capabilities and establish ourselves
                    as a trusted technology partner for businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
