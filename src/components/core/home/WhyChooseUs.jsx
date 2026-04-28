import React, { useState } from "react";
import { Check, Users, Code2, ShieldCheck } from "lucide-react";
import whyusss from "@/assets/whyusss.jpg";
import whyChoiceTech from "@/assets/why-choice-tech.jpg";
import whyChoiceGrowth from "@/assets/why-choice-growth.jpg";

const features = [
  {
    title: "Client-Centric Approach",
    desc: "We prioritize your business goals and tailor our solutions to your needs.",
    points: [
      "Personalized strategies",
      "Transparent communication",
      "Continuous support",
    ],
  },
  {
    title: "Cutting-Edge Technology",
    desc: "We leverage the latest tech to deliver robust and scalable solutions.",
    points: [
      "Modern frameworks",
      "Cloud integration",
      "Security best practices",
    ],
  },
  {
    title: "Proven Track Record",
    desc: "Our portfolio showcases successful projects across industries.",
    points: [
      "Diverse clientele",
      "Award-winning solutions",
      "Long-term partnerships",
    ],
  },
];

const highlights = [
  {
    icon: <Users className="w-6 h-6 text-white" />,
    bg: "bg-brand-600",
    title: "Flexible & Future-Ready Solutions",
    desc: "We build scalable systems that grow with your business.",
    img: whyusss,
  },
  {
    icon: <Code2 className="w-6 h-6 text-white" />,
    bg: "bg-brand-700",
    title: "Expert Developers, Quality Output",
    desc: "Clean, efficient code with reliable performance.",
    img: whyChoiceTech,
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    bg: "bg-brand-800",
    title: "Consistency & Reliability",
    desc: "Stable, secure, and dependable long-term solutions.",
    img: whyChoiceGrowth,
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* SECTION 1 */}
      <section className="py-14 md:py-20 overflow-hidden bg-white">
        <div className="section-container">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-5">
              Built for Modern Business Growth
            </h2>

            <p className="text-slate-500 text-lg leading-relaxed">
              We combine strategy, technology, and execution to deliver premium
              digital products that help businesses scale faster.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-brand-600" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-14 md:py-20 bg-slate-50 overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">
            <div>
              <img
                src={highlights[activeIndex].img}
                alt={`${highlights[activeIndex].title} visual`}
                className="w-full rounded-3xl object-cover transition-all duration-500"
              />
            </div>

            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold mb-5">
                Premium Solutions
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-8">
                Your Trusted Partner For
                <br />
                Scalable Digital Success
              </h2>

              <div className="space-y-5">
                {highlights.map((item, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={activeIndex === index}
                    className={`w-full text-left flex gap-4 p-5 rounded-2xl bg-white border shadow-sm hover:shadow-md transition duration-300 cursor-pointer ${
                      activeIndex === index
                        ? "border-brand-500"
                        : "border-slate-200"
                    }`}>
                    <span
                      aria-hidden="true"
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
                      {item.icon}
                    </span>

                    <span className="block">
                      <span className="block text-lg font-semibold text-slate-900 mb-1">
                        {item.title}
                      </span>

                      <span className="block text-sm text-slate-500 leading-relaxed">
                        {item.desc}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
