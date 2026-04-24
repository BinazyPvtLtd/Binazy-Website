import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import FAQSection from "@/components/common/FAQSection";
import StatsSection from "@/components/common/StatsSection";
import WhyChooseSection from "@/components/common/WhyChooseSection";

const ServiceDetailsTemplate = ({
  title,
  titleHighlight,
  subtitle,
  techHeading,
  techTagline,
  techDescription,
  services,
  spotlightHeading,
  projects,
}) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main id="main-content">
        {/* HERO SECTION */}
       <section className="bg-[#0f2070]  text-white">
          <div className="section-container pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
            <div className="max-w-4xl">
              <h1 className="mt-6 text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                {title}
                <br />
                <span className="text-blue-300">{titleHighlight}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT SPOTLIGHT SECTION */}
        <section className="section-padding flex items-center lg:min-h-[80vh]">
          <div className="section-container">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-wide mb-8 md:mb-10">
              {spotlightHeading}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
              {projects.map((project, index) => (
                <div key={index} className="w-full min-w-0">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-56 sm:h-72 md:h-85 lg:h-105 object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight leading-snug">
                    {project.name || project.alt}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-600">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH DETAILS SECTION */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-4xl mb-10 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                {techHeading}
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-blue-600">
                {techTagline}
              </p>
              <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                {techDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group min-w-0 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 ${service.iconBg}`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <StatsSection />

        {/* WHY CHOOSE US */}
        <WhyChooseSection />

        {/* FAQ SECTION */}
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetailsTemplate;
