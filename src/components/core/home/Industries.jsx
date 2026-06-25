import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { industriesData, industryNavItems } from "@/data/industriesData";

import "swiper/css";

const industries = industryNavItems.map((item) => {
  const industry = industriesData[item.id];

  return {
    id: item.id,
    title: item.title,
    desc: industry.subtitle,
    img: industry.heroImage,
    to: item.to,
  };
});

function IndustryCard({ item }) {
  return (
    <Link
      to={item.to}
      aria-label={`Explore ${item.title}`}
      className="group flex h-full min-h-105 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl">
      <div className="relative h-40 overflow-hidden bg-slate-100 sm:h-44">
        <img
          src={item.img}
          alt={`${item.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-slate-950 sm:text-xl">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>

        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-brand-600 transition group-hover:text-brand-800">
          Explore industry
          <ArrowRight
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

export default function Industries() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="industries"
      className="section-padding overflow-hidden bg-white"
      aria-label="Industries we serve">
      <div className="section-container">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Industries We Serve
          </h2>
          <p className="mb-3 mt-2 text-sm font-medium text-slate-500 md:text-base">
            Domain-aware software, built for how your industry actually works.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[A11y, Autoplay]}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
            onSwiper={setSwiper}
            onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
            a11y={{
              prevSlideMessage: "Previous industry",
              nextSlideMessage: "Next industry",
            }}>
            {industries.map((item) => (
              <SwiperSlide key={item.id} className="flex! h-auto!">
                <IndustryCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous industry"
            onClick={() => swiper?.slidePrev()}
            className="absolute left-0 top-[42%] z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-600 hover:bg-brand-600 hover:text-white md:flex">
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Next industry"
            onClick={() => swiper?.slideNext()}
            className="absolute right-0 top-[42%] z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-600 hover:bg-brand-600 hover:text-white md:flex">
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-1 flex justify-center gap-2">
            {industries.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to ${item.title}`}
                onClick={() => swiper?.slideToLoop(index)}
                className={`mt-2 h-2 rounded-full bg-brand-600 transition-all duration-300 ${
                  activeIndex === index ? "w-6 opacity-100" : "w-2 opacity-30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
