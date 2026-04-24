import React, { useState } from "react";

const PurposeCard = ({ title, description, image, points }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
      <div className="order-2 lg:order-1">
        <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 leading-tight">
          {title}
        </h3>

        <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
          {description}
        </p>

        {points && (
          <ul className="mt-8 space-y-4">
            {points.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-slate-700 text-lg">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right Image */}
      <div className="order-1 lg:order-2 relative group overflow-hidden rounded-2xl shadow-xl shadow-slate-200">
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
    </div>
  );
};

const CompanyTabsSection = () => {
  const [activeTab, setActiveTab] = useState("purpose");

  const tabs = [
    {
      id: "purpose",
      label: "Our Purpose",
      title: "Creating Digital Success with Innovation",
      description:
        "At Binazy, our purpose is to help businesses grow through powerful digital solutions. We build websites, mobile apps, and scalable software that solve real problems.\n\nWe believe technology should create opportunities, improve experiences, and help brands move faster in the digital world.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "vision",
      label: "Our Vision",
      title: "Building the Future of Digital Business",
      description:
        "Our vision is to become a trusted technology partner for startups and growing companies worldwide.\n\nWe aim to create modern products, smart systems, and impactful experiences that help businesses lead in their industries.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "values",
      label: "Our Values",
      title: "Values That Drive Everything We Do",
      description:
        "Our work is guided by strong values that shape every project and partnership.",
      points: [
        "Client Success First",
        "Innovation Every Day",
        "Transparency & Trust",
        "Quality Without Compromise",
        "Growth Together",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const activeData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section-padding bg-background w-full">
      <div className="section-container">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Company information"
          className="flex flex-wrap gap-4 md:gap-8 border-b border-slate-200 mb-8">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
              className={`pb-4 text-lg md:text-xl font-semibold transition-all duration-300 relative ${
                activeTab === tab.id
                  ? "text-brand-600"
                  : "text-slate-400 hover:text-navy-900"
              }`}>
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-600 rounded-t-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        <div id={`${activeTab}-panel`} role="tabpanel">
          <PurposeCard
            title={activeData.title}
            description={activeData.description}
            image={activeData.image}
            points={activeData.points}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyTabsSection;

