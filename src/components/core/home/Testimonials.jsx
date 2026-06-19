import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    id: 1,
    quote:
      "This is the first tool our entire team agreed on - and we are notoriously hard to please. Onboarding took under a day, and we shipped our first feature the same week.",
    name: "Priya Menon",
    role: "Head of Product",
    company: "Luma Labs",
    avatar: "https://i.pravatar.cc/96?img=47",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    quote:
      "Cut our review cycle from three days to three hours. The diff view alone is worth every rupee of the subscription.",
    name: "David Osei",
    role: "Engineering Lead",
    company: "Parafin",
    avatar: "https://i.pravatar.cc/96?img=12",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Finally a product that respects our data privacy constraints without compliance hoops. The SOC 2 report was ready before we even asked.",
    name: "Nadia Boulanger",
    role: "VP Security",
    company: "Vesper Health",
    avatar: "https://i.pravatar.cc/96?img=32",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "I was skeptical - we've tried six tools this year. This one actually stuck because it fits the way designers think, not just developers.",
    name: "Sakura Tanaka",
    role: "Design Systems",
    company: "Monzo",
    avatar: "https://i.pravatar.cc/96?img=49",
    rating: 4,
  },
  {
    id: 5,
    quote:
      "Support is shockingly responsive. Opened a ticket at midnight, had a fix deployed by morning. Never felt like a number in a queue.",
    name: "Alex Rivera",
    role: "CTO",
    company: "Bracket Studios",
    avatar: "https://i.pravatar.cc/96?img=15",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "We replaced three separate tools with this one. Our DevOps overhead dropped by 40% in the first month. Remarkable ROI.",
    name: "James Whitfield",
    role: "Platform Architect",
    company: "Clearbit",
    avatar: "https://i.pravatar.cc/96?img=59",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          fill="currentColor"
          className={`h-4 w-4 ${
            index < count ? "text-yellow-400" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="relative flex  rounded-xl h-full w-full flex-col border bg-white p-6">
      <StarRating count={testimonial.rating} />

      <span
        className="mt-3 -mb-2 select-none font-serif text-5xl leading-none text-gray-200"
        aria-hidden="true">
        &quot;
      </span>

      <p className=" flex-1 text-sm leading-relaxed text-gray-600">
        {testimonial.quote}
      </p>

      <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold leading-tight text-gray-900">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-xs leading-tight text-gray-400">
            {testimonial.role} - {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center lg:mb-12">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-md text-base text-gray-500">
            From startups to growing businesses our clients trust us to build
            reliable and impactful digital solutions.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[A11y, Autoplay]}
            loop
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-12"
            onSwiper={setSwiper}
            onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
            a11y={{
              prevSlideMessage: "Previous testimonial",
              nextSlideMessage: "Next testimonial",
            }}>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="flex! h-auto!">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiper?.slidePrev()}
            className="absolute left-0 top-[42%] z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white md:flex">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiper?.slideNext()}
            className="absolute right-0 top-[42%] z-10 hidden h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white md:flex">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-1 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => swiper?.slideToLoop(index)}
                className={`h-2 mt-2  rounded-full bg-blue-600 transition-all duration-300 ${
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
