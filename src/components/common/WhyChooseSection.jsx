import React from "react";
import { ArrowUpRight, Bot, CircleDollarSign, Rocket } from "lucide-react";
import whyus from "../../assets/whyus.jpg";

export default function WhyChooseSection() {
  const points = [
    {
      icon: Bot,
      title: "Future-Focused Solutions with Modern Technologies",
      desc: "We build scalable web applications using the latest frameworks, cloud architecture, and AI-powered integrations. Every solution is designed for long-term growth, speed, and seamless performance.",
    },
    {
      icon: CircleDollarSign,
      title: "Transparent Pricing with Business Value in Mind",
      desc: "Our development process balances quality and cost-effectiveness. We create custom engagement models that fit your goals, budget, and project scope while maximizing ROI.",
    },
    {
      icon: Rocket,
      title: "Agile Execution for Faster Delivery",
      desc: "Using an agile workflow, we deliver projects in milestones with continuous feedback. This keeps development flexible, efficient, and aligned with your changing business needs.",
    },
  ];

  return (
    <section className="section-padding bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_46%,#eff6ff_100%)]">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">
              Why Binazy
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Why Choose Binazy as Your Web Application Development Partner
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              We combine product thinking, modern engineering, and delivery
              discipline to help businesses launch web applications that feel
              polished, scale cleanly, and support real business growth.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-[0_25px_80px_rgba(15,23,42,0.12)]">
              <img
                src={whyus}
                alt="Team planning a web application development project"
                className="h-72 w-full object-cover sm:h-80 lg:h-[26rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Product strategy + engineering execution
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:gap-6">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-7">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_30%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 max-w-2xl text-xl font-semibold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-500 transition-colors duration-300 group-hover:border-brand-100 group-hover:bg-brand-50 group-hover:text-brand-600">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="relative z-10 mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
