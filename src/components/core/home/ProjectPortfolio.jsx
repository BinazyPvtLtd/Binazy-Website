import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ProjectPortfolio() {
  const items = [
    {
      title: "Website Development for BrightTech Solutions",
      desc: "We created a modern business website for BrightTech Solutions with responsive design, fast loading speed, and lead generation features.",
      projectType: "Web Application",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "E-Commerce Store for UrbanStyle",
      desc: "We developed an online store for UrbanStyle with secure payments, product management, and a smooth shopping experience.",
      projectType: "Mobile Application",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mobile App for QuickServe",
      projectType: "Mobile Application",
      desc: "We built a user-friendly mobile app for QuickServe with booking features, notifications, and real-time updates.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Business Software for PrimeWorks",
      projectType: "SaaS Platform",
      desc: "We delivered custom software for PrimeWorks to manage daily operations, team workflow, and reporting systems.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Learning Platform for SkillNest",

      desc: "We developed an online learning platform for SkillNest with course management, student dashboards, and secure login systems.",
      projectType: "Learning Management System",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="section-padding bg-brand-600 text-white overflow-hidden">
      {/* Header */}
      <div className="section-container flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Project Portfolio
        </h2>
        {/* <span className="text-base sm:text-lg font-medium text-white/80">
          View Our all Delivered Projects
        </span> */}
      </div>

      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          grabCursor={true}
          speed={700}
          navigation={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 14 },
            480: { slidesPerView: 1.4, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 18 },
            768: { slidesPerView: 2.3, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 22 },
            1280: { slidesPerView: 3.5, spaceBetween: 24 },
          }}>
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group relative h-95 sm:h-107.5 md:h-117.5 lg:h-130 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl cursor-pointer">
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/80 group-hover:from-brand-400/30 group-hover:to-brand-950/90 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col">
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.22em] text-white/70 mb-3 sm:mb-5">
                    {item.projectType}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl leading-snug font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/80 leading-6 sm:leading-7 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.desc}
                  </p>
                  <div className="mt-auto pt-5">
                    {/* Arrow */}
                    <span
                      aria-hidden="true"
                      className="absolute bottom-6 left-7 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/30 group-hover:bg-white/70 flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-brand-700" />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
