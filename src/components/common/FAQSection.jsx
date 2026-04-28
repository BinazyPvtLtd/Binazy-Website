// components/FAQSection.jsx
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const homeFaqs = [
  {
    question: "What does Binazy do?",
    answer:
      "Binazy helps businesses grow through custom websites, software solutions, digital strategy, and modern technology built for real results.",
  },
  {
    question: "Why should I choose Binazy?",
    answer:
      "We focus on business growth, not just design. Every solution is built to improve leads, operations, customer experience, and long-term success.",
  },
  {
    question: "Do you build custom websites for businesses?",
    answer:
      "Yes, we create fast, modern, and conversion-focused websites tailored to your brand, goals, and target audience.",
  },
  {
    question: "Can Binazy help generate more leads online?",
    answer:
      "Yes, we build websites and digital systems designed to attract visitors, capture leads, and turn traffic into paying customers.",
  },
  {
    question: "Do you work with startups and growing businesses?",
    answer:
      "Yes, we work with startups, local businesses, and established companies looking to scale with smarter digital solutions.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer maintenance, updates, technical support, and growth improvements after your project goes live.",
  },
  {
    question: "How do I get started with Binazy?",
    answer:
      "Simply contact our team, share your business goals, and we will recommend the best strategy to help you grow online.",
  },
];

const FAQSection = ({
  faqs = homeFaqs,
  title = "Frequently Asked Questions",
  subtitle = "We are here to help you with any questions you may have.",
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="section-heading">{title}</h2>
          <p className="section-subheading">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left">
                <span className="font-medium text-slate-800">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
