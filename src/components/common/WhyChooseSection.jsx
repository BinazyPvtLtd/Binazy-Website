import React from "react";
import {
  BarChart3,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";
import img from "@/assets/whyus.jpg";

const features = [
  {
    icon: Target,
    title: "Strategy-First Development",
    desc: "We start with your business goals, users, and workflows so every website, app, or system solves a real problem.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Workflow,
    title: "Systems Built Around Your Operations",
    desc: "From ERP and HRMS to dashboards and automation, we create connected tools that reduce manual work and improve visibility.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure, Scalable Architecture",
    desc: "Our solutions are built for performance, reliability, and long-term maintainability as your business grows.",
    color: "bg-red-100 text-red-500",
  },
  {
    icon: BarChart3,
    title: "Focused on Business Outcomes",
    desc: "We align design, development, SEO, and automation around better leads, smoother operations, and measurable growth.",
    color: "bg-green-100 text-green-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-800">
            Why Choose Us?
          </h2>

          <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Cards */}
          <div className="space-y-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition duration-300 flex gap-5"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
                  >
                    <Icon size={30} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative bg-white p-3 rounded-[40px] border-[6px] border-sky-500 shadow-xl overflow-hidden max-w-md">
              <img
                src={img}
                alt="Why Choose Us"
                className="w-full h-[550px] object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
