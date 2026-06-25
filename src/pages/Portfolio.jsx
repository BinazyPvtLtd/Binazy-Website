import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import SEO from "@/components/common/SEO";
import StatsSection from "@/components/common/StatsSection";
import collegeDrishti from "@/assets/collegeDrishti.png";
import onlinelpu from "@/assets/onlinelpu.png";
import sholini from "@/assets/sholini.png";
import manipaal from "@/assets/manipaal.png";
import collegequestion from "@/assets/collegequestion.png";
import clo from "@/assets/clo.png";

const portfolios = [
  {
    id: 1,
    title: "College Drishti",
    image: collegeDrishti,

    description:
      "A smart college discovery platform that helps students explore, compare, and choose the right university with rankings, course details, and expert insights A smart college discovery platform that helps students explore, compare, and choose the right university with rankings, course details, and expert insights all in one place.",

    website: "https://collegedrishti.com/",
  },
  {
    id: 2,
    title: " CLO Fashion Store",
    image: clo,

    description:
      "A premium Indian clothing brand offering elegant ethnic and contemporary wear from silk co-ord sets to kurtas, crafted with quality fabrics and artistic prints.",

    website: "https://clo.co.in/",
  },

  {
    id: 3,
    title: "Online LPU",
    image: onlinelpu,
    description:
      "Online admission portal for LPU's distance & online degree programs MBA, MCA, BCA and more with UGC-approved, NAAC A++ accredited degrees starting at genuin Price.",

    website: "https://onlinelpu.com/",
  },
  {
    id: 4,
    title: "Online MBA Study",
    image: sholini,
    description:
      "Your guide to Shoolini University's online MBA & degree programs explore courses, fees, eligibility, and get free expert admission guidance for 2026.",

    website: "https://onlinembastudy.com/",
  },
  {
    id: 5,
    title: "Online Manipal University Admission Portal",
    image: manipaal,
    description:
      "Online admission platform for Manipal University's accredited degree programs explore MBA, MCA, and more with expert counseling and easy enrollment.",

    website: "https://onlinembastudy.com/",
  },
  {
    id: 6,
    title: "College Question Online Degree Search Platform",
    image: collegequestion,
    description:
      "India's go-to platform for discovering UGC-entitled online degree programs explore top universities, compare courses, and get expert guidance to find your perfect fit.",

    website: "https://onlinembastudy.com/",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio | Binazy"
        description="Explore Binazy portfolio projects and digital solutions."
        path="/portfolio"
      />

      <Navbar />

      <main id="main-content" className="pt-16">
        <section className="bg-[#0f2070] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Our <span className="text-blue-400">Portfolio</span>
            </h1>

            <p className="max-w-3xl text-base leading-7 text-gray-200 sm:text-lg sm:leading-8">
              Browse our portfolio of websites, mobile apps, and custom software
              solutions built for startups, businesses, and enterprises
              worldwide.
            </p>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Real projects{" "}
                <span className="text-blue-900">measurable results</span>
              </h2>

              <p className="mt-5 text-lg text-slate-600 leading-8">
                See the challenges, solutions, and outcomes from products we
                have built for clients and then start a similar project with our
                team
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {portfolios.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/90 overflow-hidden border border-slate-200 ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-7">
                    <h3 className="text-3xl font-semibold text-blue-800 ">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-slate-600 leading-8">
                      {item.description}
                    </p>

                    <div className="mt-8 flex gap-8">
                      <a
                        href={item.website}
                        //for new tab open url
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-700 hover:text-blue-900 flex items-center gap-2">
                        Visit site
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 3h7v7m0-7L10 14m-4-7H3v14h14v-3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <StatsSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
