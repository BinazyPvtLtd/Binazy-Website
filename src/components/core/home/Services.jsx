import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CloudCog,
  Code2,
  Headphones,
} from "lucide-react";
import solutionSoftwareApp from "@/assets/service1.jpg";
import solutionItSupport from "@/assets/service2.jpg";
import solutionCloud from "@/assets/service3.jpg";
import solutionAnalyticsAi from "@/assets/service4.jpg";

const services = [
  {
    title: "Software & App Development",
    desc: "Custom web, mobile, and business applications designed around your workflows, users, and growth goals.",
    outcome: "Product strategy, UI, APIs, and scalable delivery",
    img: solutionSoftwareApp,
    to: "/services/custom-software-development",
    icon: Code2,
    accent: "bg-blue-50 text-blue-600",
  },
  {
    title: "IT Support & Managed Services",
    desc: "Reliable support operations that keep teams productive, systems stable, and technical issues under control.",
    outcome: "Helpdesk, monitoring, security, and maintenance",
    img: solutionItSupport,
    to: "/services/24-7-helpdesk-support",
    icon: Headphones,
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "Cloud environments and infrastructure foundations built for performance, reliability, and operational control.",
    outcome: "Cloud setup, optimization, backups, and uptime",
    img: solutionCloud,
    to: "/services/remote-monitoring",
    icon: CloudCog,
    accent: "bg-amber-50 text-amber-600",
  },
  {
    title: "Data Analytics & AI Automation",
    desc: "Dashboards, reporting systems, and automation tools that help teams act faster with better information.",
    outcome: "BI dashboards, workflow automation, and AI tools",
    img: solutionAnalyticsAi,
    to: "/services/business-dashboard",
    icon: BarChart3,
    accent: "bg-rose-50 text-rose-600",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-white"
      aria-label="Our services">
      <div className="section-container">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mb-3 mt-2 text-sm font-medium text-slate-500 md:text-base">
            We help businesses grow across every major industry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((item) => (
            <Link
              to={item.to}
              key={item.title}
              aria-label={`Explore ${item.title}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl sm:min-h-[27rem]">
              <div className="relative h-40 overflow-hidden bg-slate-100 sm:h-44">
                <img
                  src={item.img}
                  alt={`${item.title} service preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-slate-950 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.desc}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600 transition group-hover:text-brand-800">
                  Explore service
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
