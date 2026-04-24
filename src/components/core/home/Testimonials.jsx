import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const StarIcon = () => (
  <svg
    className="h-4 w-4 fill-amber-400"
    viewBox="0 0 20 20"
    aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
  </svg>
);

const testimonials = [
  {
    initials: "RS",
    avatarClassName: "bg-slate-900 text-white",
    name: "Rahul Sharma",
    role: "CEO - NovaTech Solutions, Mumbai",
    tag: "SaaS",
    text: "Working with this team was one of the best decisions for our product launch. They delivered a scalable platform on time with excellent quality and strong technical expertise.",
  },
  {
    initials: "PM",
    avatarClassName: "bg-blue-600 text-white",
    name: "Priya Mehta",
    role: "Product Director - FinEdge, Bengaluru",
    tag: "Fintech",
    text: "They understood our business goals quickly and transformed our ideas into a polished digital product. Communication was professional, transparent, and highly responsive.",
  },
  {
    initials: "NK",
    avatarClassName: "bg-emerald-600 text-white",
    name: "Neha Kapoor",
    role: "Operations Head - LogiCore, Delhi",
    tag: "Logistics",
    text: "We needed a reliable technology partner for automation, and they exceeded expectations. The final solution improved our workflow efficiency significantly.",
  },
  {
    initials: "AV",
    avatarClassName: "bg-violet-600 text-white",
    name: "Arjun Verma",
    role: "Founder - LearnSphere, Pune",
    tag: "EdTech",
    text: "From UI design to backend development, everything was handled with precision. Their balance of creativity and technical skill added real value to our business.",
  },
];

const metrics = [
  { value: "98%", label: "Client retention" },
  { value: "120+", label: "Projects delivered" },
  { value: "4.9/5", label: "Average rating" },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#eff6ff_100%)] py-20 lg:py-28">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14">
          <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Client Feedback
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Trusted by teams building modern digital products
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg lg:leading-8">
              We help startups and growth-focused companies ship faster, scale
              smarter, and create products people genuinely enjoy using.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-5">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 sm:px-5">
                  <p className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:bg-blue-600 hover:text-white">
                <ArrowLeft className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Show next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-200 hover:bg-blue-600 hover:text-white">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-blue-100/70 blur-2xl sm:block" />
            <div className="absolute -right-4 bottom-8 hidden h-28 w-28 rounded-full bg-sky-100/80 blur-2xl sm:block" />

            <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_28px_90px_rgba(15,23,42,0.1)] sm:p-8 lg:p-10">
              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Quote className="h-5 w-5" />
              </div>

              <div className="flex items-center justify-between gap-4 pr-14">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>

                <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {activeTestimonial.tag}
                </span>
              </div>

              <p className="mt-8 text-base leading-8 text-slate-700 sm:text-lg">
                "{activeTestimonial.text}"
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div
                  aria-hidden="true"
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold tracking-[0.12em] ${activeTestimonial.avatarClassName}`}>
                  {activeTestimonial.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-sm leading-6 text-slate-500">
                    {activeTestimonial.role}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-pressed={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-blue-600"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
