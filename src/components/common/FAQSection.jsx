// components/FAQSection.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = ({
  faqs = [],
  title = "Frequently Asked Questions",
  subtitle,
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section className="section-padding">
        <div className="section-container">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
            <h2 className="section-heading">{title}</h2>
            <p className="section-subheading">
              {subtitle ?? (
                <>
                  We are here to help you with any questions you may have. If
                  you don't find what you need, please contact us at{" "}
                  <a
                    href="mailto:work@binazy.org"
                    className="text-brand-600 hover:text-brand-700 font-medium hover:underline underline-offset-4 transition-colors">
                    work@binazy.org
                  </a>
                </>
              )}
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white border rounded-xl overflow-hidden transition-all duration-200 ${
                  openIndex === index
                    ? "border-brand-200 shadow-md shadow-brand-50"
                    : "border-slate-100 hover:border-slate-200"
                }`}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-start justify-between gap-4 px-4 sm:px-6 py-4 sm:py-4.5 text-left group">
                  <span
                    className={`font-medium leading-snug transition-colors ${
                      openIndex === index ? "text-brand-700" : "text-slate-800"
                    }`}>
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 mt-0.5 shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-brand-600"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}>
                  <div className="overflow-hidden">
                    <div className="px-4 sm:px-6 pb-5 text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
