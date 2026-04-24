import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Laptop,
  Factory,
  Plane,
  Building2,
  Wallet,
  HeartPulse,
  Store,
} from "lucide-react";
import Logo from "../../assets/BinazyLogo.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const NAVBAR_THEME_CLASS =
  "bg-brand-950/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-slate-950/10";

  
/* SERVICES MENU */

const servicesMenu = [
  {
    id: "software-and-app-development",
    title: "Software & App Development",

    links: [
      {
        name: "Business Website",
        to: "/services/business-website-development",
      },
      {
        name: "Online Store",
        to: "/services/online-store",
      },
      {
        name: "OTT Platform Development",
        to: "/services/ott-platform-development",
      },
      {
        name: "Mobile App",
        to: "/services/mobile-app-development",
      },
      {
        name: "Booking & Appointment System",
        to: "/services/booking-appointment-system",
      },
      {
        name: "All-in-one Business Management System",
        to: "/services/all-in-one-business-management-system",
      },
      {
        name: "ERP System Development",
        to: "/services/erp-system-development",
      },
      {
        name: "Custom Software Development",
        to: "/services/custom-software-development",
      },
    ],
  },

  {
    id: "it-support-and-managed-services",
    title: "IT Support & Managed Services",
    links: [
      {
        name: "HR & Payroll System",
        to: "/services/hr-payroll-system",
      },
      {
        name: "Technology Migration",
        to: "/services/technology-migration",
      },
      {
        name: "Customer Management System",
        to: "/services/customer-management-system",
      },
      {
        name: "24/7 Helpdesk Support",
        to: "/services/24-7-helpdesk-support",
      },
      {
        name: "Remote Monitoring",
        to: "/services/remote-monitoring",
      },
      {
        name: "SLA-based Support Contracts",
        to: "/services/sla-based-support-contracts",
      },
    ],
  },

  {
    id: "digital-marketing-and-growth-services",
    title: "Digital Marketing & Growth Services",
    links: [
      {
        name: "Lead Generation",
        to: "/services/lead-generation",
      },
      {
        name: "Social Media Management",
        to: "/services/social-media-management",
      },
      {
        name: "Search Visibility",
        to: "/services/search-visibility",
      },
      {
        name: "Email & WhatsApp Campaigns",
        to: "/services/email-whatsapp-campaigns",
      },
      {
        name: "Performance Marketing",
        to: "/services/performance-marketing",
      },
    ],
  },

  {
    id: "cloud-and-infrastructure-services",
    title: "Cloud & Infrastructure Services",
    links: [
      {
        name: "Online Learning Platform",
        to: "/services/online-learning-platform",
      },
      {
        name: "Student & Staff Training Portal",
        to: "/services/student-staff-training-portal",
      },
      {
        name: "EdTech Product",
        to: "/services/edtech-product",
      },
      {
        name: "Secure Cloud Setup",
        to: "/services/secure-cloud-setup",
      },
      {
        name: "Automated Backup & Recovery",
        to: "/services/automated-backup-recovery",
      },
    ],
  },

  {
    id: "data-and-analytics-solutions",
    title: "Data & Analytics",
    links: [
      {
        name: "Business Dashboard",
        to: "/services/business-dashboard",
      },
      {
        name: "Sales & Inventory Reports",
        to: "/services/sales-inventory-reports",
      },
      {
        name: "Customer Behaviour Insights",
        to: "/services/customer-behaviour-insights",
      },
      {
        name: "Marketing Performance Tracking",
        to: "/services/marketing-performance-tracking",
      },
    ],
  },

  {
    id: "ai-and-automation",
    title: "AI & Automation",
    links: [
      {
        name: "24/7 AI Customer Support Agent",
        to: "/services/24-7-ai-customer-support-agent",
      },
      {
        name: "Smart Document Processing",
        to: "/services/smart-document-processing",
      },
      {
        name: "AI Sales Assistant",
        to: "/services/ai-sales-assistant",
      },
      {
        name: "Process Automation",
        to: "/services/process-automation",
      },
      {
        name: "Predictive Insights",
        to: "/services/predictive-insights",
      },
    ],
  },
];

/* INDUSTRIES MENU */
const industriesMenu = [
  {
    title: "Consumer Platforms",
    links: [
      {
        name: "Real Estate",
        desc: "Property portals, CRMs, and broker workflows",
        icon: Building2,
        to: "/industries/real-estate",
      },
      {
        name: "eCommerce",
        desc: "Storefronts, marketplace systems, and loyalty tools",
        icon: Store,
        to: "/industries/ecommerce",
      },
      {
        name: "Tour & Travel",
        desc: "Booking engines and travel management platforms",
        icon: Plane,
        to: "/industries/travel",
      },
    ],
  },
  {
    title: "Regulated Solutions",
    links: [
      {
        name: "Healthcare",
        desc: "Patient platforms, hospital systems, and telehealth",
        icon: HeartPulse,
        to: "/industries/healthcare",
      },
      {
        name: "Fintech",
        desc: "Payments, banking experiences, and compliance tools",
        icon: Wallet,
        to: "/industries/fintech",
      },
    ],
  },
  {
    title: "Growth & Operations",
    links: [
      {
        name: "E-Learning",
        desc: "LMS products, virtual classrooms, and student portals",
        icon: Laptop,
        to: "/industries/education",
      },
      {
        name: "Manufacturing",
        desc: "ERP, logistics, and production optimization systems",
        icon: Factory,
        to: "/industries/manufacturing",
      },
    ],
  },
];

function ServicesMegaMenu({ currentPath, data, id, onNavigate }) {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div
      id={id}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
      aria-label="Services menu">
      <div className="min-w-68 overflow-visible rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
        <div className="space-y-1">
          {data.map((section) =>
            section.links?.length ? (
              <div
                key={section.id}
                className="relative"
                onMouseEnter={() => setActiveSection(section.id)}
                onFocus={() => setActiveSection(section.id)}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSection((current) =>
                      current === section.id ? null : section.id,
                    )
                  }
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition ${
                    activeSection === section.id
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                  }`}>
                  <span>{section.title}</span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>

                {activeSection === section.id && (
                  <div className="absolute left-full top-0 z-20 ml-2 min-w-[18rem] rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl">
                    <div className="mb-2 px-3 pt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {section.title}
                    </div>

                    <div className="space-y-1">
                      {section.links.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={onNavigate}
                          aria-current={
                            currentPath === item.to ? "page" : undefined
                          }
                          className={`block rounded-xl px-3 py-2.5 text-sm transition ${
                            currentPath === item.to
                              ? "bg-brand-50 text-brand-700"
                              : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                          }`}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={section.id}
                to={section.to}
                onMouseEnter={() => setActiveSection(null)}
                onFocus={() => setActiveSection(null)}
                onClick={onNavigate}
                aria-current={currentPath === section.to ? "page" : undefined}
                className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition ${
                  currentPath === section.to
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                }`}>
                <span>{section.title}</span>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function IndustriesMegaMenu({ currentPath, data, id, onNavigate }) {
  return (
    <div
      id={id}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
      aria-label="Industries menu">
      <div className="w-[calc(100vw-2rem)] max-w-275 max-h-[calc(100vh-5.5rem)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 xl:p-10 border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10">
          {data.map((section, index) => (
            <div key={index} className="min-w-0">
              <h3 className="text-lg xl:text-xl font-bold text-black mb-4 xl:mb-6">
                {section.title}
              </h3>

              <div className="space-y-3">
                {section.links.map((item, itemIndex) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={itemIndex}
                      to={item.to}
                      onClick={onNavigate}
                      aria-current={
                        currentPath === item.to ? "page" : undefined
                      }
                      className="flex min-w-0 gap-3 xl:gap-4 rounded-xl border border-gray-100 p-3 hover:border-brand-200 hover:bg-gray-50 transition-all group focus-visible:border-brand-300 focus-visible:bg-brand-50">
                      <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-semibold text-gray-900 group-hover:text-brand-600">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileServiceGroup, setMobileServiceGroup] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMega(null);
        setMobileOpen(false);
        setMobileDropdown(null);
        setMobileServiceGroup(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const closeMegaOnBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveMega(null);
    }
  };

  const closeMegaOnEscape = (event) => {
    if (event.key === "Escape") {
      setActiveMega(null);
      event.currentTarget.querySelector("button, a")?.focus();
    }
  };

  const closeAllMenus = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
    setMobileServiceGroup(null);
    setActiveMega(null);
  };

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${NAVBAR_THEME_CLASS}`}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Top navigation bar shell */}
      <div className="responsive-container h-16 flex justify-between items-center">
        {/* Brand area */}
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:bg-white/10">
          <img
            src={Logo}
            alt="Binazy Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-white font-semibold text-lg">Binazy</span>
        </Link>

        {/* Desktop navigation links and mega menu */}

        <div className="hidden lg:flex items-center gap-1 xl:gap-2 relative min-w-0">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-current={location.pathname === link.to ? "page" : undefined}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition ${
                location.pathname === link.to
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              {link.label}
            </Link>
          ))}

          {/* Desktop services mega menu trigger */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMega("services")}
            onMouseLeave={() => setActiveMega(null)}
            onFocus={() => setActiveMega("services")}
            onBlur={closeMegaOnBlur}
            onKeyDown={closeMegaOnEscape}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeMega === "services"}
              aria-controls="services-mega-menu"
              onClick={() => setActiveMega("services")}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                location.pathname.startsWith("/services")
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              Services
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition ${
                  activeMega === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMega === "services" && (
              <ServicesMegaMenu
                currentPath={location.pathname}
                data={servicesMenu}
                id="services-mega-menu"
                onNavigate={closeAllMenus}
              />
            )}
          </div>

          {/* Desktop industries mega menu trigger */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveMega("industries")}
            onMouseLeave={() => setActiveMega(null)}
            onFocus={() => setActiveMega("industries")}
            onBlur={closeMegaOnBlur}
            onKeyDown={closeMegaOnEscape}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeMega === "industries"}
              aria-controls="industries-mega-menu"
              onClick={() => setActiveMega("industries")}
              className={`text-sm px-3 xl:px-4 py-2 rounded-lg transition flex items-center gap-1 ${
                location.pathname.startsWith("/industries")
                  ? "bg-white/10 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}>
              Industries
              <ChevronDown
                aria-hidden="true"
                className={`w-4 h-4 transition ${
                  activeMega === "industries" ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeMega === "industries" && (
              <IndustriesMegaMenu
                currentPath={location.pathname}
                data={industriesMenu}
                id="industries-mega-menu"
                onNavigate={closeAllMenus}
              />
            )}
          </div>

          {/* <Link
            to="/contact-us"
            aria-current={
              location.pathname === "/contact-us" ? "page" : undefined
            }
            className="text-sm px-3 xl:px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10">
            Contact Us
          </Link> */}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact-us"
          aria-current={
            location.pathname === "/contact-us" ? "page" : undefined
          }
          className="uppercase hidden xl:inline-flex items-center justify-center px-5 h-11 rounded-xl border border-white/20 bg-white/10 text-white text-sm font-medium tracking-wide backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-brand-950 hover:border-white hover:shadow-lg">
          Connect With Us
        </Link>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-2 -mr-2 rounded-lg hover:bg-white/10 transition"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}>
            {mobileOpen ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden overflow-hidden transition-all duration-300 max-h-[calc(100vh-4rem)] opacity-100">
          {/* Mobile navigation content */}
          <div className="bg-brand-950 px-4 sm:px-6 py-5 flex max-h-[calc(100vh-4rem)] flex-col gap-2 overflow-y-auto border-t border-white/10">
            <Link
              to="/"
              onClick={closeAllMenus}
              aria-current={location.pathname === "/" ? "page" : undefined}
              className="text-white py-2">
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeAllMenus}
              aria-current={location.pathname === "/about" ? "page" : undefined}
              className="text-white py-2">
              About
            </Link>

            {/* Mobile services accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "services" ? null : "services",
                  )
                }
                aria-controls="mobile-services-menu"
                aria-expanded={mobileDropdown === "services"}
                className="w-full text-white py-2 flex items-center justify-between text-left">
                Services
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition ${
                    mobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "services" && (
                <div
                  id="mobile-services-menu"
                  className="pl-3 sm:pl-4 pt-2 flex flex-col gap-2">
                  {servicesMenu.map((section) =>
                    section.links?.length ? (
                      <div key={section.id}>
                        <button
                          type="button"
                          onClick={() =>
                            setMobileServiceGroup((current) =>
                              current === section.id ? null : section.id,
                            )
                          }
                          className="flex w-full items-center justify-between py-2 text-left font-semibold text-white">
                          <span>{section.title}</span>
                          <ChevronDown
                            aria-hidden="true"
                            className={`h-4 w-4 transition ${
                              mobileServiceGroup === section.id
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {mobileServiceGroup === section.id && (
                          <div className="space-y-1 pb-2 pl-3">
                            {section.links.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={closeAllMenus}
                                aria-current={
                                  location.pathname === item.to
                                    ? "page"
                                    : undefined
                                }
                                className="block py-1 text-sm text-white/70">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={section.id}
                        to={section.to}
                        onClick={closeAllMenus}
                        aria-current={
                          location.pathname === section.to ? "page" : undefined
                        }
                        className="block py-2 font-semibold text-white">
                        {section.title}
                      </Link>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Mobile industries accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === "industries" ? null : "industries",
                  )
                }
                aria-controls="mobile-industries-menu"
                aria-expanded={mobileDropdown === "industries"}
                className="w-full text-white py-2 flex items-center justify-between text-left">
                Industries
                <ChevronDown
                  aria-hidden="true"
                  className={`w-4 h-4 transition ${
                    mobileDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "industries" && (
                <div
                  id="mobile-industries-menu"
                  className="pl-3 sm:pl-4 pt-2 flex flex-col gap-2">
                  {industriesMenu.map((section, i) => (
                    <div key={i}>
                      <p className="text-white font-semibold py-2">
                        {section.title}
                      </p>

                      {section.links.map((item, j) => (
                        <Link
                          key={j}
                          to={item.to}
                          onClick={closeAllMenus}
                          aria-current={
                            location.pathname === item.to ? "page" : undefined
                          }
                          className="block text-white/70 text-sm py-1">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              onClick={closeAllMenus}
              aria-current={
                location.pathname === "/contact-us" ? "page" : undefined
              }
              className="text-white py-2">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
