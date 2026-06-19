import { Link } from "react-router-dom";
import CTA from "@/assets/CTA.jpg";

const CTASection = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center py-14 sm:py-20 lg:py-28"
      style={{ backgroundImage: `url(${CTA})` }}>
      {/* Overlay */}

      {/* Content */}
      <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 sm:mb-6 sm:text-5xl lg:text-6xl">
          Ready to Elevate Your
          <br className="hidden sm:block" />
          <span className="text-blue-600"> Digital Presence?</span>
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-600 sm:mb-10 sm:text-xl sm:leading-relaxed">
          Build modern websites, scalable apps, and digital solutions that help
          your business grow faster with confidence.
        </p>

        <div className="mx-auto">
          <Link
            to="/contact-us"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 font-semibold text-white transition hover:bg-slate-800 sm:w-auto sm:px-8 sm:py-4">
            Book a Free Consultation
            {/* <ArrowRight className="w-4 h-4" /> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
