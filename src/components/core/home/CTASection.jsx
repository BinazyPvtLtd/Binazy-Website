import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTA from "@/assets/CTA.jpg";

const CTASection = () => {
  return (
    <section
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${CTA})` }}>
      {/* Overlay */}

      {/* Content */}
      <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
          Ready to Elevate Your
          <br className="hidden sm:block" />
          <span className="text-blue-600"> Digital Presence?</span>
        </h2>

        <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Build modern websites, scalable apps, and digital solutions that help
          your business grow faster with confidence.
        </p>

        <div className="mx-auto">
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold transition">
          Book a Free Consultation
            {/* <ArrowRight className="w-4 h-4" /> */}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
