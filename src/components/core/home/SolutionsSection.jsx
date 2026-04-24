import { ArrowRight } from "lucide-react";

const services = [
  
  {
    title: "Lead Generation",
    desc: "Data-driven strategies to attract and convert high-quality leads, fueling your sales pipeline and business growth.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
  },
  {
    title: "Web Development",
    desc: "Modern, high-performance websites and web applications built for growth, speed, and seamless user experiences.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80",
  },
  {
    title: "Mobile App Development",
    desc: "Custom Android and iOS mobile apps designed to engage users and scale with your business needs.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
  },
  {
    title: "UI/UX Design",
    desc: "User-focused interfaces and premium digital experiences that improve conversions and customer satisfaction.",
    img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80",
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
                className="group relative bg-brand-900 p-7 md:p-8 min-h-[230px] md:min-h-[520px] overflow-hidden transition-all duration-500 hover:bg-brand-50">
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
                <span
                  aria-hidden="true"
                  className="absolute bottom-6 left-7 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/30 group-hover:bg-white/70 flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-brand-700" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
