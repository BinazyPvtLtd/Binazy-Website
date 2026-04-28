import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import solutionSoftwareApp from "@/assets/solutions-software-app.jpg";
import solutionItSupport from "@/assets/solutions-it-support.jpg";
import solutionCloud from "@/assets/solutions-cloud.jpg";
import solutionAnalyticsAi from "@/assets/solutions-analytics-ai.jpg";

const services = [
  {
    title: "Software & App Development",
    desc: "Software & app development solutions designed to streamline operations, enhance user experiences.",
    img: solutionSoftwareApp,
    to: "/services/custom-software-development",
  },
  {
    title: "IT Support & Managed Services",
    desc: "Reliable IT support and managed services built to improve security.",
    img: solutionItSupport,
    to: "/services/24-7-helpdesk-support",
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "Secure, scalable cloud and infrastructure services built to optimize performance.",
    img: solutionCloud,
    to: "/services/remote-monitoring",
  },
  {
    title: "Data Analytics & AI Automation",
    desc: "Data analytics and AI automation solutions built to uncover insights, streamline workflows.",
    img: solutionAnalyticsAi,
    to: "/services/business-dashboard",
  },
];

export default function SolutionsSection() {
  return (
    <>
      <section
        id="solutions-section"
        className="section-padding bg-brand-600"
        aria-label="Our services">
        <div className="section-container">
          {/* Heading */}
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-5xl">
            <span className="px-2">
              Empower Your Business with Access to World-Class
            </span>
            <br />
            <span className=" px-2">Products, Services, and Solutions</span>
          </h2>

          <p className="text-white/90 text-base sm:text-lg mt-6 leading-relaxed">
            We cover your connected IT ecosystem.
          </p>

          {/* <div>This section services what we do like web dev seo and all </div> */}

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10 md:mt-14">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative bg-brand-900 p-7 md:p-8 min-h-57.5 md:min-h-130 overflow-hidden transition-all duration-500 hover:bg-brand-50">
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white group-hover:text-brand-700 text-2xl md:text-3xl font-semibold tracking-tight leading-snug mb-5">
                    {item.title}
                  </h3>

                  <p className="text-white/90 group-hover:text-brand-700 text-base md:text-lg leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </div>

                {/* Desktop Hover Image */}
                <div className="hidden md:block absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-all duration-700">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                    style={{
                      clipPath:
                        "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)",
                    }}
                  />
                </div>

                {/* Arrow */}
                <Link
                  to={item.to}
                  aria-label={`Explore ${item.title}`}
                  className="absolute bottom-6 left-7 z-20 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/30 group-hover:bg-white/70 flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-brand-700" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
